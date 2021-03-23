<?php
include_once "AbstractControlador.php";
include_once "./modelo/BasePlaneta.php";
include_once "./vista/ListadoPlanetaVista.php";

    class ListadoPlanetaControlador extends AbstractControlador{   
        
        function __construct()    {      
            //Obtengo el modelo actual
            $this->modelo = BasePlaneta::obtenerTodos();    
        }
        
        
        public function ejecuta(){        
            //Genero la Vista actual a partir del modelo        
            $planeta_vista = new ListadoPlanetaVista($this->modelo);        
            $planeta_vista->muestraHTML();    
        }}
    ?>