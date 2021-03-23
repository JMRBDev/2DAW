<?php
include_once "Controller.php";
include_once "./modelo/BasePersonaje.php";
include_once "./vista/ListadoPersonajeVista.php";

class VerPersonajeControlador extends AbstractControlador
{
    function __construct($id)
    {
        //Obtengo el modelo actual
        $this->modelo = BasePersonaje::obtener($id);
    }

    public function ejecuta()
    {
        //Genero la Vista actual a partir del modelo        
        $coche_vista = new ListadoPersonajeVista($this->modelo);
        $coche_vista->muestraHTML();
    }
}
