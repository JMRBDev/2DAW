<?php
session_start();
$inicio = $_SESSION['requestUrl'];
//destroy the session
unset($_SESSION["usuario"]);
unset($_SESSION["requestUrl"]);
session_unset();
session_destroy();
//redirect to login page
header("location: $inicio");
die();
?>