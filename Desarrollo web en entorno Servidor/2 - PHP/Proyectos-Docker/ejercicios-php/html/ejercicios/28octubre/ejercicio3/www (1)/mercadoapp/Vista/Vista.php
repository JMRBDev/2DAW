<?php 
    
abstract class Vista{

    protected $modelo;
    protected $ret;

    public function __construct($modelo)
    {
        $this->modelo = $modelo;
        $this->ret = "";
    }

    public function getModelo(){
        return $this->modelo;
    }

    abstract function muestraHTML(); 
}
?>


