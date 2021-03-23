<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calcular Área y Perímetro - Jose Rosendo</title>
</head>
<body>
    <h1>Calcular el Área y el Perímetro de un círculo</h1>
    <?php
        $radio = 10;
        print("<h2>Datos del problema: El radio del círculo es $radio</h2>");
        $perimetro = 2 * pi() * $radio;
        $area = pi() * pow($radio, 2);

        print("<p>El perímetro es: $perimetro</p>");
        print("<p>El área es: $area</p>");
    ?>
</body>
</html>