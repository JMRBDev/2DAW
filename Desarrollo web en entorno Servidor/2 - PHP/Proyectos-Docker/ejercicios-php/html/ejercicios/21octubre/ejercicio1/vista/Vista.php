<?php
abstract class Vista
{
    protected $ret = "";
    protected $modelo;

    abstract function muestraHTML();
}
