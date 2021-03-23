<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 3 - Jose Rosendo</title>
</head>
<body>
    <h1>Vehículos</h1>

    <?php
        require "ejercicio4.php";

        $vehiculo1 = new Coche("verde", 1400);
        $vehiculo1->anadir_persona(65);
        $vehiculo1->anadir_persona(65);

        $vehiculo2 = new Coche("rojo", 500);
        $vehiculo2->anadir_persona(70);
        
        $vehiculo3 = new DosRuedas("negro", 120);
        $vehiculo3->anadir_persona(80);
        $vehiculo3->poner_gasolina(20);

        $vehiculo4 = new Camion("azul", 10000);
        $vehiculo4->anadir_remolque(10);
        $vehiculo4->setNumeroPuertas(2);
        $vehiculo4->anadir_remolque(10);
        $vehiculo4->anadir_persona(80);

        print("<h2>El Coche pesa " . $vehiculo1->getPeso() . "kg y es de color " . $vehiculo1->getColor() . "</h2>");

        $vehiculo2->anadir_cadenas_nieve(2);

        print("<h2>El Coche es de color " . $vehiculo2->getColor() . " y tiene " . $vehiculo2->getNumeroCadenasNieve() . " cadenas de nieve</h2>");
        print("<h2>La moto es de color " . $vehiculo3->getColor() . " y pesa " . $vehiculo3->getPeso() . "kg</h2>");
        print("<h2>El camión es de color " . $vehiculo4->getColor() . ", pesa " . $vehiculo4->getPeso() . "kg, mide " . $vehiculo4->getLongitud() . "m y tiene " . $vehiculo4->getNumeroPuertas() . " puertas</h2>");
        print("<h2>Atributos del camión: " . Vehiculo::verAtributos($vehiculo4) . "</h2>");
        
        $vehiculo5 = new DosRuedas("rojo", 150);
        print("<h2>Atributos de la moto: " . Vehiculo::verAtributos($vehiculo5) . "</h2>");
        $vehiculo5->anadir_persona(70);
        print("<h2>Atributos de la moto: " . Vehiculo::verAtributos($vehiculo5) . "</h2>");
        $vehiculo5->repintar("verde");
        $vehiculo5->setCilindrada(1000);
        
        $vehiculo6 = new Camion("blanco", 6000);
        $vehiculo6->anadir_persona(84);
        $vehiculo6->repintar("azul");
        $vehiculo6->setNumeroPuertas(2);
        print("<h2>Atributos del camión: " . Vehiculo::verAtributos($vehiculo6) . "</h2>");
    ?>
</body>
</html>