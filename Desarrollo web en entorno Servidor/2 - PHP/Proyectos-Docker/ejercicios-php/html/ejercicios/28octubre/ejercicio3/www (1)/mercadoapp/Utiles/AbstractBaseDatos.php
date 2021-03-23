<?php
//https://mestreacasa.gva.es/c/document_library/get_file?folderId=500017526245&name=DLFE-1273595.pdf

abstract class AbstractBaseDatos
{
    /**
     * Conecta con la base de datos
     */
     private function conectar_con_bbdd(){
        
        $user_bbdd = 'user';
        $pass_bbdd = 'test';
        $nombre_bbdd = "mercado";
        $host = 'db';
        // Connexion de la base de datos
        $conn = mysqli_connect($host,  $user_bbdd, $pass_bbdd, $nombre_bbdd);
        //Devuelve la conexión
        return $conn;
    }
    /*
    * Cierra una conexión 
    */
   private function cerrar_bbdd($conn){
       //Cerrar conexión
       mysqli_close($conn);
   }


    # Traer resultados de una consulta en un Array protected
    protected function get_results_from_query($query){
        $conn = $this->conectar_con_bbdd();
        $result = mysqli_query($conn,  $query);
        $ret = [];
   
        while($value = $result->fetch_array(MYSQLI_ASSOC)){
            array_push($ret, $value);
        }
        /* Liberar el conjunto de resultados*/
        $result->close();
        $this->cerrar_bbdd($conn);    
        return  $ret;
    }
    # Ejecutar un query simple del tipo INSERT, DELETE, UPDATE 
    protected function execute_single_query($query){
        $conn = $this->conectar_con_bbdd();
        $result = mysqli_query($conn,  $query);
        $this->cerrar_bbdd($conn);    
    }


   /**
    // METODOS ABSTRACTOS
    */

   # métodos abstractos para ABM de clases que hereden    
   abstract protected function get();
   abstract protected function set();
   abstract protected function edit();
   abstract protected function delete();

    
}


?>