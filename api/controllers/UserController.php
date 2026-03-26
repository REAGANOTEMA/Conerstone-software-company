<?php
require_once '../config/Database.php';
require_once '../config/headers.php';
require_once '../config/Validator.php';
require_once '../config/ErrorHandler.php';

class UserController {
    private $conn;

    public function __construct() {
        $database = new Database();
        $this->conn = $database->getConnection();
    }

    public function register() {
        $data = json_decode(file_get_contents("php://input"));

        // Validate required fields (OPEN REGISTRATION - NO STUDENT ID)
        ErrorHandler::validateAndSendError($data, ['first_name', 'last_name', 'email', 'password']);
        
        // Validate email format
        ErrorHandler::validateEmailAndSendError($data->email);
        
        // Validate password strength
        ErrorHandler::validatePasswordAndSendError($data->password);

        // Sanitize inputs
        $sanitizedData = [
            'first_name' => Validator::sanitizeString($data->first_name),
            'last_name' => Validator::sanitizeString($data->last_name),
            'email' => Validator::sanitizeEmail($data->email),
            'password' => $data->password,
            'role' => Validator::sanitizeString($data->role ?? 'student'),
            'phone' => Validator::sanitizeString($data->phone ?? ''),
            'bio' => Validator::sanitizeString($data->bio ?? ''),
            'location' => Validator::sanitizeString($data->location ?? '')
        ];

        try {
            // Check if user already exists
            $check_query = "SELECT id FROM users WHERE email = ?";
            $check_stmt = $this->conn->prepare($check_query);
            $check_stmt->execute([$data->email]);

            if ($check_stmt->rowCount() > 0) {
                http_response_code(400);
                echo json_encode(['success' => false, 'message' => 'Email already registered']);
                return;
            }

            // Hash password
            $hashed_password = password_hash($data->password, PASSWORD_DEFAULT);

            // Auto-approve all registrations (OPEN REGISTRATION)
            $query = "INSERT INTO users (first_name, last_name, email, password, role, phone, bio, location, is_approved) 
                     VALUES (?, ?, ?, ?, ?, ?, ?, ?, 1)";
            $stmt = $this->conn->prepare($query);
            $stmt->execute([
                $sanitizedData['first_name'],
                $sanitizedData['last_name'],
                $sanitizedData['email'],
                $hashed_password,
                $sanitizedData['role'],
                $sanitizedData['phone'],
                $sanitizedData['bio'],
                $sanitizedData['location']
            ]);

            $user_id = $this->conn->lastInsertId();

            // Generate JWT token
            require_once '../config/JWT.php';
            $jwt = new JWT();
            $token = $jwt->encode(['user_id' => $user_id, 'role' => $sanitizedData['role']]);

            http_response_code(201);
            echo json_encode([
                'success' => true,
                'message' => 'Registration successful! Welcome to Conerstone Software Company',
                'token' => $token,
                'user' => [
                    'id' => $user_id,
                    'first_name' => $sanitizedData['first_name'],
                    'last_name' => $sanitizedData['last_name'],
                    'email' => $sanitizedData['email'],
                    'role' => $sanitizedData['role'],
                    'phone' => $sanitizedData['phone'],
                    'bio' => $sanitizedData['bio'],
                    'location' => $sanitizedData['location']
                ]
            ]);
        } catch(PDOException $exception) {
            http_response_code(500);
            echo json_encode(['success' => false, 'message' => 'Registration failed: ' . $exception->getMessage()]);
        }
    }

    public function login() {
        $data = json_decode(file_get_contents("php://input"));

        if (!isset($data->email) || !isset($data->password)) {
            http_response_code(400);
            echo json_encode(['success' => false, 'message' => 'Email and password are required']);
            return;
        }

        try {
            // Updated query to match our database schema with avatar support
            $query = "SELECT id, first_name, last_name, email, password, role, phone, avatar, bio, location
                     FROM users WHERE email = ?";
            $stmt = $this->conn->prepare($query);
            $stmt->execute([$data->email]);

            if ($stmt->rowCount() > 0) {
                $user = $stmt->fetch(PDO::FETCH_ASSOC);

                // Verify password
                if (password_verify($data->password, $user['password'])) {
                    require_once '../config/JWT.php';
                    $jwt = new JWT();
                    $token = $jwt->encode(['user_id' => $user['id'], 'role' => $user['role']]);

                    // Remove password from response
                    unset($user['password']);

                    echo json_encode([
                        'success' => true,
                        'message' => 'Login successful! Welcome back to Conerstone Software Company',
                        'token' => $token,
                        'user' => $user
                    ]);
                } else {
                    http_response_code(401);
                    echo json_encode(['success' => false, 'message' => 'Invalid password']);
                }
            } else {
                http_response_code(401);
                echo json_encode(['success' => false, 'message' => 'Email not found']);
            }
        } catch(PDOException $exception) {
            http_response_code(500);
            echo json_encode(['success' => false, 'message' => 'Login failed: ' . $exception->getMessage()]);
        }
    }

    public function getProfile() {
        $user_id = $this->getUserIdFromToken();

        if (!$user_id) {
            http_response_code(401);
            echo json_encode(['success' => false, 'message' => 'Unauthorized']);
            return;
        }

        try {
            $query = "SELECT u.*, ap.total_credits, ap.completed_credits, ap.gpa, 
                     ap.current_semester, ap.academic_year
                     FROM users u
                     LEFT JOIN academic_progress ap ON u.id = ap.user_id
                     WHERE u.id = ?";
            $stmt = $this->conn->prepare($query);
            $stmt->execute([$user_id]);

            if ($stmt->rowCount() > 0) {
                $user = $stmt->fetch(PDO::FETCH_ASSOC);
                unset($user['password_hash']);
                echo json_encode(['success' => true, 'user' => $user]);
            } else {
                http_response_code(404);
                echo json_encode(['success' => false, 'message' => 'User not found']);
            }
        } catch(PDOException $exception) {
            http_response_code(500);
            echo json_encode(['success' => false, 'message' => 'Failed to fetch profile: ' . $exception->getMessage()]);
        }
    }

    private function getUserIdFromToken() {
        $headers = getallheaders();
        $auth_header = $headers['Authorization'] ?? $headers['authorization'] ?? '';

        if (strpos($auth_header, 'Bearer ') === 0) {
            $token = substr($auth_header, 7);
            require_once '../config/JWT.php';
            $jwt = new JWT();
            
            if ($jwt->verify($token)) {
                $payload = $jwt->decode($token);
                return $payload['user_id'];
            }
        }
        return null;
    }

    public function uploadAvatar() {
        try {
            $user_id = $this->getUserIdFromToken();
            
            if (!$user_id) {
                http_response_code(401);
                echo json_encode(['success' => false, 'message' => 'Authorization token required']);
                return;
            }

            // Handle file upload
            if (!isset($_FILES['avatar'])) {
                http_response_code(400);
                echo json_encode(['success' => false, 'message' => 'No file uploaded']);
                return;
            }

            $file = $_FILES['avatar'];
            $upload_dir = '../uploads/avatars/';
            
            // Create directory if it doesn't exist
            if (!file_exists($upload_dir)) {
                mkdir($upload_dir, 0777, true);
            }

            // Generate unique filename
            $file_extension = pathinfo($file['name'], PATHINFO_EXTENSION);
            $allowed_extensions = ['jpg', 'jpeg', 'png', 'gif', 'webp'];
            
            if (!in_array(strtolower($file_extension), $allowed_extensions)) {
                http_response_code(400);
                echo json_encode(['success' => false, 'message' => 'Invalid file type. Allowed: jpg, jpeg, png, gif, webp']);
                return;
            }

            $filename = 'avatar_' . $user_id . '_' . time() . '.' . $file_extension;
            $filepath = $upload_dir . $filename;

            // Move uploaded file
            if (move_uploaded_file($file['tmp_name'], $filepath)) {
                // Update user avatar in database
                $query = "UPDATE users SET avatar = ? WHERE id = ?";
                $stmt = $this->conn->prepare($query);
                $stmt->execute([$filename, $user_id]);

                echo json_encode([
                    'success' => true,
                    'message' => 'Avatar uploaded successfully',
                    'avatar' => $filename
                ]);
            } else {
                http_response_code(500);
                echo json_encode(['success' => false, 'message' => 'Failed to upload file']);
            }
        } catch(Exception $e) {
            http_response_code(500);
            echo json_encode(['success' => false, 'message' => 'Upload failed: ' . $e->getMessage()]);
        }
    }
}
?>
