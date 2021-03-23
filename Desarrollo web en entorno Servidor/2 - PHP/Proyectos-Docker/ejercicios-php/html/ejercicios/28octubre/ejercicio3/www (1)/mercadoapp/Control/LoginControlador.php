<?php
include "Controlador.php";
include "./Vista/LoginVista.php";
include "./Modelo/BaseCliente.php";

class LoginControlador extends Controlador
{

    public function login($telefono, $clave){
        //Objeto para Persistencia
       $base = new BaseCliente(); 
       $cliente = $base->obtener($telefono);
     
      //print_r($cliente);

       if(!is_null( $cliente->getTelefono())){
            $c = $cliente->getClave();
            if($c === $clave){
                
                $_SESSION['usuario'] =  $cliente->getNombre();    

                $model = $this->getModelo();
                $model->setCliente($cliente);
                $this->setModelo( $model);
                return true;
            }else{
                $model = $this->getModelo();
                $model->setMensaje("La contraseña no es correcta");
                $this->setModelo( $model);
                return false;
            }
       }
       $model = $this->getModelo();
       $model->setMensaje("El usuario y contraseña no son correctos");
       $this->setModelo( $model);
       return false;
    }

    public function setMensaje($mensaje){
        $this->mensaje = $mensaje;
    }

    public function getMensaje(){
        return $this->mensaje;
    }
    public function setModelo($cliente){
        $this->modelo = $cliente;
    }

    public function getModelo(){
        return $this->modelo;
    }

    
    public function ejecuta(){
        $login_vista = new LoginVista( $this->getModelo());
        echo $login_vista->muestraHTML();
       
    }
}

?>