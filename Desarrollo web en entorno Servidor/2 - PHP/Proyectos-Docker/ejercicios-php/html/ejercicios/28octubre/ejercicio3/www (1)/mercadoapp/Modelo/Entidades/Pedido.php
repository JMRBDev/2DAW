<?php
class Pedido{
    private $idPedido;
    private $fecha_solicitado;
    private $fecha_recogida;
    private $preparado;
    private $recogido;
    private $cliente;

    public function getIdPedido(){
		return $this->idPedido;
	}

	public function setIdPedido($idPedido){
		$this->idPedido = $idPedido;
	}

	public function getFecha_solicitado(){
		return $this->fecha_solicitado;
	}

	public function setFecha_solicitado($fecha_solicitado){
		$this->fecha_solicitado = $fecha_solicitado;
	}

	public function getFecha_recogida(){
		return $this->fecha_recogida;
	}

	public function setFecha_recogida($fecha_recogida){
		$this->fecha_recogida = $fecha_recogida;
	}

	public function getPreparado(){
		return $this->preparado;
	}

	public function setPreparado($preparado){
		$this->preparado = $preparado;
	}

	public function getRecogido(){
		return $this->recogido;
	}

	public function setRecogido($recogido){
		$this->recogido = $recogido;
	}

	public function getCliente(){
		return $this->cliente;
	}

	public function setCliente($cliente){
		$this->cliente = $cliente;
	}
}
?>