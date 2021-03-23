<?php
include "Controller.php";
include "./modelo/CocheBase.php";
include "./vista/CocheListadoVista.php";

class CocheController extends Controller
{

    function __construct()
    {
        //Obtengo el modelo actual
        $this->modelo = CocheBase::getCoches();
    }


    public function ejecuta()
    {
        //Genero la Vista actual a partir del modelo        
        $coche_vista = new CocheListadoVista($this->modelo);
        $coche_vista->muestraHTML();
    }
}
