<?php
require_once "AbstractVista.php";
class VerPlanetaVista extends AbstractVista { 

    function __construct($model)    {      
        $this->modelo = $model;    
    }    
    
    public function muestraHTML(){ 
        $ret = $this->ret; 
        echo("Nombre: ". $this->modelo['name']);
      /*  print_r(  $this->modelo); */

    }
}
?>