<?php
require_once "AbstractVista.php";
class VerPersonajeVista extends AbstractVista { 

    function __construct($model)    {      
        $this->modelo = $model;    
    }    
    
    public function muestraHTML(){ 
        $ret = $this->ret; 
        echo("Nombre: ". $this->modelo['name']);
        echo("Genero: ". $this->modelo['gender']);
      /*  print_r(  $this->modelo); */

    }
}
?>