<?php
require_once "AbstractModelo.php";
    class Planeta extends AbstractModelo{
        private $nombre;

        public function getNombre(){
            return $this->nombre;
        }
        public function setNombre($nombre){
            $this->nombre = $nombre;
        }

    }
?>