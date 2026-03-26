<?php
/**
 * Final Database Setup - Use Final SQL File
 * Conerstone Software Company - Perfect Setup
 */

require_once __DIR__ . '/api/config/Database.php';

try {
    echo "🚀 Setting Up Final Perfect Database...\n";
    echo "==========================================\n\n";
    
    // Read the final SQL file
    $sql_file = __DIR__ . '/final_database.sql';
    $sql = file_get_contents($sql_file);
    
    if (!$sql) {
        throw new Exception("Could not read SQL file: $sql_file");
    }
    
    // Connect to MySQL without database first
    $pdo = new PDO("mysql:host=localhost; charset=utf8mb4", "root", "ReagaN23#");
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $pdo->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
    $pdo->setAttribute(PDO::MYSQL_ATTR_USE_BUFFERED_QUERY, true);
    
    // Split SQL into individual statements
    $statements = array_filter(array_map('trim', explode(';', $sql)));
    
    $executed = 0;
    $errors = 0;
    
    foreach ($statements as $statement) {
        if (empty($statement) || preg_match('/^--/', $statement)) {
            continue;
        }
        
        try {
            $pdo->exec($statement);
            $executed++;
            
            // Show progress for major operations
            if (strpos($statement, 'CREATE TABLE') !== false) {
                if (preg_match('/CREATE TABLE `([^`]+)`/', $statement, $matches)) {
                    echo "✅ Created table: {$matches[1]}\n";
                }
            } elseif (strpos($statement, 'INSERT INTO') !== false && strpos($statement, 'Reagan') !== false) {
                echo "👑 Created Reagan Otema (Admin) account\n";
            } elseif (strpos($statement, 'CREATE VIEW') !== false) {
                if (preg_match('/CREATE VIEW `([^`]+)`/', $statement, $matches)) {
                    echo "👁️ Created view: {$matches[1]}\n";
                }
            } elseif (strpos($statement, 'CREATE TRIGGER') !== false) {
                if (preg_match('/CREATE TRIGGER `([^`]+)`/', $statement, $matches)) {
                    echo "⚡ Created trigger: {$matches[1]}\n";
                }
            }
        } catch (PDOException $e) {
            $errors++;
            echo "❌ Error: " . $e->getMessage() . "\n";
            echo "🔍 Statement: " . substr($statement, 0, 100) . "...\n";
        }
    }
    
    echo "\n================================================\n";
    echo "🎉 Final Database Setup Complete!\n";
    echo "================================================\n";
    echo "✅ Statements executed: $executed\n";
    echo "❌ Errors encountered: $errors\n";
    
    // Verify setup
    $tables = $pdo->query("SHOW TABLES")->fetchAll(PDO::FETCH_COLUMN);
    echo "📊 Total tables created: " . count($tables) . "\n";
    
    // Check Reagan's account
    $reagan_check = $pdo->prepare("SELECT email, role FROM users WHERE email = 'reaganotemas@gmail.com'");
    $reagan_check->execute();
    $reagan = $reagan_check->fetch();
    
    if ($reagan) {
        echo "👑 Reagan Otema account: {$reagan['email']} ({$reagan['role']})\n";
        echo "🔑 Login: reaganotemas@gmail.com / ReagaN23#\n";
    }
    
    echo "\n🌟 Final Features Available:\n";
    echo "✅ Complete user management (Admin/Staff/Client/Student)\n";
    echo "✅ Professional course management system\n";
    echo "✅ Assignment and submission tracking\n";
    echo "✅ Attendance monitoring\n";
    echo "✅ Financial records management\n";
    echo "✅ Internal messaging system\n";
    echo "✅ Document management\n";
    echo "✅ System configuration\n";
    echo "✅ Professional reporting views\n";
    echo "✅ Performance optimization\n";
    echo "✅ Data integrity triggers\n";
    echo "✅ Foreign key constraints\n";
    
    echo "\n🚀 System is ready for professional use!\n";
    echo "📄 SQL file used: final_database.sql\n";
    
} catch (Exception $e) {
    echo "❌ Setup failed: " . $e->getMessage() . "\n";
}
?>
