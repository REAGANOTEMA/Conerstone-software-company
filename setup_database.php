<?php
/**
 * Database Setup Script for Conerstone Software Company
 * Run this script to set up the complete database
 */

require_once __DIR__ . '/api/config/Database.php';

try {
    echo "🚀 Starting Conerstone Software Company Database Setup...\n\n";
    
    $database = new Database();
    
    // Test connection first
    echo "📡 Testing database connection...\n";
    if ($database->testConnection()) {
        echo "✅ Database connection successful!\n\n";
    } else {
        echo "❌ Database connection failed!\n";
        exit(1);
    }
    
    // Run the setup
    echo "🔧 Creating database tables and structures...\n";
    $database->setupDatabase();
    echo "✅ Database setup completed successfully!\n\n";
    
    // Get database info
    echo "📊 Database Information:\n";
    $info = $database->getDatabaseInfo();
    
    echo "Database: " . $info['database'] . "\n";
    echo "Tables: " . count($info['tables']) . "\n";
    echo "Users: " . $info['user_count'] . "\n";
    echo "Courses: " . $info['course_count'] . "\n";
    echo "Status: " . $info['connection_status'] . "\n\n";
    
    echo "📋 Tables created:\n";
    foreach ($info['tables'] as $table) {
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
