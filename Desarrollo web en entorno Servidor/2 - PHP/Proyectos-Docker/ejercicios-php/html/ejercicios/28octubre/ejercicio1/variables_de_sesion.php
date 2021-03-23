<?php

session_start();

$_SESSION['usuario'] = 'Jose';
$_SESSION['inicioTime'] = time();

$_SESSION['IPuser'] = $_SERVER['REMOTE_ADDR'];
$_SESSION['HOSTuser'] = $_SERVER['REMOTE_HOST'];
$_SESSION['navUser'] = $_SERVER['HTTP_USER_AGENT'];

print_r($_SESSION);

?>

<h1>Sesión iniciada por <?= $_SESSION['usuario']?></h1>