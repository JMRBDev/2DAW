<?php
session_start();
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 4, 29 Sept - Jose Rosendo</title>
</head>

<body>
    <?php
        function imprime_informacion_sesion() {
            print_r($_SESSION);
            echo '<br>';
        }

        imprime_informacion_sesion();

        if (isset($_SESSION['visitas'])) {
            $_SESSION['visitas']++;
        } else {
            $_SESSION['visitas'] = 1;
            $_SESSION['usuario'] = 'Argantonio';
            $_SESSION['piezas'] = [ 'Torre' => 5, 'Alfil' => 3 ];
        }

        if (isset($_POST['inicializar'])) {
            unset($_SESSION['visitas']);
        }

        if (isset($_POST['cerrar'])) {
            session_destroy();
            exit;
        }
    ?>

    <h1>Contador de visitas</h1>
    <p>Visitas: <?= $_SESSION['visitas'];?> de <?= $_SESSION['usuario'];?></p>

    <form action="" method="post">
        <input type="hidden" name="inicializar">
        <input type="submit" value="Borrar visitas">
    </form>

    <form action="" method="post">
        <input type="hidden" name="cerrar">
        <input type="submit" value="Cerrar Sesión">
    </form>
</body>

</html>