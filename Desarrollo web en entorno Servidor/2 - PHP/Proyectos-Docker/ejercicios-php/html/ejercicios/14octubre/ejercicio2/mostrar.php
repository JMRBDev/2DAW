<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 2 - Jose Rosendo</title>
</head>
<body>
    <h1>Vehículos</h1>

    <?php
        require "ejercicio2.php";

        $vehiculo1 = new Vehiculo("Rojo", 500);

        print("<h2>" . $vehiculo1->circular() . "</h2>");

        $vehiculo1->anadir_persona(70);

        print("<h2>El vehículo pesa " . $vehiculo1->getPeso() . "kg</h2>");
    ?>
</body>
</html>