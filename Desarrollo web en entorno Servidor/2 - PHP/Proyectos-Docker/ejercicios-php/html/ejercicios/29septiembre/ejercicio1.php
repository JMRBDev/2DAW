<?php
// Comienza la sesión entre el usuario y el servidor para almacenar datos en $_SESSION, dentro del HTML da un Warning
session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 1, 29 Sept - Jose Rosendo</title>
</head>
<body>
    <?php

    // Establece el nombre del usuario y la hora de comienzo de la sesión
    $_SESSION["usuario"] = "Argantonio";
    $_SESSION["inicioTime"] = time();

    // Guarda IP, Hostname y Version del navegador del cliente
    $_SESSION["IPuser"] = $_SERVER["REMOTE_HOST"];
    $_SESSION["navUser"] = $_SERVER["HTTP_USER_AGENT"];

    print_r($_SESSION);
    ?>

    <h1>Sesión iniciada por <?= $_SESSION['usuario'] ?></h1>
</body>
</html>