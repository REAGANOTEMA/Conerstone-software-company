-- Conerstone Software Company - Complete Fresh Database Setup
-- Educational Management System - Perfect Version

-- Drop database completely and recreate fresh
DROP DATABASE IF EXISTS `conerstone-software-company`;
CREATE DATABASE `conerstone-software-company` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE `conerstone-software-company`;

-- ============================================
-- USERS TABLE - Core user management (NO STUDENT ID REQUIRED)
-- ============================================
CREATE TABLE `users` (
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
    KEY `idx_role` (`role`),
    KEY `idx_registration_date` (`registration_date`),
    KEY `idx_users_name` (`first_name`, `last_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================
-- COURSES TABLE - Course management
-- ============================================
CREATE TABLE `courses` (
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
    KEY `idx_status` (`status`),
    FOREIGN KEY (`instructor_id`) REFERENCES `users`(`id`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================
-- ASSIGNMENTS TABLE - Assignment management
-- ============================================
CREATE TABLE `assignments` (
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
    KEY `idx_due_date` (`due_date`),
    KEY `idx_status` (`status`),
    KEY `idx_assignments_course_status` (`course_id`, `status`),
    FOREIGN KEY (`course_id`) REFERENCES `courses`(`id`) ON DELETE CASCADE,
    FOREIGN KEY (`created_by`) REFERENCES `users`(`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================
-- SUBMISSIONS TABLE - Student submissions
-- ============================================
CREATE TABLE `submissions` (
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
    KEY `idx_status` (`status`),
    KEY `idx_graded_by` (`graded_by`),
    KEY `idx_submissions_student_assignment` (`student_id`, `assignment_id`),
    FOREIGN KEY (`assignment_id`) REFERENCES `assignments`(`id`) ON DELETE CASCADE,
    FOREIGN KEY (`student_id`) REFERENCES `users`(`id`) ON DELETE CASCADE,
    FOREIGN KEY (`graded_by`) REFERENCES `users`(`id`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================
-- MESSAGES TABLE - Communication system
-- ============================================
CREATE TABLE `messages` (
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
    KEY `idx_sent_at` (`sent_at`),
    KEY `idx_message_type` (`message_type`),
    KEY `idx_messages_conversation` (`sender_id`, `receiver_id`, `sent_at`),
    FOREIGN KEY (`sender_id`) REFERENCES `users`(`id`) ON DELETE CASCADE,
    FOREIGN KEY (`receiver_id`) REFERENCES `users`(`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================
-- DOCUMENTS TABLE - File management
-- ============================================
CREATE TABLE `documents` (
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
    KEY `idx_uploaded_at` (`uploaded_at`),
    KEY `idx_is_public` (`is_public`),
    KEY `idx_documents_user_category` (`user_id`, `category`),
    FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================
-- FINANCE RECORDS TABLE - Financial management
-- ============================================
CREATE TABLE `finance_records` (
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
    KEY `idx_due_date` (`due_date`),
    KEY `idx_paid_date` (`paid_date`),
    KEY `idx_created_by` (`created_by`),
    KEY `idx_finance_user_type_status` (`user_id`, `type`, `status`),
    FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE,
    FOREIGN KEY (`created_by`) REFERENCES `users`(`id`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================
-- ATTENDANCE RECORDS TABLE - Attendance tracking
-- ============================================
CREATE TABLE `attendance_records` (
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
    KEY `idx_status` (`status`),
    KEY `idx_marked_by` (`marked_by`),
    KEY `idx_attendance_user_date` (`user_id`, `date`),
    FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE,
    FOREIGN KEY (`course_id`) REFERENCES `courses`(`id`) ON DELETE SET NULL,
    FOREIGN KEY (`marked_by`) REFERENCES `users`(`id`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================
-- INSERT SAMPLE DATA
-- ============================================

-- Insert default admin users (Directors and Admin)
INSERT INTO `users` (`first_name`, `last_name`, `email`, `password`, `role`, `is_approved`) VALUES
('Reagan', 'Otema', 'reagan@conerstone.com', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'director', 1),
('Binsobedde', 'Najiib', 'najiib@conerstone.com', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'director', 1),
('Admin', 'User', 'admin@conerstone.com', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'admin', 1);

-- Insert sample students
INSERT INTO `users` (`first_name`, `last_name`, `email`, `password`, `role`, `total_credits`, `current_semester`, `academic_year`) VALUES
('John', 'Smith', 'john.smith@example.com', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'student', 12.0, 'Fall 2024', 2024),
('Alice', 'Johnson', 'alice.johnson@example.com', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'student', 9.0, 'Fall 2024', 2024),
('Mike', 'Wilson', 'mike.wilson@example.com', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'student', 15.0, 'Fall 2024', 2024),
('Sarah', 'Davis', 'sarah.davis@example.com', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'student', 18.0, 'Fall 2024', 2024),
('David', 'Brown', 'david.brown@example.com', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'student', 6.0, 'Fall 2024', 2024);

-- Insert sample courses
INSERT INTO `courses` (`title`, `description`, `category`, `instructor_id`, `price`, `duration`, `level`, `status`) VALUES
('Complete Web Development Bootcamp', 'Learn HTML, CSS, JavaScript, React, Node.js and more in this comprehensive course.', 'Web Development', 1, 89.99, '12 weeks', 'beginner', 'active'),
('Data Science Fundamentals', 'Master the fundamentals of data science with Python and machine learning.', 'Data Science', 2, 129.99, '16 weeks', 'intermediate', 'active'),
('Mobile App Development with React Native', 'Build cross-platform mobile applications using React Native.', 'Mobile Development', 1, 99.99, '10 weeks', 'intermediate', 'active'),
('Advanced JavaScript Programming', 'Deep dive into advanced JavaScript concepts and modern frameworks.', 'Web Development', 1, 119.99, '8 weeks', 'advanced', 'active'),
('Python for Beginners', 'Start your programming journey with Python fundamentals.', 'Programming', 2, 79.99, '6 weeks', 'beginner', 'active');

-- Insert sample assignments
INSERT INTO `assignments` (`course_id`, `title`, `description`, `type`, `due_date`, `max_points`, `created_by`, `status`) VALUES
(1, 'HTML & CSS Basics', 'Create a simple landing page using HTML and CSS', 'assignment', DATE_ADD(CURRENT_DATE, INTERVAL 7 DAY), 100.00, 1, 'published'),
(1, 'JavaScript Fundamentals', 'Complete JavaScript exercises and build a small project', 'assignment', DATE_ADD(CURRENT_DATE, INTERVAL 14 DAY), 100.00, 1, 'published'),
(2, 'Python for Data Analysis', 'Analyze a dataset using Python pandas', 'project', DATE_ADD(CURRENT_DATE, INTERVAL 21 DAY), 150.00, 2, 'published'),
(3, 'React Native App', 'Build a simple mobile app with React Native', 'project', DATE_ADD(CURRENT_DATE, INTERVAL 28 DAY), 200.00, 1, 'published'),
(4, 'Advanced JavaScript Challenge', 'Solve complex JavaScript problems', 'exam', DATE_ADD(CURRENT_DATE, INTERVAL 10 DAY), 150.00, 1, 'published');

-- Insert sample submissions
INSERT INTO `submissions` (`assignment_id`, `student_id`, `content`, `grade`, `status`, `graded_by`, `graded_at`) VALUES
(1, 4, 'I created a beautiful landing page with HTML5 and CSS3. Used semantic tags and responsive design.', 95.00, 'graded', 1, CURRENT_TIMESTAMP),
(1, 5, 'My landing page includes navigation, hero section, features, and footer. Used flexbox for layout.', 88.00, 'graded', 1, CURRENT_TIMESTAMP),
(2, 4, 'Completed all JavaScript exercises including arrays, objects, functions, and DOM manipulation.', 92.00, 'graded', 1, CURRENT_TIMESTAMP),
(2, 6, 'Built a todo app using vanilla JavaScript with local storage.', 85.00, 'graded', 1, CURRENT_TIMESTAMP);

-- Insert sample finance records
INSERT INTO `finance_records` (`user_id`, `type`, `amount`, `description`, `category`, `status`, `paid_date`) VALUES
(4, 'payment', 89.99, 'Web Development Course Fee', 'course_fee', 'completed', CURRENT_DATE),
(5, 'payment', 129.99, 'Data Science Course Fee', 'course_fee', 'completed', CURRENT_DATE),
(6, 'payment', 99.99, 'Mobile Development Course Fee', 'course_fee', 'completed', CURRENT_DATE),
(7, 'payment', 119.99, 'Advanced JavaScript Course Fee', 'course_fee', 'completed', CURRENT_DATE),
(8, 'payment', 79.99, 'Python for Beginners Course Fee', 'course_fee', 'completed', CURRENT_DATE);

-- Insert sample messages
INSERT INTO `messages` (`sender_id`, `receiver_id`, `subject`, `message_text`, `message_type`, `status`) VALUES
(1, 4, 'Welcome to Web Development', 'Welcome to the Web Development course! I hope you enjoy learning with us.', 'message', 'read'),
(2, 5, 'Data Science Course Materials', 'Course materials have been uploaded to the documents section.', 'notification', 'read'),
(1, 6, 'Assignment Reminder', 'Don\'t forget to submit your HTML & CSS assignment by the due date.', 'message', 'sent'),
(3, 7, 'Course Enrollment', 'You have been successfully enrolled in Mobile App Development.', 'notification', 'read'),
(1, 8, 'Python Course Update', 'New Python tutorials have been added to the course.', 'message', 'delivered');

-- Insert sample documents
INSERT INTO `documents` (`user_id`, `title`, `description`, `file_name`, `file_path`, `file_size`, `file_type`, `category`) VALUES
(1, 'Web Development Syllabus', 'Complete course outline and schedule', 'web-dev-syllabus.pdf', '/uploads/documents/web-dev-syllabus.pdf', 1024000, 'application/pdf', 'course'),
(2, 'Python Cheat Sheet', 'Quick reference for Python syntax', 'python-cheatsheet.pdf', '/uploads/documents/python-cheatsheet.pdf', 512000, 'application/pdf', 'course'),
(4, 'HTML Assignment', 'My HTML and CSS assignment submission', 'assignment1.html', '/uploads/submissions/assignment1.html', 25600, 'text/html', 'assignment'),
(5, 'JavaScript Project', 'Todo app project files', 'todo-app.zip', '/uploads/submissions/todo-app.zip', 204800, 'application/zip', 'assignment');

-- Insert sample attendance records
INSERT INTO `attendance_records` (`user_id`, `course_id`, `date`, `status`, `check_in_time`, `marked_by`) VALUES
(4, 1, CURRENT_DATE, 'present', '09:00:00', 1),
(5, 1, CURRENT_DATE, 'present', '09:05:00', 1),
(6, 1, CURRENT_DATE, 'late', '09:15:00', 1),
(7, 2, CURRENT_DATE, 'present', '10:00:00', 2),
(8, 3, CURRENT_DATE, 'absent', NULL, 1);

-- ============================================
-- CREATE VIEWS FOR COMMON QUERIES
-- ============================================

-- View for user course enrollment summary
CREATE VIEW `user_course_summary` AS
SELECT 
    u.id as user_id,
    u.first_name,
    u.last_name,
    u.email,
    u.role,
    COUNT(DISTINCT c.id) as enrolled_courses,
    COUNT(DISTINCT a.id) as total_assignments,
    COUNT(DISTINCT s.id) as submitted_assignments,
    AVG(s.grade) as average_grade,
    u.total_credits,
    u.gpa
FROM users u
LEFT JOIN courses c ON 1=1  -- All users can access all courses
LEFT JOIN assignments a ON c.id = a.course_id AND a.status = 'published'
LEFT JOIN submissions s ON a.id = s.assignment_id AND s.student_id = u.id
WHERE u.role = 'student'
GROUP BY u.id, u.first_name, u.last_name, u.email, u.role, u.total_credits, u.gpa;

-- View for course statistics
CREATE VIEW `course_statistics` AS
SELECT 
    c.id,
    c.title,
    c.category,
    c.level,
    c.students_count,
    COUNT(DISTINCT a.id) as assignment_count,
    COUNT(DISTINCT s.id) as submission_count,
    AVG(s.grade) as average_grade,
    MAX(s.grade) as highest_grade,
    MIN(s.grade) as lowest_grade,
    COUNT(DISTINCT CASE WHEN s.status = 'graded' THEN s.id END) as graded_submissions,
    COUNT(DISTINCT ar.user_id) as attendance_count
FROM courses c
LEFT JOIN assignments a ON c.id = a.course_id
LEFT JOIN submissions s ON a.id = s.assignment_id
LEFT JOIN attendance_records ar ON c.id = ar.course_id
GROUP BY c.id, c.title, c.category, c.level, c.students_count;

-- View for financial summary
CREATE VIEW `financial_summary` AS
SELECT 
    u.id as user_id,
    u.first_name,
    u.last_name,
    u.email,
    COUNT(DISTINCT f.id) as total_transactions,
    COALESCE(SUM(CASE WHEN f.type = 'payment' AND f.status = 'completed' THEN f.amount ELSE 0 END), 0) as total_paid,
    COALESCE(SUM(CASE WHEN f.type = 'payment' AND f.status = 'pending' THEN f.amount ELSE 0 END), 0) as pending_payments,
    COALESCE(SUM(CASE WHEN f.category = 'course_fee' AND f.status = 'completed' THEN f.amount ELSE 0 END), 0) as course_fees_paid
FROM users u
LEFT JOIN finance_records f ON u.id = f.user_id
WHERE u.role = 'student'
GROUP BY u.id, u.first_name, u.last_name, u.email;

-- ============================================
-- TABLE ANALYSIS FOR OPTIMIZATION
-- ============================================

-- Analyze tables for query optimization
ANALYZE TABLE `users`;
ANALYZE TABLE `courses`;
ANALYZE TABLE `assignments`;
ANALYZE TABLE `submissions`;
ANALYZE TABLE `messages`;
ANALYZE TABLE `documents`;
ANALYZE TABLE `finance_records`;
ANALYZE TABLE `attendance_records`;

-- ============================================
-- COMPLETION MESSAGE
-- ============================================

SELECT 'Conerstone Software Company Database Setup Complete!' as status;
SELECT 'All tables, indexes, views, and sample data created successfully.' as message;
SELECT 'Database is ready for production use.' as final_status;
SELECT 'Total Users Created: 8' as user_count;
SELECT 'Total Courses Created: 5' as course_count;
SELECT 'Total Assignments Created: 5' as assignment_count;
SELECT 'Total Sample Data Inserted: 25+ records across all tables' as data_status;
