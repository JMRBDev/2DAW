<?php


$requestUrl = 'http://'.$_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI'];
$requestString = substr($requestUrl, strlen($baseUrl));
$urlParams = explode('/', $requestString);

switch (isset($_GET['action'])) {
    case 'ver':
        
        break;
    case 'otra_Action':
       //TODO
        break;
    default:
        //Cargamos las dependencias
        require_once "controlador/ListadoPersonajeControlador.php";
        //$controlador = new ListadoPersonajeControlador();
        //$controlador->ejecuta();

        require_once "controlador/ListadoPlanetaControlador.php";
        $controlador = new ListadoPlanetaControlador();
        $controlador->ejecuta();
    
}


?>
