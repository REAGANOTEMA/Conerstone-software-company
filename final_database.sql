-- =====================================================
-- CONERSTONE SOFTWARE COMPANY - FINAL PERFECT DATABASE
-- Complete Educational Management System
-- =====================================================

-- Drop and recreate database
DROP DATABASE IF EXISTS `conerstone-software-company`;
CREATE DATABASE `conerstone-software-company` 
CHARACTER SET utf8mb4 
COLLATE utf8mb4_unicode_ci;

USE `conerstone-software-company`;

-- =====================================================
-- USERS TABLE - Complete user management
-- =====================================================
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(100) NOT NULL,
  `last_name` varchar(100) NOT NULL,
  `email` varchar(150) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` enum('admin','staff','client','student') NOT NULL DEFAULT 'student',
  `gender` enum('M','F','O') DEFAULT NULL,
  `age` int(3) DEFAULT NULL,
  `mobile_number` varchar(20) DEFAULT NULL,
  `country` varchar(100) DEFAULT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `bio` text DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  
  -- Student specific fields
  `student_level` enum('beginner','intermediate','advanced') DEFAULT NULL,
  `program_of_study` varchar(100) DEFAULT NULL,
  `enrollment_date` date DEFAULT NULL,
  `graduation_date` date DEFAULT NULL,
  `gpa` decimal(3,2) DEFAULT NULL,
  `total_credits` decimal(10,2) DEFAULT 0.00,
  `completed_credits` decimal(10,2) DEFAULT 0.00,
  `current_semester` varchar(50) DEFAULT NULL,
  `academic_year` int(4) DEFAULT NULL,
  
  -- Staff specific fields
  `department` varchar(100) DEFAULT NULL,
  `position` varchar(100) DEFAULT NULL,
  `employee_id` varchar(50) DEFAULT NULL,
  `hire_date` date DEFAULT NULL,
  `specialization` varchar(100) DEFAULT NULL,
  
  -- Client specific fields
  `company_name` varchar(200) DEFAULT NULL,
  `industry` varchar(100) DEFAULT NULL,
  `project_type` varchar(100) DEFAULT NULL,
  `budget_range` varchar(50) DEFAULT NULL,
  
  -- System fields
  `is_active` tinyint(1) NOT NULL DEFAULT 1,
  `email_verified` tinyint(1) NOT NULL DEFAULT 0,
  `last_login` timestamp NULL DEFAULT NULL,
  `registration_date` timestamp DEFAULT CURRENT_TIMESTAMP,
  `created_at` timestamp DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `unique_email` (`email`),
  KEY `idx_role` (`role`),
  KEY `idx_is_active` (`is_active`),
  KEY `idx_registration_date` (`registration_date`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- =====================================================
-- COURSES TABLE - Course management
-- =====================================================
CREATE TABLE `courses` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `course_code` varchar(20) NOT NULL,
  `course_name` varchar(200) NOT NULL,
  `description` text DEFAULT NULL,
  `instructor_id` int(11) DEFAULT NULL,
  `department` varchar(100) DEFAULT NULL,
  `level` enum('beginner','intermediate','advanced') DEFAULT 'beginner',
  `credits` decimal(3,1) DEFAULT 3.0,
  `duration_weeks` int(11) DEFAULT 12,
  `max_students` int(11) DEFAULT 30,
  `current_students` int(11) DEFAULT 0,
  `price` decimal(10,2) DEFAULT 0.00,
  `start_date` date DEFAULT NULL,
  `end_date` date DEFAULT NULL,
  `schedule` varchar(200) DEFAULT NULL,
  `location` varchar(200) DEFAULT NULL,
  `status` enum('draft','published','ongoing','completed','cancelled') DEFAULT 'draft',
  `prerequisites` text DEFAULT NULL,
  `learning_outcomes` text DEFAULT NULL,
  `materials_included` text DEFAULT NULL,
  `created_at` timestamp DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `unique_course_code` (`course_code`),
  KEY `idx_instructor` (`instructor_id`),
  KEY `idx_department` (`department`),
  KEY `idx_level` (`level`),
  KEY `idx_status` (`status`),
  KEY `idx_start_date` (`start_date`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- =====================================================
-- ENROLLMENTS TABLE - Student course registrations
-- =====================================================
CREATE TABLE `enrollments` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `student_id` int(11) NOT NULL,
  `course_id` int(11) NOT NULL,
  `enrollment_date` timestamp DEFAULT CURRENT_TIMESTAMP,
  `status` enum('pending','active','completed','dropped','suspended') DEFAULT 'pending',
  `grade` decimal(5,2) DEFAULT NULL,
  `attendance_rate` decimal(5,2) DEFAULT 0.00,
  `completion_rate` decimal(5,2) DEFAULT 0.00,
  `payment_status` enum('pending','paid','partial','refunded') DEFAULT 'pending',
  `amount_paid` decimal(10,2) DEFAULT 0.00,
  `notes` text DEFAULT NULL,
  `created_at` timestamp DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `unique_enrollment` (`student_id`, `course_id`),
  KEY `idx_student` (`student_id`),
  KEY `idx_course` (`course_id`),
  KEY `idx_status` (`status`),
  KEY `idx_enrollment_date` (`enrollment_date`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- =====================================================
-- ASSIGNMENTS TABLE - Course assignments
-- =====================================================
CREATE TABLE `assignments` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `course_id` int(11) NOT NULL,
  `title` varchar(200) NOT NULL,
  `description` text DEFAULT NULL,
  `type` enum('homework','quiz','exam','project','presentation','lab') DEFAULT 'homework',
  `total_points` decimal(5,2) DEFAULT 100.00,
  `due_date` datetime DEFAULT NULL,
  `submission_type` enum('text','file','link','multiple') DEFAULT 'text',
  `max_file_size` int(11) DEFAULT 10485760,
  `allowed_file_types` varchar(200) DEFAULT 'pdf,doc,docx,txt',
  `instructions` text DEFAULT NULL,
  `rubric` text DEFAULT NULL,
  `is_published` tinyint(1) NOT NULL DEFAULT 0,
  `allow_late_submission` tinyint(1) NOT NULL DEFAULT 0,
  `late_penalty_percent` decimal(5,2) DEFAULT 0.00,
  `created_at` timestamp DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `idx_course` (`course_id`),
  KEY `idx_type` (`type`),
  KEY `idx_due_date` (`due_date`),
  KEY `idx_is_published` (`is_published`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- =====================================================
-- SUBMISSIONS TABLE - Student assignment submissions
-- =====================================================
CREATE TABLE `submissions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `assignment_id` int(11) NOT NULL,
  `student_id` int(11) NOT NULL,
  `submission_date` timestamp DEFAULT CURRENT_TIMESTAMP,
  `status` enum('draft','submitted','graded','returned','late') DEFAULT 'draft',
  `content` text DEFAULT NULL,
  `file_path` varchar(500) DEFAULT NULL,
  `file_name` varchar(255) DEFAULT NULL,
  `file_size` int(11) DEFAULT NULL,
  `grade` decimal(5,2) DEFAULT NULL,
  `max_grade` decimal(5,2) DEFAULT NULL,
  `feedback` text DEFAULT NULL,
  `graded_by` int(11) DEFAULT NULL,
  `graded_date` timestamp NULL DEFAULT NULL,
  `is_late` tinyint(1) NOT NULL DEFAULT 0,
  `late_days` int(11) DEFAULT 0,
  `plagiarism_score` decimal(5,2) DEFAULT NULL,
  `created_at` timestamp DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `unique_submission` (`assignment_id`, `student_id`),
  KEY `idx_assignment` (`assignment_id`),
  KEY `idx_student` (`student_id`),
  KEY `idx_status` (`status`),
  KEY `idx_submission_date` (`submission_date`),
  KEY `idx_graded_by` (`graded_by`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- =====================================================
-- ATTENDANCE TABLE - Student attendance tracking
-- =====================================================
CREATE TABLE `attendance` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `student_id` int(11) NOT NULL,
  `course_id` int(11) NOT NULL,
  `attendance_date` date NOT NULL,
  `status` enum('present','absent','late','excused') DEFAULT 'absent',
  `check_in_time` time DEFAULT NULL,
  `check_out_time` time DEFAULT NULL,
  `notes` varchar(500) DEFAULT NULL,
  `recorded_by` int(11) DEFAULT NULL,
  `created_at` timestamp DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `unique_attendance` (`student_id`, `course_id`, `attendance_date`),
  KEY `idx_student` (`student_id`),
  KEY `idx_course` (`course_id`),
  KEY `idx_date` (`attendance_date`),
  KEY `idx_status` (`status`),
  KEY `idx_recorded_by` (`recorded_by`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- =====================================================
-- FINANCIAL RECORDS TABLE - Payment tracking
-- =====================================================
CREATE TABLE `financial_records` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `type` enum('tuition','fee','payment','refund','scholarship','penalty') DEFAULT 'payment',
  `description` varchar(500) NOT NULL,
  `amount` decimal(10,2) NOT NULL,
  `currency` varchar(3) DEFAULT 'USD',
  `payment_method` enum('cash','card','bank_transfer','online','check','other') DEFAULT NULL,
  `transaction_id` varchar(100) DEFAULT NULL,
  `status` enum('pending','completed','failed','cancelled','refunded') DEFAULT 'pending',
  `due_date` date DEFAULT NULL,
  `payment_date` date DEFAULT NULL,
  `related_course_id` int(11) DEFAULT NULL,
  `invoice_number` varchar(50) DEFAULT NULL,
  `receipt_number` varchar(50) DEFAULT NULL,
  `notes` text DEFAULT NULL,
  `processed_by` int(11) DEFAULT NULL,
  `created_at` timestamp DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `idx_user` (`user_id`),
  KEY `idx_type` (`type`),
  KEY `idx_status` (`status`),
  KEY `idx_payment_date` (`payment_date`),
  KEY `idx_due_date` (`due_date`),
  KEY `idx_course` (`related_course_id`),
  KEY `idx_processed_by` (`processed_by`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- =====================================================
-- MESSAGES TABLE - Internal messaging
-- =====================================================
CREATE TABLE `messages` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sender_id` int(11) NOT NULL,
  `recipient_id` int(11) NOT NULL,
  `subject` varchar(200) NOT NULL,
  `message` text NOT NULL,
  `type` enum('message','notification','announcement','alert') DEFAULT 'message',
  `priority` enum('low','normal','high','urgent') DEFAULT 'normal',
  `status` enum('draft','sent','read','replied','archived') DEFAULT 'draft',
  `sent_date` timestamp NULL DEFAULT NULL,
  `read_date` timestamp NULL DEFAULT NULL,
  `reply_to_id` int(11) DEFAULT NULL,
  `attachment_path` varchar(500) DEFAULT NULL,
  `attachment_name` varchar(255) DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `idx_sender` (`sender_id`),
  KEY `idx_recipient` (`recipient_id`),
  KEY `idx_type` (`type`),
  KEY `idx_priority` (`priority`),
  KEY `idx_status` (`status`),
  KEY `idx_sent_date` (`sent_date`),
  KEY `idx_reply_to` (`reply_to_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- =====================================================
-- DOCUMENTS TABLE - File management
-- =====================================================
CREATE TABLE `documents` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `title` varchar(200) NOT NULL,
  `description` text DEFAULT NULL,
  `file_path` varchar(500) NOT NULL,
  `file_name` varchar(255) NOT NULL,
  `file_type` varchar(50) NOT NULL,
  `file_size` int(11) NOT NULL,
  `category` enum('assignment','submission','course_material','certificate','profile','other') DEFAULT 'other',
  `related_course_id` int(11) DEFAULT NULL,
  `related_assignment_id` int(11) DEFAULT NULL,
  `is_public` tinyint(1) NOT NULL DEFAULT 0,
  `download_count` int(11) DEFAULT 0,
  `last_accessed` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `idx_user` (`user_id`),
  KEY `idx_category` (`category`),
  KEY `idx_course` (`related_course_id`),
  KEY `idx_assignment` (`related_assignment_id`),
  KEY `idx_is_public` (`is_public`),
  KEY `idx_created_at` (`created_at`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- =====================================================
-- SYSTEM SETTINGS TABLE - Configuration
-- =====================================================
CREATE TABLE `system_settings` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `setting_key` varchar(100) NOT NULL,
  `setting_value` text DEFAULT NULL,
  `setting_type` enum('string','number','boolean','json') DEFAULT 'string',
  `description` varchar(500) DEFAULT NULL,
  `is_public` tinyint(1) NOT NULL DEFAULT 0,
  `updated_by` int(11) DEFAULT NULL,
  `created_at` timestamp DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `unique_setting_key` (`setting_key`),
  KEY `idx_is_public` (`is_public`),
  KEY `idx_updated_by` (`updated_by`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- =====================================================
-- FOREIGN KEY CONSTRAINTS
-- =====================================================

-- Course constraints
ALTER TABLE `courses` 
ADD CONSTRAINT `fk_course_instructor` 
FOREIGN KEY (`instructor_id`) REFERENCES `users` (`id`) ON DELETE SET NULL;

-- Enrollment constraints
ALTER TABLE `enrollments` 
ADD CONSTRAINT `fk_enrollment_student` 
FOREIGN KEY (`student_id`) REFERENCES `users` (`id`) ON DELETE CASCADE,
ADD CONSTRAINT `fk_enrollment_course` 
FOREIGN KEY (`course_id`) REFERENCES `courses` (`id`) ON DELETE CASCADE;

-- Assignment constraints
ALTER TABLE `assignments` 
ADD CONSTRAINT `fk_assignment_course` 
FOREIGN KEY (`course_id`) REFERENCES `courses` (`id`) ON DELETE CASCADE;

-- Submission constraints
ALTER TABLE `submissions` 
ADD CONSTRAINT `fk_submission_assignment` 
FOREIGN KEY (`assignment_id`) REFERENCES `assignments` (`id`) ON DELETE CASCADE,
ADD CONSTRAINT `fk_submission_student` 
FOREIGN KEY (`student_id`) REFERENCES `users` (`id`) ON DELETE CASCADE,
ADD CONSTRAINT `fk_submission_grader` 
FOREIGN KEY (`graded_by`) REFERENCES `users` (`id`) ON DELETE SET NULL;

-- Attendance constraints
ALTER TABLE `attendance` 
ADD CONSTRAINT `fk_attendance_student` 
FOREIGN KEY (`student_id`) REFERENCES `users` (`id`) ON DELETE CASCADE,
ADD CONSTRAINT `fk_attendance_course` 
FOREIGN KEY (`course_id`) REFERENCES `courses` (`id`) ON DELETE CASCADE,
ADD CONSTRAINT `fk_attendance_recorder` 
FOREIGN KEY (`recorded_by`) REFERENCES `users` (`id`) ON DELETE SET NULL;

-- Financial records constraints
ALTER TABLE `financial_records` 
ADD CONSTRAINT `fk_financial_user` 
FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE,
ADD CONSTRAINT `fk_financial_course` 
FOREIGN KEY (`related_course_id`) REFERENCES `courses` (`id`) ON DELETE SET NULL,
ADD CONSTRAINT `fk_financial_processor` 
FOREIGN KEY (`processed_by`) REFERENCES `users` (`id`) ON DELETE SET NULL;

-- Messages constraints
ALTER TABLE `messages` 
ADD CONSTRAINT `fk_message_sender` 
FOREIGN KEY (`sender_id`) REFERENCES `users` (`id`) ON DELETE CASCADE,
ADD CONSTRAINT `fk_message_recipient` 
FOREIGN KEY (`recipient_id`) REFERENCES `users` (`id`) ON DELETE CASCADE,
ADD CONSTRAINT `fk_message_reply` 
FOREIGN KEY (`reply_to_id`) REFERENCES `messages` (`id`) ON DELETE SET NULL;

-- Documents constraints
ALTER TABLE `documents` 
ADD CONSTRAINT `fk_document_user` 
FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE,
ADD CONSTRAINT `fk_document_course` 
FOREIGN KEY (`related_course_id`) REFERENCES `courses` (`id`) ON DELETE SET NULL,
ADD CONSTRAINT `fk_document_assignment` 
FOREIGN KEY (`related_assignment_id`) REFERENCES `assignments` (`id`) ON DELETE SET NULL;

-- System settings constraints
ALTER TABLE `system_settings` 
ADD CONSTRAINT `fk_setting_updated_by` 
FOREIGN KEY (`updated_by`) REFERENCES `users` (`id`) ON DELETE SET NULL;

-- =====================================================
-- INSERT REAGAN OTEMA AS ADMIN
-- =====================================================
INSERT INTO `users` (
  `first_name`, `last_name`, `email`, `password`, `role`, `gender`, `age`, 
  `mobile_number`, `country`, `is_active`, `email_verified` 
) VALUES (
  'Reagan', 'Otema', 'reaganotemas@gmail.com', 
  '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', -- password: ReagaN23#
  'admin', 'M', 35, '+1234567890', 'Kenya', 1, 1
);

-- =====================================================
-- SYSTEM SETTINGS
-- =====================================================
INSERT INTO `system_settings` (`setting_key`, `setting_value`, `setting_type`, `description`) VALUES
('site_name', 'Conerstone Software Company', 'string', 'Name of the institution'),
('site_email', 'info@conerstone.com', 'string', 'Contact email'),
('registration_open', 'true', 'boolean', 'Allow new user registrations'),
('auto_approve_users', 'true', 'boolean', 'Automatically approve new registrations'),
('max_file_size', '10485760', 'number', 'Maximum file upload size in bytes'),
('allow_file_uploads', 'true', 'boolean', 'Allow file uploads'),
('default_currency', 'USD', 'string', 'Default currency for payments'),
('academic_year', '2024', 'number', 'Current academic year');

-- =====================================================
-- PERFORMANCE INDEXES
-- =====================================================

-- Composite indexes for common queries
CREATE INDEX `idx_users_role_active` ON `users` (`role`, `is_active`);
CREATE INDEX `idx_enrollments_student_status` ON `enrollments` (`student_id`, `status`);
CREATE INDEX `idx_submissions_assignment_student` ON `submissions` (`assignment_id`, `student_id`);
CREATE INDEX `idx_attendance_course_date` ON `attendance` (`course_id`, `attendance_date`);
CREATE INDEX `idx_messages_recipient_status` ON `messages` (`recipient_id`, `status`);
CREATE INDEX `idx_financial_user_type` ON `financial_records` (`user_id`, `type`);

-- =====================================================
-- VIEWS FOR REPORTING
-- =====================================================

-- User Statistics View
CREATE VIEW `user_statistics` AS
SELECT 
  role,
  gender,
  COUNT(*) as total_users,
  AVG(age) as average_age,
  COUNT(CASE WHEN is_active = 1 THEN 1 END) as active_users
FROM users 
GROUP BY role, gender;

-- Course Enrollment View
CREATE VIEW `course_enrollment_summary` AS
SELECT 
  c.course_code,
  c.course_name,
  c.level,
  COUNT(e.id) as enrolled_students,
  c.max_students,
  ROUND((COUNT(e.id) / c.max_students) * 100, 2) as enrollment_percentage
FROM courses c
LEFT JOIN enrollments e ON c.id = e.course_id AND e.status = 'active'
GROUP BY c.id;

-- Financial Summary View
CREATE VIEW `financial_summary` AS
SELECT 
  type,
  status,
  COUNT(*) as transaction_count,
  SUM(amount) as total_amount,
  AVG(amount) as average_amount
FROM financial_records
GROUP BY type, status;

-- =====================================================
-- TRIGGERS FOR DATA INTEGRITY
-- =====================================================

DELIMITER //

-- Update course current_students count
CREATE TRIGGER `update_course_student_count` 
AFTER INSERT ON `enrollments` 
FOR EACH ROW
BEGIN
  IF NEW.status = 'active' THEN
    UPDATE courses 
    SET current_students = (
      SELECT COUNT(*) FROM enrollments 
      WHERE course_id = NEW.course_id AND status = 'active'
    )
    WHERE id = NEW.course_id;
  END IF;
END//

-- Update course current_students count on status change
CREATE TRIGGER `update_course_student_count_on_status_change` 
AFTER UPDATE ON `enrollments` 
FOR EACH ROW
BEGIN
  IF OLD.status != NEW.status THEN
    UPDATE courses 
    SET current_students = (
      SELECT COUNT(*) FROM enrollments 
      WHERE course_id = NEW.course_id AND status = 'active'
    )
    WHERE id = NEW.course_id;
  END IF;
END//

DELIMITER ;

-- =====================================================
-- OPTIMIZATION
-- =====================================================

-- Analyze all tables for optimal performance
ANALYZE TABLE `users`, `courses`, `enrollments`, `assignments`, `submissions`, `attendance`, `financial_records`, `messages`, `documents`, `system_settings`;

-- =====================================================
-- SETUP COMPLETE
-- =====================================================

SELECT 'CONERSTONE SOFTWARE COMPANY - FINAL PERFECT DATABASE SETUP COMPLETE' as status;
SELECT 'Total tables created: 10' as table_count;
SELECT 'Reagan Otema (Admin) ready: reaganotemas@gmail.com / ReagaN23#' as admin_status;
SELECT 'Registration open for all user types' as registration_status;
SELECT 'All foreign key constraints added' as constraints_status;
SELECT 'Performance indexes created' as indexes_status;
SELECT 'Reporting views created' as views_status;
SELECT 'Data integrity triggers created' as triggers_status;
