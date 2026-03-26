<?php
/**
 * Database Configuration for Conerstone Software Company
 * Updated for Final Database Schema - No Student ID Required
 */

class Database {
    private $host = 'localhost';
    private $username = 'root';
    private $password = 'ReagaN23#';
    private $database = 'conerstone-software-company';
    private $conn;

    public function getConnection() {
        $this->conn = null;

        try {
            $this->conn = new PDO(
                "mysql:host=" . $this->host . ";dbname=" . $this->database . ";charset=utf8mb4",
                $this->username,
                $this->password,
                [
                    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
                    PDO::ATTR_EMULATE_PREPARES => false,
                    PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8mb4 COLLATE utf8mb4_unicode_ci"
                ]
            );
        } catch(PDOException $exception) {
            error_log("Database connection error: " . $exception->getMessage());
            throw new Exception("Database connection failed: " . $exception->getMessage());
        }

        return $this->conn;
    }

    /**
     * Execute the final database setup
     */
    public function setupDatabase() {
        try {
            $conn = $this->getConnection();
            
            // Read and execute the SQL file
            $sqlFile = __DIR__ . '/../../database/final_database.sql';
            if (file_exists($sqlFile)) {
                $sql = file_get_contents($sqlFile);
                
                // Remove comments and split statements
                $statements = array_filter(array_map('trim', explode(';', $sql)));
                
                foreach ($statements as $statement) {
                    if (!empty($statement) && !preg_match('/^--/', $statement)) {
                        $conn->exec($statement);
                    }
                }
                
                return true;
            } else {
                throw new Exception("Database setup file not found");
            }
        } catch (Exception $e) {
            error_log("Database setup error: " . $e->getMessage());
            throw $e;
        }
    }

    /**
     * Test database connection
     */
    public function testConnection() {
        try {
            $conn = $this->getConnection();
            $stmt = $conn->query("SELECT 1");
            return $stmt->fetchColumn() === 1;
        } catch (Exception $e) {
            return false;
        }
    }

    /**
     * Get database info
     */
    public function getDatabaseInfo() {
        try {
            $conn = $this->getConnection();
            
            // Get table info
            $tables = $conn->query("SHOW TABLES")->fetchAll(PDO::FETCH_COLUMN);
            
            // Get user count
            $userCount = $conn->query("SELECT COUNT(*) as count FROM users")->fetch()['count'];
            
            // Get course count
            $courseCount = $conn->query("SELECT COUNT(*) as count FROM courses")->fetch()['count'];
            
            return [
                'database' => $this->database,
                'tables' => $tables,
                'user_count' => $userCount,
                'course_count' => $courseCount,
                'connection_status' => 'connected'
            ];
        } catch (Exception $e) {
            return [
                'connection_status' => 'error',
                'error' => $e->getMessage()
            ];
        }
    }
}
?>
