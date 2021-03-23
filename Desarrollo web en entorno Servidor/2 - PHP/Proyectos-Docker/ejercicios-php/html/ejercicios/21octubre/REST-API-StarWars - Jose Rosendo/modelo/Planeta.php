<?php
require_once "AbstractModelo.php";
    class Planeta extends AbstractModelo{
        private $nombre;

        function __construct($id) {
            $this->id = $id;
        }

        public function getNombre(){
            return $this->nombre;
        }
        public function setNombre($nombre){
            $this->nombre = $nombre;
        }

    }
?>