<?php
    abstract class AbstractModelo{
        protected $id;

        public static function ver_atributo($objeto){
            if(method_exists($objeto, 'getNombre')){
                echo "El nombre es: ".$objeto->getNombre()."<br/>";
            }
        }

        public function getId(){
            return $this->id;
        }
    }
?>