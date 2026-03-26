<?php
/**
 * Fix User Passwords for Conerstone Software Company
 * Update sample users with correct password hashes
 */

require_once __DIR__ . '/api/config/Database.php';

try {
    echo "🔧 Fixing user passwords...\n";
    
    $database = new Database();
    $conn = $database->getConnection();
    
    // Correct password hashes for sample users
    $users = [
        [
            'email' => 'reagan@conerstone.com',
            'password' => 'password',
            'role' => 'director'
        ],
        [
            'email' => 'najiib@conerstone.com', 
            'password' => 'password',
            'role' => 'director'
        ],
        [
            'email' => 'admin@conerstone.com',
            'password' => 'password', 
            'role' => 'admin'
        ],
        [
            'email' => 'john.smith@example.com',
            'password' => 'password',
            'role' => 'student'
        ],
        [
            'email' => 'alice.johnson@example.com',
            'password' => 'password',
            'role' => 'student'
        ],
        [
            'email' => 'mike.wilson@example.com',
            'password' => 'password',
            'role' => 'student'
        ],
        [
            'email' => 'sarah.davis@example.com',
            'password' => 'password',
            'role' => 'student'
        ],
        [
            'email' => 'david.brown@example.com',
            'password' => 'password',
            'role' => 'student'
        ]
    ];
    
    foreach ($users as $user) {
        $hashed_password = password_hash($user['password'], PASSWORD_DEFAULT);
        
        $query = "UPDATE users SET password = ? WHERE email = ?";
        $stmt = $conn->prepare($query);
        $stmt->execute([$hashed_password, $user['email']]);
        
        echo "✅ Updated password for: {$user['email']} (Role: {$user['role']})\n";
    }
    
    echo "\n🎉 All user passwords have been updated!\n";
    echo "🔑 Login credentials:\n";
    echo "Email: reagan@conerstone.com | Password: password\n";
    echo "Email: admin@conerstone.com | Password: password\n";
    echo "Email: john.smith@example.com | Password: password\n";
    echo "\n🚀 You can now login successfully!\n";
    
} catch (Exception $e) {
    echo "❌ Error: " . $e->getMessage() . "\n";
}
?>
