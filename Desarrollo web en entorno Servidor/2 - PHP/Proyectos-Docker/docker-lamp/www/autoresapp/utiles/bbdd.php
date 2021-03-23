<?php

/**
 * Listado de tablas de BBDD
 */
function tablas(){
    return ['Books', 'Customers', 'Authors'];
}

/**
 *  Genera SELECT a partir del nombre
 */
function createSELECT($nombre_tabla){
    return $query_autores = 'SELECT * From '.$nombre_tabla;
}


/**
 * Conecta con la BBDD
 */
function conectar_con_bbdd(){
    $user_bbdd = 'user';
    $pass_bbdd = 'test';
    $nombre_bbdd = "myDb";
    $host = 'db';
    // Connexion de la base de datos
    $conn = mysqli_connect($host,  $user_bbdd, $pass_bbdd, $nombre_bbdd);
    //Devuelve la conexión
    return $conn;
}
/**
 * Cerramos la BBDD
 */
function cerrar_bbdd($conn){
    //Cerrar conexión
    mysqli_close($conn);
}

/**
 * Devuelve los Autores
 */
function obtenerAutores(){
    $query = createSELECT('Autores');
    $autores = [];
    try {
        $conn = conectar_con_bbdd();
        $result = mysqli_query($conn,  $query);

        while($value = $result->fetch_array(MYSQLI_ASSOC)){
            //print_r($value);
            $id = $value['Id'];
            $autores[$id] = $value;
        }
        $result->close();
        cerrar_bbdd($conn);    
        
        return $autores;
    
    } catch (Exception $e) {
        echo 'Excepción capturada: ',  $e->getMessage(), "\n";
    }finally{
        return $autores;
    }
   
}

/**
 * Devuelve las obras
 */
function obtenerObras($id_autor){
    $query = createSELECT('Obras, ObrasAutores WHERE (Obras.Id = ObrasAutores.ObrasId AND ObrasAutores.AutoresId = ' . $id_autor . ')');
    print($query);
    $autores = [];
    try {
        $conn = conectar_con_bbdd();
        $result = mysqli_query($conn,  $query);
        foreach ($result as $key => $value) {
            print("<pre>" . $value['Titulo'] . "</pre>");
        }

        while($value = $result->fetch_array(MYSQLI_ASSOC)){
            print_r($value);
            $id = $value['Id'];
            $autores[$id] = $value;
        }
        $result->close();
        cerrar_bbdd($conn);    
        
        return $autores;
    
    } catch (Exception $e) {
        echo 'Excepción capturada: ',  $e->getMessage(), "\n";
    }finally{
        return $autores;
    }
   
}
