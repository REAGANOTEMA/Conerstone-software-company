<?php
/**
 * Simple Database Setup Script for Conerstone Software Company
 */

try {
    // Connect to MySQL without specifying database
    $conn = new PDO(
        "mysql:host=localhost;charset=utf8mb4",
        'root',
        'ReagaN23#',
        [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        ]
    );
    
    echo "🚀 Starting Conerstone Software Company Database Setup...\n\n";
    
    // Create database if it doesn't exist
    echo "📦 Creating database...\n";
    $conn->exec("CREATE DATABASE IF NOT EXISTS `conerstone-software-company` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci");
    echo "✅ Database created!\n\n";
    
    // Select the database
    $conn->exec("USE `conerstone-software-company`");
    
    // Read and execute the SQL file
    echo "🔧 Creating tables and inserting data...\n";
    $sqlFile = __DIR__ . '/database/final_database.sql';
    if (file_exists($sqlFile)) {
        $sql = file_get_contents($sqlFile);
        
        // Split by semicolon and execute each statement
        $statements = array_filter(array_map('trim', explode(';', $sql)));
        
        foreach ($statements as $statement) {
            if (!empty($statement) && !preg_match('/^--/', $statement) && !preg_match('/^CREATE DATABASE/', $statement)) {
                try {
                    $conn->exec($statement);
                } catch (PDOException $e) {
                    // Skip if it's a comment or already exists
                    if (strpos($e->getMessage(), 'already exists') === false && 
                        strpos($e->getMessage(), 'syntax error') === false) {
                        echo "Warning: " . $e->getMessage() . "\n";
                    }
                }
            }
        }
        echo "✅ Tables and data created successfully!\n\n";
    } else {
        throw new Exception("SQL file not found");
    }
    
    // Get database info
    echo "📊 Database Information:\n";
    $tables = $conn->query("SHOW TABLES")->fetchAll(PDO::FETCH_COLUMN);
    $userCount = $conn->query("SELECT COUNT(*) as count FROM users")->fetch()['count'];
    $courseCount = $conn->query("SELECT COUNT(*) as count FROM courses")->fetch()['count'];
    
    echo "Database: conerstone-software-company\n";
    echo "Tables: " . count($tables) . "\n";
    echo "Users: " . $userCount . "\n";
    echo "Courses: " . $courseCount . "\n";
    echo "Status: connected\n\n";
    
    echo "📋 Tables created:\n";
    foreach ($tables as $table) {
        echo "  - $table\n";
    }
    
    echo "\n🎉 Conerstone Software Company Database Setup Complete!\n";
    echo "🌐 Your application is now ready to use!\n";
    
} catch (Exception $e) {
    echo "❌ Setup Error: " . $e->getMessage() . "\n";
    echo "Please check your database credentials and try again.\n";
    exit(1);
}
?>
