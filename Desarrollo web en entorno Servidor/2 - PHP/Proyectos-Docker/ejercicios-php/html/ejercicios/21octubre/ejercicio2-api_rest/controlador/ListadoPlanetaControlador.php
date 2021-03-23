<?php
include_once "AbstractControlador.php";
include_once "./modelo/BasePlaneta.php";
include_once "./vista/ListadoPlanetasVista.php";

    class ListadoPlanetaControlador extends AbstractControlador{   
        
        function __construct()    {      
            //Obtengo el modelo actual
            $this->modelo = BasePlaneta::obtenerTodos();    
        }
        
        
        public function ejecuta(){        
            //Genero la Vista actual a partir del modelo        
            $planeta_vista = new ListadoPlanetasVista($this->modelo);
            $planeta_vista->muestraHTML();    
        }}
    ?>