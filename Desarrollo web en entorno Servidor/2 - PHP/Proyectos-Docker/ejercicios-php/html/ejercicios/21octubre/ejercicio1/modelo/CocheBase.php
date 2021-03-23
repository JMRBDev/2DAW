<?php
include_once "Coche.php";
abstract class CocheBase
{

    public static function getCoches()
    {
        $coches = [
            1 => new Coche(1, "Wolkswagen", "Polo", "negro", "Rebeca"),
            2 => new Coche(2, "Toyota", "Corolla", "verde", "Marcos"),
            3 => new Coche(3, "Skoda", "Octavia", "gris", "Mario"),
            4 => new Coche(4, "Kia", "Niro", "azul", "Jairo")
        ];
        return $coches;
    }

    public static function getCoche($id)
    {
        return CocheBase::getCoches()[$id];
    }
}
