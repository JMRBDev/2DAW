<?php

class Producto {
  
    private $id;
    private $nombre;
    private $descripcion;
    private $peso;
    private $stock;
    private $categoria;

    public function getId(){
		return $this->id;
	}

	public function setId($id){
		$this->id = $id;
	}

	public function getNombre(){
		return $this->nombre;
	}

	public function setNombre($nombre){
		$this->nombre = $nombre;
	}

	public function getDescripcion(){
		return $this->descripcion;
	}

	public function setDescripcion($descripcion){
		$this->descripcion = $descripcion;
	}

	public function getPeso(){
		return $this->peso;
	}

	public function setPeso($peso){
		$this->peso = $peso;
	}

	public function getStock(){
		return $this->stock;
	}

	public function setStock($stock){
		$this->stock = $stock;
	}

	public function getCategoria(){
		return $this->categoria;
	}

	public function setCategoria($categoria){
		$this->categoria = $categoria;
	}
}
?>