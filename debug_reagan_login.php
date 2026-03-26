<?php
/**
 * Debug Reagan Login Issue
 * Check database, API, and authentication step by step
 */

require_once __DIR__ . '/api/config/Database.php';

try {
    echo "🔍 Debugging Reagan Login Issue...\n";
    echo "=================================\n\n";
    
    // Step 1: Check Database Connection
    echo "📊 Step 1: Database Connection\n";
    $database = new Database();
    $conn = $database->getConnection();
    echo "✅ Database connection: SUCCESS\n";
    
    // Step 2: Check Reagan's Account
    echo "\n👤 Step 2: Reagan's Account Check\n";
    $reagan_query = "SELECT id, email, password, role, is_active FROM users WHERE email = 'reaganotemas@gmail.com'";
    $reagan_stmt = $conn->prepare($reagan_query);
    $reagan_stmt->execute();
    $reagan = $reagan_stmt->fetch(PDO::FETCH_ASSOC);
    
    if ($reagan) {
        echo "✅ Reagan found in database\n";
        echo "   ID: {$reagan['id']}\n";
        echo "   Email: {$reagan['email']}\n";
        echo "   Role: {$reagan['role']}\n";
        echo "   Active: " . ($reagan['is_active'] ? 'Yes' : 'No') . "\n";
        echo "   Password Hash: " . substr($reagan['password'], 0, 20) . "...\n";
        
        // Step 3: Test Password Verification
        echo "\n🔐 Step 3: Password Verification Test\n";
        $test_password = 'ReagaN23#';
        $password_check = password_verify($test_password, $reagan['password']);
        echo "   Testing password: '$test_password'\n";
        echo "   Verification result: " . ($password_check ? '✅ SUCCESS' : '❌ FAILED') . "\n";
        
        if (!$password_check) {
            echo "   ❌ Password hash is incorrect!\n";
            echo "   🔧 Need to fix password hash\n";
        }
        
    } else {
        echo "❌ Reagan NOT found in database\n";
        echo "   🔧 Need to create Reagan account\n";
    }
    
    // Step 4: Check Login API File
    echo "\n📁 Step 4: Login API Check\n";
    $login_file = __DIR__ . '/api/login-clean.php';
    if (file_exists($login_file)) {
        echo "✅ Login API file exists: api/login-clean.php\n";
        
        // Check API content for potential issues
        $api_content = file_get_contents($login_file);
        if (strpos($api_content, 'reaganotemas@gmail.com') !== false) {
            echo "✅ API contains Reagan's email check\n";
        }
        if (strpos($api_content, 'password_verify') !== false) {
            echo "✅ API uses password verification\n";
        }
        if (strpos($api_content, 'JWT') !== false) {
            echo "✅ API generates JWT tokens\n";
        }
    } else {
        echo "❌ Login API file NOT found\n";
    }
    
    // Step 5: Test API Endpoint
    echo "\n🌐 Step 5: API Endpoint Test\n";
    $api_url = 'http://localhost/api/login-clean.php';
    
    // Create test request
    $test_data = [
        'email' => 'reaganotemas@gmail.com',
        'password' => 'ReagaN23#'
    ];
    
    $ch = curl_init($api_url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($test_data));
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        'Content-Type: application/json',
        'Accept: application/json'
    ]);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($ch, CURLOPT_TIMEOUT, 10);
    
    $response = curl_exec($ch);
    $http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    $error = curl_error($ch);
    curl_close($ch);
    
    if ($error) {
        echo "❌ API request failed: $error\n";
    } else {
        echo "✅ API request sent successfully\n";
        echo "   HTTP Status: $http_code\n";
        echo "   Response: $response\n";
        
        $result = json_decode($response, true);
        if ($result && isset($result['success'])) {
            if ($result['success']) {
                echo "✅ API login: SUCCESS\n";
            } else {
                echo "❌ API login: FAILED - {$result['message']}\n";
            }
        } else {
            echo "❌ API response format invalid\n";
        }
    }
    
    echo "\n🎯 Summary & Recommendations:\n";
    if (!$reagan) {
        echo "❌ Create Reagan account in database\n";
    } elseif (!$password_check) {
        echo "❌ Fix Reagan's password hash\n";
    } else {
        echo "✅ Reagan account and password are correct\n";
        echo "❌ Issue might be in frontend or API routing\n";
    }
    
} catch (Exception $e) {
    echo "❌ Debug error: " . $e->getMessage() . "\n";
}
?>
