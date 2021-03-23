<?php
require_once "AbstractVista.php";
class ListadoPlanetasVista extends AbstractVista {    

function __construct($model)    {      
    $this->modelo = $model;    
}    

public function muestraHTML(){        
    $ret = $this->ret;        
    $ret .="<style>";        
    $ret .="th{";            
    $ret .="width: 8rem;";            
    $ret .="text-align: left;";            
    $ret .="border-bottom: 1px solid black;";            
    $ret .="}";            
    $ret .="td{";                
    $ret .="width: 8rem;";               
    $ret .="}";                
    $ret .="</style>";                
    $ret .="<h1>Listado de Personajes</h1>";                
    $ret .="<table>";                
    $ret .="<tr>";                
    $ret .="<th>Nombre</th>";
    $ret .="  </tr>";       
    foreach ($this->modelo as $row):         
        $ret .=" <tr>";        
        $ret .="<td>". $row->getNombre() ."</td>";
        $ret .="</tr>";    
    endforeach;   
    $ret .="</table>";    
    echo $ret;   
}
}
?>
