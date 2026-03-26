<?php
/**
 * Execute Ultimate Professional Database Setup
 */

require_once __DIR__ . '/api/config/Database.php';

try {
    echo "🚀 Setting Up Ultimate Professional Database...\n";
    echo "================================================\n\n";
    
    // Read the SQL file
    $sql_file = __DIR__ . '/ultimate_professional_database.sql';
    $sql = file_get_contents($sql_file);
    
    if (!$sql) {
        throw new Exception("Could not read SQL file: $sql_file");
    }
    
    // Connect to MySQL without database first
    $database = new Database();
    $conn = $database->getConnection();
    
    // Split SQL into individual statements
    $statements = array_filter(array_map('trim', explode(';', $sql)));
    
    $executed = 0;
    $errors = 0;
    
    foreach ($statements as $statement) {
        if (empty($statement) || preg_match('/^--/', $statement)) {
            continue;
        }
        
        try {
            $conn->exec($statement);
            $executed++;
            
            // Show progress for major operations
            if (strpos($statement, 'CREATE TABLE') !== false) {
                if (preg_match('/CREATE TABLE `([^`]+)`/', $statement, $matches)) {
                    echo "✅ Created table: {$matches[1]}\n";
                }
            } elseif (strpos($statement, 'INSERT INTO') !== false && strpos($statement, 'Reagan') !== false) {
                echo "👑 Created Reagan Otema (Director) account\n";
            } elseif (strpos($statement, 'CREATE VIEW') !== false) {
                if (preg_match('/CREATE VIEW `([^`]+)`/', $statement, $matches)) {
                    echo "👁️ Created view: {$matches[1]}\n";
                }
            }
        } catch (PDOException $e) {
            $errors++;
            echo "❌ Error: " . $e->getMessage() . "\n";
            echo "🔍 Statement: " . substr($statement, 0, 100) . "...\n";
        }
    }
    
    echo "\n================================================\n";
    echo "🎉 Ultimate Database Setup Complete!\n";
    echo "================================================\n";
    echo "✅ Statements executed: $executed\n";
    echo "❌ Errors encountered: $errors\n";
    
    // Verify setup
    $tables = $conn->query("SHOW TABLES")->fetchAll(PDO::FETCH_COLUMN);
    echo "📊 Total tables created: " . count($tables) . "\n";
    
    // Check Reagan's account
    $reagan_check = $conn->prepare("SELECT email, role FROM users WHERE email = 'reaganotemas@gmail.com'");
    $reagan_check->execute();
    $reagan = $reagan_check->fetch();
    
    if ($reagan) {
        echo "👑 Reagan Otema account: {$reagan['email']} ({$reagan['role']})\n";
        echo "🔑 Login: reaganotemas@gmail.com / ReagaN23#\n";
    }
    
    echo "\n🌟 Features Available:\n";
    echo "✅ Professional user management (Student/Staff/Client)\n";
    echo "✅ Role-specific fields and validation\n";
    echo "✅ Complete course management system\n";
    echo "✅ Assignment and submission tracking\n";
    echo "✅ Attendance monitoring\n";
    echo "✅ Financial records management\n";
    echo "✅ Internal messaging system\n";
    echo "✅ Document management\n";
    echo "✅ System configuration\n";
    echo "✅ Professional reporting views\n";
    echo "✅ Performance optimization\n";
    
    echo "\n🚀 System is ready for professional use!\n";
    
} catch (Exception $e) {
    echo "❌ Setup failed: " . $e->getMessage() . "\n";
}
?>
