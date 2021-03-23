<?php
$requestUrl = 'http://' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];
$requestString = substr($requestUrl, strlen($baseUrl));
$urlParams = explode('/', $requestString);
print_r($urlParams);

switch ($_GET['action']) {
    case 'ver':
        $id = $_GET['id'];
        require("controlador/VerCocheController.php");
        //Instancio el controlador
        $controller = new VerCocheController($id);
        //Ejecuto el método
        $controller->ejecuta();


        break;
    case 'otra_Action':
        //TODO
        break;
    default:
        require("controlador/CocheController.php");
        //Instancio el controlador
        $controller = new CocheController;
        //Ejecuto el método
        $controller->ejecuta();
}
