<?php
// Avatar Upload API Route
require_once '../controllers/UserController.php';

$controller = new UserController();
$controller->uploadAvatar();
?>
