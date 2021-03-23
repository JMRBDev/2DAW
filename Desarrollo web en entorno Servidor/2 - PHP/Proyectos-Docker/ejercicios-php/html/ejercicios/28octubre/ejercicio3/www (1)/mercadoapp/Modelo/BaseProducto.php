<?php
require_once('./Utiles/AbstractBaseDatos.php');
require_once('Entidades/Producto.php');

class BaseProducto extends AbstractBaseDatos{

/**
     * Implementa la función abstract de AbsractBaseDatos
     */

     /**
      * Obtiene todos los elementos de Categoria
      */
    public function obtenerTodos(){
        $resultado = $this->get();
        $productos = array();
      
        if(sizeof($resultado)>0){

            foreach ($resultado as &$value) {
                $prod = new Producto();
                $idproducto = $value["IdProd"];
                $nombre = $value["Nombre"];
                $descripcion = $value["Descripcion"];
                $peso = $value["Peso"];
                $stock = $value["Stock"];

                $prod->setId($idproducto);
                $prod->setNombre($nombre);
                $prod->setDescripcion($descripcion);
                $prod->setPeso($peso);
                $prod->setStock($stock);

                array_push($productos,  $prod);
            }


        }

        return $productos;
    }

    public function obtenerId($id){
      $resultado = $this->get($id);
      $productos = array();
    
      if(sizeof($resultado)>0){

          foreach ($resultado as &$value) {
              $prod = new Producto();
              $idproducto = $value["IdProd"];
              $nombre = $value["Nombre"];
              $descripcion = $value["Descripcion"];

              $prod->setId($idproducto);
              $prod->setNombre($nombre);
              $prod->setDescripcion($descripcion);

              array_push($productos,  $prod);
          }


      }

      return $productos[0];
  }


  /**
   * Crea una nueva categoria
   */
  public function nuevo($producto){
      return $this->set($producto); 
  }

  /**
   * Modifica una categoria
   */
  public function modifica($producto){
    return $this->edit($producto); 
  }

    /**
   * Borrar una categoria
   */
  public function borrar($producto){
    return $this->delete($producto); 
  }

  /***
   * ##########################################################
   * ##
   * ##       IMPLEMENTACIÓN DE METODOS ABSTRACTOS
   * ##                 GET , SET , EDIT , DELETE
   * ##
   * ##########################################################
   */

    protected function get($IdProducto='') {
           $ret = NULL;
           if($IdProducto!= ''){

             $ret = $this->get_results_from_query("SELECT *  FROM `productos` WHERE `IdProd` = '$IdProducto'");
           }else{
             $ret = $this->get_results_from_query("SELECT * FROM `productos`");
           }
          return $ret;
       }
   
         protected function set($producto='') {
   
   
           if(isset($producto)){
             $nombre = $producto->getNombre();
             $descripcion = $producto->getDescripcion();
             $query = "INSERT INTO `productos` (Nombre, Descripcion) VALUES ('$nombre','$descripcion')";

      
               //REALIZAR COMPROBACIÓN
             try{
              
               return $this->execute_single_query($query);
             }catch(Exception $e){
               echo $e;
             }
             
             
           }
   
         }
         public function edit($producto='') {
          
          if(isset($producto)){
            $id =  $producto->getId();
            $nombre = $producto->getNombre();
            $descripcion = $producto->getDescripcion();


          try{
            $query ="UPDATE `productos` SET `Nombre`='$nombre',`Descripcion`='$descripcion' WHERE `IdProd`=$id";
            return $this->execute_single_query($query);

          }catch(Exception $e){

            echo $e;
          }
        }
         }
         public function delete($IdProducto='') {

          try{
            $query ="DELETE FROM `productos` WHERE `IdProd`=$IdProducto";
            return $this->execute_single_query($query);

          }catch(Exception $e){

            echo $e;
          }

         }
}
?>