<?php

session_start();

if (isset($_SESSION['contador'])) {
    $_SESSION['contador'] += 1;
} else {
    $_SESSION['contador'] = 1;
    $_SESSION['usuario'] = 'Jose';
}

if (isset($_POST['inicializar'])) {
    unset($_SESSION['contador']);
}

if (isset($_POST['cerrar'])) {
    session_destroy();
    exit;
}

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 2 - Jose Rosendo</title>
</head>

<body>
    <h1>Visita número <?= $_SESSION['contador']; ?> de <?= $_SESSION['usuario']; ?>.</h1>

    <form action="" method="POST">
        <input type="hidden" name="inicializar">
        <input type="submit" value="Borrar datos">
    </form>

    <form action="" method="POST">
        <input type="hidden" name="cerrar">
        <input type="submit" value="Cerrar sesión">
    </form>
</body>

</html>