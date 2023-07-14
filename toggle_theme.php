<?php
session_start();
$theme = isset($_SESSION['theme']) ? $_SESSION['theme'] : 'light';
$theme = ($theme === 'dark') ? 'light' : 'dark';
$_SESSION['theme'] = $theme;
header("Location: index.php");
exit();
?>
