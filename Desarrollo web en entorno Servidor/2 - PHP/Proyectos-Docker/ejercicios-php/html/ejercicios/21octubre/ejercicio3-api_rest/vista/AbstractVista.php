<?php
    abstract class AbstractVista{
        protected $ret = "";
        protected $modelo;

        abstract function muestraHTML();
    }
?>