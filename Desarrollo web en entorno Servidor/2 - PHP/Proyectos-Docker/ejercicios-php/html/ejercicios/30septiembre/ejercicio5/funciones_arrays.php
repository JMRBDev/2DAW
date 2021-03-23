<?php
    function generaArrayInt($longitud, $min, $max) {
        $resultado = [];

        for ($i = 0; $i < $longitud; $i++) {
            array_push($resultado, random_int($min, $max));
        }

        return array_values($resultado);
    }

    function minimoArrayInt($array) {
        return min($array);
    }

    function estaEnArrayInt($array, $numero) {
        if (in_array($numero, $array)) {
            return true;
        }

        return false;
    }
?>