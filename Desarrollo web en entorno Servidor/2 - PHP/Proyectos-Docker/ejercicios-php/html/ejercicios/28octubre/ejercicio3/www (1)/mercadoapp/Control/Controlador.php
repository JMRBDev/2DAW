<?php
abstract class Controlador{

    protected $modelo;
    protected $accion;

    abstract function ejecuta(); 

    public function __construct($modelo)
    {
        $this->modelo = $modelo;
       
    }

    public function getAccion(){
        return $this->accion;
    }

    public function setAccion($accion){
        $this->accion = $accion;
    }

    public function getModelo(){
        return $this->modelo;
    }

}

?>