<?php

$slt = array("Nombre" => "Isabel",
"Edad" => 37,
"Admin" => true,
"Contacto" => array("Web" => "isabelweb.com", "telefono" => 123, "direccion" => null),
"Etiquetas" => array("php", "web", "dev"),
);

// Codificar
$slt_encode = json_encode($slt);

// Descodificar
$jsonData = json_decode($slt_encode);
var_dump($jsonData);
echo "#OBJETO->#" . $jsonData->Nombre;
echo "<br><br>";

// Descodificar como array
$jsonData_2 = json_decode($slt_encode, true);
var_dump($jsonData_2);
echo "#ARRAY->#" . $jsonData_2["Nombre"];
echo "<br><br>";

?>