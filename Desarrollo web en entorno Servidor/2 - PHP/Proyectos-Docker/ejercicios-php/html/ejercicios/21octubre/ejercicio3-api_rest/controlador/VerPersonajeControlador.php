<?php

   include_once "AbstractControlador.php";
   include_once "./modelo/BasePersonaje.php";
   include_once "./vista/VerPersonajeVista.php";
   
       class VerPersonajeControlador extends AbstractControlador {   
   
           function __construct($id)    {      
               //Obtengo el modelo actual
               $this->modelo = BasePersonaje::obtener($id);
               
           }
           
           
           public function ejecuta(){        
               //Genero la Vista actual a partir del modelo        
               $ver_personaje_vista = new VerPersonajeVista($this->modelo);
               $ver_personaje_vista->muestraHTML();


           }}
       ?>