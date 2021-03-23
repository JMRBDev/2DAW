<?php

   include_once "AbstractControlador.php";
   include_once "./modelo/BasePlaneta.php";
   include_once "./vista/VerPlanetaVista.php";
   
       class VerPlanetaControlador extends AbstractControlador {   
   
           function __construct($id)    {      
               //Obtengo el modelo actual
               $this->modelo = BasePlaneta::obtener($id);
               
           }
           
           
           public function ejecuta(){        
               //Genero la Vista actual a partir del modelo        
               $ver_planeta_vista = new VerPlanetaVista($this->modelo);
               $ver_planeta_vista->muestraHTML();


           }}
       ?>