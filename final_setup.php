<?php
/**
 * Step-by-Step Database Setup for Conerstone Software Company
 */

// Database configuration
$host = 'localhost';
$username = 'root';
$password = 'ReagaN23#';
$database = 'conerstone-software-company';

echo "🚀 Conerstone Software Company Database Setup\n";
echo "==========================================\n\n";

try {
    // Step 1: Create database
    echo "Step 1: Creating database...\n";
    $pdo = new PDO("mysql:host=$host", $username, $password);
    $pdo->exec("CREATE DATABASE IF NOT EXISTS `$database` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci");
    echo "✅ Database created successfully!\n\n";

    // Step 2: Connect to the database
    echo "Step 2: Connecting to database...\n";
    $pdo = new PDO("mysql:host=$host;dbname=$database;charset=utf8mb4", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "✅ Connected to database!\n\n";

    // Step 3: Create tables one by one
    echo "Step 3: Creating tables...\n";

    // Users table
    echo "  Creating users table...\n";
    $pdo->exec("
        CREATE TABLE IF NOT EXISTS `users` (
            `id` int(11) NOT NULL AUTO_INCREMENT,
            `first_name` varchar(100) NOT NULL,
            `last_name` varchar(100) NOT NULL,
            `email` varchar(150) NOT NULL UNIQUE,
            `password` varchar(255) NOT NULL,
            `role` enum('admin', 'director', 'staff', 'client', 'student') NOT NULL DEFAULT 'student',
            `phone` varchar(20) DEFAULT NULL,
            `avatar` varchar(255) DEFAULT NULL,
            `bio` text DEFAULT NULL,
            `location` varchar(255) DEFAULT NULL,
            `total_credits` decimal(10,2) DEFAULT 0.00,
            `completed_credits` decimal(10,2) DEFAULT 0.00,
            `gpa` decimal(3,2) DEFAULT 0.00,
            `current_semester` varchar(50) DEFAULT NULL,
            `academic_year` int(4) DEFAULT NULL,
            `is_approved` tinyint(1) DEFAULT 1,
            `registration_date` timestamp DEFAULT CURRENT_TIMESTAMP,
            `last_login` timestamp NULL DEFAULT NULL,
            `created_at` timestamp DEFAULT CURRENT_TIMESTAMP,
            `updated_at` timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
            PRIMARY KEY (`id`),
            KEY `idx_email` (`email`),
            KEY `idx_role` (`role`)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
    ");
    echo "    ✅ Users table created\n";

    // Courses table
    echo "  Creating courses table...\n";
    $pdo->exec("
        CREATE TABLE IF NOT EXISTS `courses` (
            `id` int(11) NOT NULL AUTO_INCREMENT,
            `title` varchar(255) NOT NULL,
            `description` text NOT NULL,
            `category` varchar(100) NOT NULL,
            `instructor_id` int(11) DEFAULT NULL,
            `price` decimal(10,2) DEFAULT 0.00,
            `duration` varchar(100) DEFAULT NULL,
            `image` varchar(255) DEFAULT NULL,
            `students_count` int(11) DEFAULT 0,
            `rating` decimal(3,2) DEFAULT 0.00,
            `level` enum('beginner', 'intermediate', 'advanced') DEFAULT 'beginner',
            `prerequisites` text DEFAULT NULL,
            `objectives` text DEFAULT NULL,
            `status` enum('active', 'inactive', 'archived') DEFAULT 'active',
            `created_at` timestamp DEFAULT CURRENT_TIMESTAMP,
            `updated_at` timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
            PRIMARY KEY (`id`),
            KEY `idx_instructor_id` (`instructor_id`),
            KEY `idx_category` (`category`),
            FOREIGN KEY (`instructor_id`) REFERENCES `users`(`id`) ON DELETE SET NULL
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
    ");
    echo "    ✅ Courses table created\n";

    // Assignments table
    echo "  Creating assignments table...\n";
    $pdo->exec("
        CREATE TABLE IF NOT EXISTS `assignments` (
            `id` int(11) NOT NULL AUTO_INCREMENT,
            `course_id` int(11) NOT NULL,
            `title` varchar(255) NOT NULL,
            `description` text NOT NULL,
            `type` enum('assignment', 'quiz', 'exam', 'project') DEFAULT 'assignment',
            `due_date` datetime DEFAULT NULL,
            `max_points` decimal(10,2) DEFAULT 100.00,
            `instructions` text DEFAULT NULL,
            `attachment_url` varchar(255) DEFAULT NULL,
            `status` enum('draft', 'published', 'closed') DEFAULT 'draft',
            `created_by` int(11) NOT NULL,
            `created_at` timestamp DEFAULT CURRENT_TIMESTAMP,
            `updated_at` timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
            PRIMARY KEY (`id`),
            KEY `idx_course_id` (`course_id`),
            KEY `idx_created_by` (`created_by`),
            FOREIGN KEY (`course_id`) REFERENCES `courses`(`id`) ON DELETE CASCADE,
            FOREIGN KEY (`created_by`) REFERENCES `users`(`id`) ON DELETE CASCADE
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
    ");
    echo "    ✅ Assignments table created\n";

    // Submissions table
    echo "  Creating submissions table...\n";
    $pdo->exec("
        CREATE TABLE IF NOT EXISTS `submissions` (
            `id` int(11) NOT NULL AUTO_INCREMENT,
            `assignment_id` int(11) NOT NULL,
            `student_id` int(11) NOT NULL,
            `content` text DEFAULT NULL,
            `attachment_url` varchar(255) DEFAULT NULL,
            `grade` decimal(10,2) DEFAULT NULL,
            `feedback` text DEFAULT NULL,
            `status` enum('submitted', 'graded', 'returned') DEFAULT 'submitted',
            `submitted_at` timestamp DEFAULT CURRENT_TIMESTAMP,
            `graded_at` timestamp NULL DEFAULT NULL,
            `graded_by` int(11) DEFAULT NULL,
            `created_at` timestamp DEFAULT CURRENT_TIMESTAMP,
            `updated_at` timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
            PRIMARY KEY (`id`),
            KEY `idx_assignment_id` (`assignment_id`),
            KEY `idx_student_id` (`student_id`),
            FOREIGN KEY (`assignment_id`) REFERENCES `assignments`(`id`) ON DELETE CASCADE,
            FOREIGN KEY (`student_id`) REFERENCES `users`(`id`) ON DELETE CASCADE,
            FOREIGN KEY (`graded_by`) REFERENCES `users`(`id`) ON DELETE SET NULL
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
    ");
    echo "    ✅ Submissions table created\n";

    // Messages table
    echo "  Creating messages table...\n";
    $pdo->exec("
        CREATE TABLE IF NOT EXISTS `messages` (
            `id` int(11) NOT NULL AUTO_INCREMENT,
            `sender_id` int(11) NOT NULL,
            `receiver_id` int(11) NOT NULL,
            `subject` varchar(255) DEFAULT NULL,
            `message_text` text NOT NULL,
            `message_type` enum('message', 'notification', 'announcement') DEFAULT 'message',
            `status` enum('sent', 'delivered', 'read', 'archived') DEFAULT 'sent',
            `attachment_url` varchar(255) DEFAULT NULL,
            `priority` enum('low', 'medium', 'high', 'urgent') DEFAULT 'medium',
            `sent_at` timestamp DEFAULT CURRENT_TIMESTAMP,
            `read_at` timestamp NULL DEFAULT NULL,
            `created_at` timestamp DEFAULT CURRENT_TIMESTAMP,
            `updated_at` timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
            PRIMARY KEY (`id`),
            KEY `idx_sender_id` (`sender_id`),
            KEY `idx_receiver_id` (`receiver_id`),
            KEY `idx_status` (`status`),
            FOREIGN KEY (`sender_id`) REFERENCES `users`(`id`) ON DELETE CASCADE,
            FOREIGN KEY (`receiver_id`) REFERENCES `users`(`id`) ON DELETE CASCADE
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
    ");
    echo "    ✅ Messages table created\n";

    // Documents table
    echo "  Creating documents table...\n";
    $pdo->exec("
        CREATE TABLE IF NOT EXISTS `documents` (
            `id` int(11) NOT NULL AUTO_INCREMENT,
            `user_id` int(11) NOT NULL,
            `title` varchar(255) NOT NULL,
            `description` text DEFAULT NULL,
            `file_name` varchar(255) NOT NULL,
            `file_path` varchar(500) NOT NULL,
            `file_size` bigint(20) DEFAULT NULL,
            `file_type` varchar(100) DEFAULT NULL,
            `category` enum('assignment', 'course', 'general', 'certificate', 'report') DEFAULT 'general',
            `is_public` tinyint(1) DEFAULT 0,
            `download_count` int(11) DEFAULT 0,
            `uploaded_at` timestamp DEFAULT CURRENT_TIMESTAMP,
            `created_at` timestamp DEFAULT CURRENT_TIMESTAMP,
            `updated_at` timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
            PRIMARY KEY (`id`),
            KEY `idx_user_id` (`user_id`),
            KEY `idx_category` (`category`),
            FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
    ");
    echo "    ✅ Documents table created\n";

    // Finance records table
    echo "  Creating finance_records table...\n";
    $pdo->exec("
        CREATE TABLE IF NOT EXISTS `finance_records` (
            `id` int(11) NOT NULL AUTO_INCREMENT,
            `user_id` int(11) NOT NULL,
            `type` enum('payment', 'refund', 'fee', 'scholarship', 'penalty') NOT NULL,
            `amount` decimal(10,2) NOT NULL,
            `description` varchar(255) NOT NULL,
            `category` enum('tuition', 'course_fee', 'materials', 'exam_fee', 'other') DEFAULT 'tuition',
            `payment_method` varchar(50) DEFAULT NULL,
            `transaction_id` varchar(255) DEFAULT NULL,
            `status` enum('pending', 'completed', 'failed', 'cancelled') DEFAULT 'pending',
            `due_date` date DEFAULT NULL,
            `paid_date` date DEFAULT NULL,
            `created_by` int(11) DEFAULT NULL,
            `created_at` timestamp DEFAULT CURRENT_TIMESTAMP,
            `updated_at` timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
            PRIMARY KEY (`id`),
            KEY `idx_user_id` (`user_id`),
            KEY `idx_type` (`type`),
            KEY `idx_status` (`status`),
            FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE,
            FOREIGN KEY (`created_by`) REFERENCES `users`(`id`) ON DELETE SET NULL
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
    ");
    echo "    ✅ Finance records table created\n";

    // Attendance records table
    echo "  Creating attendance_records table...\n";
    $pdo->exec("
        CREATE TABLE IF NOT EXISTS `attendance_records` (
            `id` int(11) NOT NULL AUTO_INCREMENT,
            `user_id` int(11) NOT NULL,
            `course_id` int(11) DEFAULT NULL,
            `date` date NOT NULL,
            `status` enum('present', 'absent', 'late', 'excused') NOT NULL DEFAULT 'present',
            `check_in_time` time DEFAULT NULL,
            `check_out_time` time DEFAULT NULL,
            `notes` text DEFAULT NULL,
            `marked_by` int(11) DEFAULT NULL,
            `created_at` timestamp DEFAULT CURRENT_TIMESTAMP,
            `updated_at` timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
            PRIMARY KEY (`id`),
            KEY `idx_user_id` (`user_id`),
            KEY `idx_course_id` (`course_id`),
            KEY `idx_date` (`date`),
            FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE,
            FOREIGN KEY (`course_id`) REFERENCES `courses`(`id`) ON DELETE SET NULL,
            FOREIGN KEY (`marked_by`) REFERENCES `users`(`id`) ON DELETE SET NULL
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
    ");
    echo "    ✅ Attendance records table created\n";

    echo "✅ All tables created successfully!\n\n";

    // Step 4: Insert sample data
    echo "Step 4: Inserting sample data...\n";

    // Insert users
    echo "  Inserting users...\n";
    $pdo->exec("INSERT IGNORE INTO `users` (`first_name`, `last_name`, `email`, `password`, `role`, `is_approved`) VALUES
        ('Reagan', 'Otema', 'reagan@conerstone.com', '\$2y\$10\$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'director', 1),
        ('Binsobedde', 'Najiib', 'najiib@conerstone.com', '\$2y\$10\$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'director', 1),
        ('Admin', 'User', 'admin@conerstone.com', '\$2y\$10\$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'admin', 1),
        ('John', 'Smith', 'john.smith@example.com', '\$2y\$10\$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'student', 1),
        ('Alice', 'Johnson', 'alice.johnson@example.com', '\$2y\$10\$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'student', 1),
        ('Mike', 'Wilson', 'mike.wilson@example.com', '\$2y\$10\$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'student', 1)");
    echo "    ✅ Users inserted\n";

    // Insert courses
    echo "  Inserting courses...\n";
    $pdo->exec("INSERT IGNORE INTO `courses` (`title`, `description`, `category`, `instructor_id`, `price`, `duration`, `level`, `status`) VALUES
        ('Complete Web Development Bootcamp', 'Learn HTML, CSS, JavaScript, React, Node.js and more in this comprehensive course.', 'Web Development', 1, 89.99, '12 weeks', 'beginner', 'active'),
        ('Data Science Fundamentals', 'Master the fundamentals of data science with Python and machine learning.', 'Data Science', 2, 129.99, '16 weeks', 'intermediate', 'active'),
        ('Mobile App Development with React Native', 'Build cross-platform mobile applications using React Native.', 'Mobile Development', 1, 99.99, '10 weeks', 'intermediate', 'active')");
    echo "    ✅ Courses inserted\n";

    echo "✅ Sample data inserted successfully!\n\n";

    // Step 5: Show results
    echo "Step 5: Setup Results\n";
    echo "===================\n";
    
    $tables = $pdo->query("SHOW TABLES")->fetchAll(PDO::FETCH_COLUMN);
    $userCount = $pdo->query("SELECT COUNT(*) as count FROM users")->fetch()['count'];
    $courseCount = $pdo->query("SELECT COUNT(*) as count FROM courses")->fetch()['count'];
    
    echo "Database: $database\n";
    echo "Tables: " . count($tables) . "\n";
    echo "Users: $userCount\n";
    echo "Courses: $courseCount\n";
    echo "Status: ✅ SUCCESS\n\n";
    
    echo "📋 Tables created:\n";
    foreach ($tables as $table) {
        echo "  - $table\n";
    }
    
    echo "\n🎉 CONERSTONE SOFTWARE COMPANY DATABASE SETUP COMPLETE!\n";
    echo "🌐 Your application is now ready to use!\n";
    echo "📱 You can now register users and start using the system!\n\n";
    
    echo "🔑 Default Login Credentials:\n";
    echo "Director: reagan@conerstone.com / password\n";
    echo "Director: najiib@conerstone.com / password\n";
    echo "Admin: admin@conerstone.com / password\n";
    echo "Student: john.smith@example.com / password\n";
    echo "Student: alice.johnson@example.com / password\n";
    echo "Student: mike.wilson@example.com / password\n\n";
    
    echo "🚀 Visit your application at: http://localhost:5173\n";
    
} catch (Exception $e) {
    echo "❌ Setup Error: " . $e->getMessage() . "\n";
    echo "Please check your database credentials and try again.\n";
    exit(1);
}
?>
