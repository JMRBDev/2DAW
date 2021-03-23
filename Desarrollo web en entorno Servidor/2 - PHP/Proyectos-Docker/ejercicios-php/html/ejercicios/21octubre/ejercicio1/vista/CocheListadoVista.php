<?php
class CocheListadoVista
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
        $ret .= "width: 8rem;";
        $ret .= "text-align: left;";
        $ret .= "border-bottom: 1px solid black;";
        $ret .= "}";
        $ret .= "td{";
        $ret .= "width: 8rem;";
        $ret .= "}";
        $ret .= "</style>";
        $ret .= "<h1>Listado de coches</h1>";
        $ret .= "<table>";
        $ret .= "<tr>";
        $ret .= "<th>Marca</th>";
        $ret .= "<th>Modelo</th>";
        $ret .= "<th>Color</th>";
        $ret .= "<th>Propietario</th>";
        $ret .= "  </tr>";
        foreach ($this->modelo as $row) :
            $ret .= " <tr>";
            $ret .= "<td>" . $row->getMarca() . "</td>";
            $ret .= "<td>" . $row->getModelo() . "</td>";
            $ret .= "<td>" . $row->getColor() . "</td>";
            $ret .= "<td>" . $row->getPropietario() . "</td>";
            $ret .= "<td><a href='index.php?action=ver&id=" . $row->getId() . "'>Ver</a></td>";
            $ret .= "</tr>";
        endforeach;
        $ret .= "</table>";
        echo $ret;
    }
}
