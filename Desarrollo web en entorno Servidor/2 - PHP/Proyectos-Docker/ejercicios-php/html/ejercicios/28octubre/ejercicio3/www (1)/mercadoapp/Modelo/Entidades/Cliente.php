<?php

class Cliente{
  
    private $id;
    private $telefono;
    private $nombre;
    private $clave;
    private $cp;
    private $direccion;
    private $rol;

    public function getId(){
      return $this->id;
    }
  
    public function setId($id){
      $this->id = $id;
    }
  
    public function getTelefono(){
      return $this->telefono;
    }
  
    public function setTelefono($telefono){
      $this->telefono = $telefono;
    }

    public function getNombre(){
      return $this->nombre;
    }

    public function setNombre($nombre){
      $this->nombre = $nombre;
    }

  
    public function getClave(){
      return $this->clave;
    }
  
    public function setClave($clave){
      $this->clave = $clave;
    }
  
    public function getCp(){
      return $this->cp;
    }
  
    public function setCp($cp){
      $this->cp = $cp;
    }
  
    public function getDireccion(){
      return $this->direccion;
    }
  
    public function setDireccion($direccion){
      $this->direccion = $direccion;
    }
  
    public function getRol(){
      return $this->rol;
    }
  
    public function setRol($rol){
      $this->rol = $rol;
    }

    public function imprime(){
      
      $ret .= "<br>";
      $ret .= " ID: ". $this->getId();
      $ret .= "<br>";
      $ret .= " Telefono: ". $this->getTelefono();
      $ret .= "<br>";
      $ret .= " Clave: ". $this->getClave();
      $ret .= "<br>";
      $ret .= " Cp: ". $this->getCp();
      $ret .= "<br>";
      $ret .= " Direccion: ". $this->getDireccion();
      $ret .= "<br>";
      $ret .= " Rol: ". $this->getRol();

      echo $ret;
      return $ret;
    }



}

?>