<?php
include "Controller.php";
include "./modelo/CocheBase.php";
include "./vista/CocheVista.php";

class VerCocheController extends Controller
{
    function __construct($id)
    {
        //Obtengo el modelo actual
        $this->modelo = CocheBase::getCoche($id);
    }

    public function ejecuta()
    {
        //Genero la Vista actual a partir del modelo        
        $coche_vista = new CocheVista($this->modelo);
        $coche_vista->muestraHTML();
    }
}
