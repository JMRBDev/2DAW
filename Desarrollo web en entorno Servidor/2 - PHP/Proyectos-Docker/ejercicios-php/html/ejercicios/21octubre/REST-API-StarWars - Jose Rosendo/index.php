<?php


/*
$requestUrl = 'http://'.$_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI'];
$requestString = substr($requestUrl, strlen($baseUrl));
$urlParams = explode('/', $requestString);
print_r($urlParams);*/

switch (isset($_GET['action'])) {
    case 'ver_personaje':
        $id = $_GET['id'];
            echo  $id;
            require_once "controlador/VerPersonajeControlador.php";
            $controlador = new VerPersonajeControlador($id);
            $controlador->ejecuta();
        break;
    case 'ver_planeta':
        $id = $_GET['id'];
            echo  $id;
            require_once "controlador/VerPlanetaControlador.php";
            $controlador = new VerPlanetaControlador($id);
            $controlador->ejecuta();
        break;
    case 'otra_Action':
       echo "La acción no existe";
        break;
    default:
        //Cargamos las dependencias de Personajes
        require_once "controlador/ListadoPersonajeControlador.php";
        $controlador = new ListadoPersonajeControlador();
        $controlador->ejecuta();

        //Cargamos las dependencias de Planetas
        require_once "controlador/ListadoPlanetaControlador.php";
        $controlador = new ListadoPlanetaControlador();
        $controlador->ejecuta();
    
}
