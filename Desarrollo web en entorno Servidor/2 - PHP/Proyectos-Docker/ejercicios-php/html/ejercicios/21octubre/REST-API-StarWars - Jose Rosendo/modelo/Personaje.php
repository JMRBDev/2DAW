<?php
    require_once "AbstractModelo.php";
    class Personaje extends AbstractModelo{
        private $nombre;
        private $height;
        private $gender;
        private $birth_year;

        function __construct($id) {
           $this->id = $id;
        }
        public function getBirth_year(){
            return $this->birth_year;
        }
        public function setBirth_year($birth_year){
            $this->birth_year = $birth_year;
        }

        public function getHeight(){
            return $this->height;
        }
        public function setHeight($height){
            $this->height = $height;
        }
        public function getGender(){
            return $this->gender;
        }
        public function getNombre(){
            return $this->nombre;
        }
        public function setGender($gender){
            $this->gender = $gender;
        }
        public function setNombre($nombre){
            $this->nombre = $nombre;
        }

    }
?>