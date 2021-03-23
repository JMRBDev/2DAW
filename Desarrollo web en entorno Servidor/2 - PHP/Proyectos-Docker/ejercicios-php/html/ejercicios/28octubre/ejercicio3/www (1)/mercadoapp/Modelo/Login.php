<?php
class Login{

    private $mensaje;
    private $cliente;

	public function getMensaje(){
		return $this->mensaje;
	}

	public function setMensaje($mensaje){
		$this->mensaje = $mensaje;
	}

	public function getCliente(){
		return $this->cliente;
	}

	public function setCliente($cliente){
		$this->cliente = $cliente;
	}


}