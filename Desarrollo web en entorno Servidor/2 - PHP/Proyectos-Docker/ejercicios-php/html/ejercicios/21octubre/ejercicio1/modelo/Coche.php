<?php
class Coche
{
    //Variables o atributos
    private $id;
    private $marca;
    private $modelo;
    private $color;
    private $propietario;

    function __construct($id, $miMarca, $miModelo, $miColor, $miPropietario)
    {
        $this->id = $id;
        $this->marca = $miMarca;
        $this->modelo = $miModelo;
        $this->color = $miColor;
        $this->propietario = $miPropietario;
    }

    //Funciones o métodos   
    function setMarca($miMarca)
    {
        $this->marca = $miMarca;
    }
    function getMarca()
    {
        return $this->marca;
    }
    function setModelo($miModelo)
    {
        $this->modelo = $miModelo;
    }

    function getModelo()
    {
        return $this->modelo;
    }

    function setColor($miColor)
    {
        $this->color = $miColor;
    }

    function getColor()
    {
        return $this->color;
    }

    function setPropietario($miPropietario)
    {
        $this->propietario = $miPropietario;
    }

    function getPropietario()
    {
        return $this->propietario;
    }
    function getId()
    {
        return $this->id;
    }
}
