<?php

abstract class Vehiculo {
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

    public function setColor($color) {
        $this->color = $color;
    }

    public function getPeso() {
        return $this->peso;
    }

    public function setPeso($peso) {
        $this->peso = $peso;
    }

    public function circular() {
        return "El vehículo circula";
    }

    public function anadir_persona($peso_persona) {
        $this->peso += $peso_persona;
    }

    public static function verAtributos($vehiculo) {
        $atributos = "";
        
        if (method_exists($vehiculo,"getColor")) {
            $atributos .= "Color: " . $vehiculo->getColor() . " // ";
        }
        
        if (method_exists($vehiculo,"getPeso")) {
            $atributos .= "Peso: " . $vehiculo->getPeso() . "kg // ";
        }
        
        if (method_exists($vehiculo,"getNumeroPuertas")) {
            $atributos .= "Puertas: " . $vehiculo->getNumeroPuertas() . " // ";
        }
        
        if (method_exists($vehiculo,"getCilindrada")) {
            $atributos .= "Cilindrada: " . $vehiculo->getCilindrada() . "cc // ";
        }
        
        if (method_exists($vehiculo,"getLongitud")) {
            $atributos .= "Longitud: " . $vehiculo->getLongitud() . "m // ";
        }
        
        if (method_exists($vehiculo,"getNumeroCadenasNieve")) {
            $atributos .= "Cadenas de nieve: " . $vehiculo->getNumeroCadenasNieve() . " // ";
        }

        return $atributos;
    }
}

class CuatroRuedas extends Vehiculo {
    private $numero_puertas;

    public function getNumeroPuertas() {
        return $this->numero_puertas;
    }

    public function setNumeroPuertas($num) {
        $this->numero_puertas = $num;
    }
    
    public function repintar($color) {
        $this->setColor($color);
    }
}

class DosRuedas extends Vehiculo {
    private $cilindrada;
    
    public function getCilindrada() {
        return $this->cilindrada;
    }

    public function setCilindrada($cilindrada) {
        $this->cilindrada = $cilindrada;
    }
    
    public function poner_gasolina($litros) {
        $this->$litros = $this->setPeso($this->getPeso() + $litros);
    }

    public function anadir_persona($peso_persona)
    {
        $this->setPeso($this->getPeso() + $peso_persona + 2);
    }

    public function repintar($color) {
        $this->setColor($color);
    }
}

class Coche extends CuatroRuedas {
    private $numero_cadenas_nieve;

    public function getNumeroCadenasNieve() {
        return $this->numero_cadenas_nieve;
    }

    public function anadir_cadenas_nieve($num) {
        $this->numero_cadenas_nieve += $num;
    }
    
    public function quitar_cadenas_nieve($num) {
        if ($this->numero_cadenas_nieve >= $num) {
            $this->numero_cadenas_nieve -= $num;
        } else {
            $this->numero_cadenas_nieve = 0;
        }
    }

    public function anadir_persona($peso_persona)
    {
        $this->setPeso($this->getPeso() + $peso_persona);
    }
}

class Camion extends CuatroRuedas {
    private $longitud;

    public function getLongitud() {
        return $this->longitud;
    }

    public function anadir_remolque($num) {
        $this->longitud += $num;
    }

    public function quitar_remolque($num) {
        $this->longitud += $num;
    }
}
?>