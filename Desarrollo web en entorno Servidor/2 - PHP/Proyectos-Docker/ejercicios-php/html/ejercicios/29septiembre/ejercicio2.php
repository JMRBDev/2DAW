<?php
session_start();
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 2, 29 Sept - Jose Rosendo</title>
</head>

<body>
    <?php
    if (isset($_SESSION['test'])) {
        print('Torre');
    } else {
        print('Caballo');
    }
    ?>
</body>

</html>