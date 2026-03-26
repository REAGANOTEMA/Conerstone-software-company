<?php
/**
 * Fix Reagan's Password
 * Update with correct hash for ReagaN23#
 */

require_once __DIR__ . '/api/config/Database.php';

try {
    echo "🔧 Fixing Reagan's Password...\n";
    echo "==========================\n\n";
    
    $database = new Database();
    $conn = $database->getConnection();
    
    // Generate correct password hash for ReagaN23#
    $password = 'ReagaN23#';
    $hashed_password = password_hash($password, PASSWORD_DEFAULT);
    
    echo "🔑 Plain password: $password\n";
    echo "🔐 New hash: $hashed_password\n\n";
    
    // Update Reagan's password
    $update_query = "UPDATE users SET password = ?, updated_at = CURRENT_TIMESTAMP WHERE email = 'reaganotemas@gmail.com'";
    $update_stmt = $conn->prepare($update_query);
    $success = $update_stmt->execute([$hashed_password]);
    
    if ($success) {
        echo "✅ Reagan's password updated successfully!\n";
        
        // Verify the update
        $check_query = "SELECT email, role, updated_at FROM users WHERE email = 'reaganotemas@gmail.com'";
        $check_stmt = $conn->prepare($check_query);
        $check_stmt->execute();
        $user = $check_stmt->fetch();
        
        if ($user) {
            echo "📊 Updated user info:\n";
            echo "   Email: {$user['email']}\n";
            echo "   Role: {$user['role']}\n";
            echo "   Updated: {$user['updated_at']}\n";
        }
        
        // Test password verification
        echo "\n🧪 Testing password verification:\n";
        if (password_verify($password, $hashed_password)) {
            echo "✅ Password verification: SUCCESS\n";
        } else {
            echo "❌ Password verification: FAILED\n";
        }
        
    } else {
        echo "❌ Failed to update password\n";
        echo "🔍 Error: " . print_r($update_stmt->errorInfo(), true) . "\n";
    }
    
    echo "\n🎯 Try logging in now:\n";
    echo "📧 Email: reaganotemas@gmail.com\n";
    echo "🔑 Password: ReagaN23#\n";
    echo "🌐 URL: http://localhost:5173/login\n";
    
} catch (Exception $e) {
    echo "❌ Error: " . $e->getMessage() . "\n";
}
?>
