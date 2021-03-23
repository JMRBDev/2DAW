<?php

$capital = $_GET['capital'];
$interes = $_GET['interes'];
$plazo = $_GET['plazo'];
$pagomensual = ($capital) / ((1 - pow((1 + $interes), (-1 * $plazo))) / $interes);

echo $pagomensual;
