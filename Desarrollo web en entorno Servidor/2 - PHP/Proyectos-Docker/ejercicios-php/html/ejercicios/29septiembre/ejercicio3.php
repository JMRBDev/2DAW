<?php
session_start();
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 3, 29 Sept - Jose Rosendo</title>
</head>

<body>
    <?php
    if (isset($_SESSION['visitas'])) {
        $_SESSION['visitas']++;
    } else {
        $_SESSION['visitas'] = 1;
    }
    ?>

    <h1>Contador de visitas</h1>
    <p>Visitas: <?= $_SESSION['visitas'];?></p>
</body>

</html>