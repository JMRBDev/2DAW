<?php
require_once('./Utiles/AbstractBaseDatos.php');
require_once('Entidades/Categoria.php');

class BaseCategoria extends AbstractBaseDatos{

/**
     * Implementa la función abstract de AbsractBaseDatos
     */

     /**
      * Obtiene todos los elementos de Categoria
      */
    public function obtenerTodos(){
        $resultado = $this->get();
        $categorias = array();
      
        if(sizeof($resultado)>0){

            foreach ($resultado as &$value) {
                $cat = new Categoria();
                $idcategoria = $value["IdCategoria"];
                $nombre = $value["Nombre"];
                $descripcion = $value["Descripcion"];

                $cat->setId($idcategoria);
                $cat->setNombre($nombre);
                $cat->setDescripcion($descripcion);

                array_push($categorias,  $cat);
            }


        }

        return $categorias;
    }

    public function obtenerId($id){
      $resultado = $this->get($id);
      $categorias = array();
    
      if(sizeof($resultado)>0){

          foreach ($resultado as &$value) {
              $cat = new Categoria();
              $idcategoria = $value["IdCategoria"];
              $nombre = $value["Nombre"];
              $descripcion = $value["Descripcion"];

              $cat->setId($idcategoria);
              $cat->setNombre($nombre);
              $cat->setDescripcion($descripcion);

              array_push($categorias,  $cat);
          }


      }

      return $categorias[0];
  }


  /**
   * Crea una nueva categoria
   */
  public function nuevo($categoria){
      return $this->set($categoria); 
  }

  /**
   * Modifica una categoria
   */
  public function modifica($categoria){
    return $this->edit($categoria); 
  }

    /**
   * Borrar una categoria
   */
  public function borrar($categoria){
    return $this->delete($categoria); 
  }

  /***
   * ##########################################################
   * ##
   * ##       IMPLEMENTACIÓN DE METODOS ABSTRACTOS
   * ##                 GET , SET , EDIT , DELETE
   * ##
   * ##########################################################
   */

    protected function get($IdCategoria='') {
           $ret = NULL;
           if($IdCategoria!= ''){

             $ret = $this->get_results_from_query("SELECT *  FROM `categorias` WHERE `IdCategoria` = '$IdCategoria'");
           }else{
             $ret = $this->get_results_from_query("SELECT * FROM `categorias`");
           }
          return $ret;
       }
   
         protected function set($categoria='') {
   
   
           if(isset($categoria)){
             $nombre = $categoria->getNombre();
             $descripcion = $categoria->getDescripcion();
             $query = "INSERT INTO `categorias` (Nombre, Descripcion) VALUES ('$nombre','$descripcion')";

      
               //REALIZAR COMPROBACIÓN
             try{
              
               return $this->execute_single_query($query);
             }catch(Exception $e){
               echo $e;
             }
             
             
           }
   
         }
         public function edit($categoria='') {
          
          if(isset($categoria)){
            $id =  $categoria->getId();
            $nombre = $categoria->getNombre();
            $descripcion = $categoria->getDescripcion();


          try{
            $query ="UPDATE `categorias` SET `Nombre`='$nombre',`Descripcion`='$descripcion' WHERE `IdCategoria`=$id";
            return $this->execute_single_query($query);

          }catch(Exception $e){

            echo $e;
          }
        }
         }
         public function delete($IdCategoria='') {

          try{
            $query ="DELETE FROM `categorias` WHERE `IdCategoria`=$IdCategoria";
            return $this->execute_single_query($query);

          }catch(Exception $e){

            echo $e;
          }

         }
}
?>