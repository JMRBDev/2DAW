<?php
class CocheVista
{

    function __construct($model)
    {
        $this->modelo = $model;
    }

    public function muestraHTML()
    {
        $ret = $this->ret;
        $ret .= "<style>";
        $ret .= "th{";
        $ret .= " width: 8rem;";
        $ret .= "text-align: left;";
        $ret .= "border-bottom: 1px solid black;";
        $ret .= "}";
        $ret .= "td{";
        $ret .= " width: 8rem;";
        $ret .= "}";
        $ret .= "</style>";
        $ret .= "<h1>Vista de coche</h1>";
        $ret .= "<table>";
        $ret .= "<tr>";
        $ret .= " <th>Marca</th>";
        $ret .= " <th>Modelo</th>";
        $ret .= " <th>Color</th>";
        $ret .= " <th>Propietario</th>";
        $ret .= "</tr>";
        $ret .= "<tr>";
        $ret .= "<td>" . $this->modelo->getMarca() . "</td>";
        $ret .= "<td>" . $this->modelo->getModelo() . "</td>";
        $ret .= "<td>" . $this->modelo->getColor() . "</td>";
        $ret .= "<td>" . $this->modelo->getPropietario() . "</td>";
        $ret .= "</tr>";
        $ret .= "</table>";
        echo $ret;
    }
}
