<?php

$voto = explode("=", $_GET['voto'])[1]; // Leer el voto actual

$direccion_fichero = file("./resultados.txt")[0]; // Apuntar a la dirección del fichero
$fp = fopen("./resultados.txt", "a"); // Abrir el fichero en modo 'append' (insertar al final)
fwrite($fp, ":$voto"); // Escribir en el fichero el nuevo voto

$fichero_resultados = explode(":", $direccion_fichero); // Separar los votos por ':' y meterlos en un array

$votos = []; /* Crear un array de votos que tendrá el siguiente formato:
             * [
             *  "erc" => "1",
             *  "psc" => "4",
             *  "ciutadans" => "10",
             *  "jpc" => "2",
             * ]
             */

foreach ($fichero_resultados as $partido => $nombre_partido) { // Para cada voto en la lista de todos los votos:
    if (array_key_exists($nombre_partido, $votos)) { // Si en la lista de recuento de votos ya existe el partido de la iteración actual:
        $votos[$nombre_partido]++; // Sumarle 1
    } else { // Si no existe aún, significa que es su primer voto:
        $votos[$nombre_partido] = 1; // Crear el elemento con valor 1
    }
}

foreach ($votos as $partido => $cantidad_votos) { // Para cada partido en el recuento de votos:
    echo $partido . ": " . (100 * round($cantidad_votos / sizeof($fichero_resultados), 2)) . "%<br>";
    /* Imprimir en pantalla el porcentaje de cada partido con el siguiente formato:
    * erc: 10%
    * psc: 12%
    * ciutadans: 45%
    * jpc: 3%
    */
}
