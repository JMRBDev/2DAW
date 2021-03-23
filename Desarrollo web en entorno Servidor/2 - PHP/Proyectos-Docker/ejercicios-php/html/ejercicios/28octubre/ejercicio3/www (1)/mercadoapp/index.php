<?php
session_start();

//include 'config.php';
$requestUrl = 'http://'.$_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI'];
//$requestString = substr($requestUrl, strlen($baseUrl));
//$urlParams = explode('/', $requestString);
//print_r($urlParams);

/** 
 * Incluimos los archivos:
 *      - Modelo: 'Login.php' que contiene: 
 *               + $mensajes: Cadena para errores.
 *               + $cliente: Entidad cliente.
 *      -Control: 'LoginControl.php' que se le pasa por paramentro el Modelo.
 * */
include "Modelo/Login.php";
include "Control/LoginControlador.php";

//Creamos un Objeto LoginControlador
$login_controlador = new LoginControlador(new Login());

/**
//Si accedemos al index.php por una acción POST.
*/
if(isset($_POST['action'])){
   $action_post = $_POST['action'];

   if($action_post === 'login'){
      #Capturo el valor de los name de POST
      $telefono = $_POST['telefono'];
      $clave = $_POST['clave'];

      //Comprueba con la Base de Datos si existe el Usuario y la Clave
      if($login_controlador->login($telefono, $clave)){
         
         /** 
         //Si el acceso es correcto, iniciamos HOME_CONTROLADOR
         */
        // echo "Bienvenido ".$login_controlador->getModelo()->getCliente()->getTelefono();
        if(isset($_SESSION['usuario'])){
            include "Control/HomeControlador.php";
            $modelo = $login_controlador->getModelo();
            $home_controlador = new HomeControlador($modelo);
            $home_controlador->ejecuta();
        }
      }else{
         //Muestra errores a través de mensaje
         //En HomeControlador dentro de la función login se realiza setMessage
         $login_controlador->ejecuta();
      }
   }elseif(isset($_SESSION['usuario'])){

      include "Control/HomeControlador.php";

      $modelo = $login_controlador->getModelo();
      $home_controlador = new HomeControlador($modelo);
      $home_controlador->setAccion($action_post);
      $home_controlador->ejecuta();
   }
/**
//Si accedemos al index.php por una acción GET.
*/
}elseif(isset($_GET['action'])){
   $action_get = $_GET['action'];
   
   # Descomentar para comprobar que se ha capturado correctamente el GET # 
   //$_SESSION['accion'] = $action_get;

   //Capturamos el Modelo de Login Controlador para pasarlo a Home Controlador.
   $modelo = $login_controlador->getModelo();

   /**
    * Solo si hay una sesión conectada mostrará el home.html
    */
   if(isset($_SESSION['usuario'])){
      include "Control/HomeControlador.php";
      $home_controlador = new HomeControlador($modelo);
      $home_controlador->setAccion($action_get);
      $home_controlador->ejecuta();
  }
/**
//Si accedemos al index.php por PRIMERA VEZ.
*/
}else{
   //Para realizar LOGOUT
   $_SESSION['requestUrl'] = $requestUrl;
   //Muestra INDEX
   $login_controlador->ejecuta();
}



//PARA PRUEBAS
function testing(){
   echo "##VARIABLES DE SESIÓN:<BR>";
   print_r($_SESSION);
   echo "<BR>##";

}
testing();

?>



