<?php
session_start();

$inactividad = 60;

if (isset($_SESSION['timeout'])) {
    $sessionTTL = time() - $_SESSION['timeout'];
    if ($sessionTTL > $inactividad) {
        session_destroy();
        header('Location: ./logout.php');
    }
}

$_SESSION['timeout'] = time();

if (!isset($_SESSION['visitas'])) {
    $_SESSION['usuario'] = 'Argantonio';
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 5, 29 Sept - Jose Rosendo</title>
</head>

<body>
    <?= $_SESSION['usuario']; ?>
</body>

</html>