<?php
// Establecer el content-type
header('Content-Type: application/json');

// Crear el contenido del servicio
$array = array('peon'=>1, 'caballo'=>3, 'alfil'=>3, 'torre'=>5, 'dama'=>10);

// Codificar el contenido;
$json = json_encode($array);

echo $json;

?>