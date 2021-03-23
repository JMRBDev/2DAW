<?php
include "Vista.php";
class LoginVista extends Vista{

    //De: https://getbootstrap.com/docs/4.0/examples/sign-in/
    public function muestraHTML(){

        $this->ret .= "<!doctype html>";
        $this->ret .="<html lang='es'>";
        $this->ret .="<head>";
        $this->ret .="<meta charset='utf-8'>";
        $this->ret .="<meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no'>";
        $this->ret .="<meta name='description' content=''>";
        $this->ret .="<meta name='author' content=''>";
        $this->ret .="<link rel='icon' href='/docs/4.0/assets/img/favicons/favicon.ico'>";
        $this->ret .="<title>Signin Template for Bootstrap</title>";

        $this->ret .="<link rel='canonical' href='https://getbootstrap.com/docs/4.0/examples/sign-in/'>";
        $this->ret .="<!-- Bootstrap core CSS -->";
        $this->ret .="<link href='https://getbootstrap.com/docs/4.0/dist/css/bootstrap.min.css' rel='stylesheet'>";
        $this->ret .="<!-- Custom styles for this template -->";
        $this->ret .="<link href='https://getbootstrap.com/docs/4.0/examples/sign-in/signin.css' rel='stylesheet'>";
        $this->ret .="</head>";
        $this->ret .="<body class='text-center'>";
            //ACTION --> login
        $this->ret .="<form action='index.php' class='form-signin' method=post>";

        //name='action' value='login'
        $this->ret .="<input type='hidden' name='action' value='login'>";
        $this->ret .="<img class='mb-4' src='https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg' alt='' width='72' height='72'>";
        $this->ret .="<h1 class='h3 mb-3 font-weight-normal'>Please sign in</h1>";
        $this->ret .="<label for='inputTel' class='sr-only'>Telefono</label>";
        $this->ret .="<input type='tel' name='telefono' id='inputTel' class='form-control' placeholder='Telefono' required autofocus>";
        $this->ret .="<label for='inputClave' class='sr-only'>Clave</label>";
        $this->ret .="<input type='clave' name='clave' id='inputClave' class='form-control' placeholder='Clave' required>";
        $this->ret .="<div class='checkbox mb-3'>";
        $this->ret .="<label>";
        $this->ret .="<input type='checkbox' value='remember-me'> Remember me</label> </div>";
        $this->ret .="<button class='btn btn-lg btn-primary btn-block' type='submit'>Sign in</button>";
        if(!is_null($this->modelo->getMensaje())){
            $this->ret .=" <div class='alert alert-warning alert-dismissable' role='alert'>";
            $this->ret .=" <strong>¡Lo sentimos! </strong>".$this->modelo->getMensaje();
            $this->ret .=" </div>";
        }
        $this->ret .="<p class='mt-5 mb-3 text-muted'>&copy; 2020-2021</p>";


        $this->ret .="</form>";
 
        $this->ret .="</body>";
   
        $this->ret .="</html>";
        return $this->ret;
      

    }
}
?>