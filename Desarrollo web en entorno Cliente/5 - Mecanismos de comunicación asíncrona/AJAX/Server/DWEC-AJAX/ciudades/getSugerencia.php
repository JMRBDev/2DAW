<?php
$ciudades[] = ["Cáceres", "Barcelona", "Madrid", "Cádiz", "Casares", "Beirut", "Mallorca", "Málaga", "Murcia"];

$valor = $_REQUEST['valor'];
$sugerencia = "";

if ($valor != "") {
    $valor = strtolower($valor);
    $longitud = strlen($valor);

    foreach ($ciudades as $ciudad) {
        if (stristr($valor, substr($ciudad, 0, $longitud))) {
            echo "FUNCIONA";
            if ($sugerencia === "") {
                $sugerencia = $ciudad;
            } else {
                $sugerencia .= ", $ciudad";
            }
        }
    }
}

echo $sugerencia === "" ? "No hay sugerencias" : $sugerencia;
