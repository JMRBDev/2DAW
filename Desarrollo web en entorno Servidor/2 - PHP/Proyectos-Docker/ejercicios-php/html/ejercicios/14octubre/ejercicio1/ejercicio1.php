<?php

class Vehiculo {
    private $color;
    private $peso;

    public function circular() {

    }

    public function anadir_persona($peso_persona) {

    }
}

class CuatroRuedas extends Vehiculo {
    private $numero_puertas;
    
    public function repintar() {

    }
}

class DosRuedas extends Vehiculo {
    private $cilindrada;
    
    public function poner_gasolina($litros) {
        
    }
}

class Coche extends CuatroRuedas {
    private $numero_cadenas_nieve;

    public function anadir_cadenas_nieve($num) {

    }

    public function quitar_cadenas_nieve($num) {
        
    }
}

class Camion extends CuatroRuedas {
    private $longitud;

    public function anadir_remolque($num) {

    }

    public function quitar_remolque($num) {
        
    }
}
?>