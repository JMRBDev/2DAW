<?php

class Vehiculo {
    private $color;
    private $peso;

    public function __construct($color, $peso)
    {
        $this->color = $color;
        $this->peso = $peso;
    }

    public function getColor() {
        return $this->color;
    }

    public function getPeso() {
        return $this->peso;
    }

    public function circular() {
        return "El vehículo circula";
    }

    public function anadir_persona($peso_persona) {
        $this->peso += $peso_persona;
    }
}

class CuatroRuedas extends Vehiculo {
    private $numero_puertas;

    public function getNumeroPuertas() {
        return $this->numero_puertas;
    }
    
    public function repintar() {

    }
}

class DosRuedas extends Vehiculo {
    private $cilindrada;
    
    public function getCilindrada() {
        return $this->cilindrada;
    }
    
    public function poner_gasolina($litros) {
        
    }
}

class Coche extends CuatroRuedas {
    private $numero_cadenas_nieve;

    public function getNumeroCadenasNieve() {
        return $this->numero_cadenas_nieve;
    }

    public function anadir_cadenas_nieve($num) {

    }

    public function quitar_cadenas_nieve($num) {
        
    }
}

class Camion extends CuatroRuedas {
    private $longitud;

    public function getLongitud() {
        return $this->longitud;
    }

    public function anadir_remolque($num) {

    }

    public function quitar_remolque($num) {
        
    }
}
?>