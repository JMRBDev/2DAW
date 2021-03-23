<?php
require_once('./Utiles/AbstractBaseDatos.php');
require_once('Entidades/Cliente.php');

class BaseCliente extends AbstractBaseDatos{


    /**
     * @var Cliente
     */
    public function obtener($telefono){
      //Instancio un nuevo objeto
      $cliente = new Cliente();
      //Devuelve un Array de Array
      $resultado = $this->get($telefono);
      
      //Si hay resultados
      if(sizeof($resultado)>0){
             
        $idcliente = $resultado[0]['IdCliente'];
        $telefono =  $resultado[0]['Telefono'];
        $nombre = $resultado[0]['Nombre'];
        $clave =  $resultado[0]['Clave'];
        $cp =  $resultado[0]['CP'];
        $direccion =  $resultado[0]['Direccion'];
        $rol =  $resultado[0]['Rol'];

        $cliente->setId($idcliente);
        $cliente->setTelefono($telefono);
        $cliente->setNombre($nombre);
        $cliente->setClave($clave);
        $cliente->setCp($cp);
        $cliente->setDireccion($direccion);
        $cliente->setRol($rol);

      }
      //print_r($resultado);
      return $cliente;
        
    }
    /**
     * Te permita agregar un Cliente
     */
    public function agregar($cliente){
      $this->set($cliente);
    }
  

    /**
     * Implementa la función abstract de AbsractBaseDatos
     */
    protected function get($telefono='') {
     /*   $ret = $this->get_results_from_query("SELECT * FROM `clientes`");
        return $ret;*/
        $ret = NULL;
        if($telefono!= ''){
          $this->query ="SELECT *  FROM `clientes` WHERE `telefono` = '$telefono'";
          $ret = $this->get_results_from_query("SELECT *  FROM `clientes` WHERE `telefono` = '$telefono'");
        }else{
          $ret = $this->get_results_from_query("SELECT * FROM `clientes`");
        }
       return $ret;
    }

      protected function set($cliente=NULL) {


        if(isset($cliente)){
          $telefono = $cliente->getTelefono();
          $clave = $cliente->getClave();
          $rol = $cliente->getRol();
          $cp = $cliente->getCp();
          $nombre = $cliente->getNombre();
          $direccion = $cliente->getDireccion();
          $query = "INSERT INTO `clientes` (Telefono, Nombre, Clave, Rol, CP, Direccion) VALUES ('$telefono', '$nombre', '$clave',$rol,'$cp','$direccion')";
   
            //REALIZAR COMPROBACIÓN
          try{
           
            $this->execute_single_query($query);
          }catch(Exception $e){
            echo $e;
          }
          
          
        }

      }
      public function edit() {
       /* TODO 
       $this->query ="UPDATE      clientes             SET         nombre='$nombre',                         apellido='$apellido',                         clave='$clave'             WHERE       email = '$email'         ";
       $this->execute_single_query();
       */
      }
      public function delete() {
        /** TODO 
         *  $this->query =DELETE FROM     clientes             WHERE           email = '$user_email'
         * 
        */
      }

      function __destruct(){
        unset($this->cliente);
      }
}

?>