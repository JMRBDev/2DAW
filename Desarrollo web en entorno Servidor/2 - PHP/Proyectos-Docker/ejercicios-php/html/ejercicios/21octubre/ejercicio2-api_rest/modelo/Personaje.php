<?php
    require_once "AbstractModelo.php";
    class Personaje extends AbstractModelo{
        private $nombre;
        private $genero;

        function __construct($id) {
           $this->id = $id;
        }

        public function getNombre(){
            return $this->nombre;
        }
        public function setNombre($nombre){
            $this->nombre = $nombre;
        }

        public function getGenero() {
            return $this->genero;
        }
        public function setGenero($genero) {
            $this->genero = $genero;
        }

    }
?>