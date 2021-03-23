<?php
$arr[] = "Jose";
$arr[] = "Alberto";
$arr[] = "Juan";
$arr[] = "Alvaro";
$arr[] = "Maria";
$arr[] = "Marta";

$param = $_REQUEST["param"];
$sugerencia = "";

if ($param !== "") {
    $param = strtolower($param);
    $len = strlen($param);

    foreach ($arr as $nombre) {
        if (stristr($param, substr($nombre, 0, $len))) {
            if ($sugerencia === "") {
                $sugerencia = $nombre;
            } else {
                $sugerencia .= ", $nombre";
            }
        }
    }
}

echo $sugerencia === "" ? " " : $sugerencia;
