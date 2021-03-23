<?php
//Array de nombres de ciudades
$arr[] = "Casares";
$arr[] = "Barcelona";
$arr[] = "Alcorcón";
$arr[] = "Málaga";
$arr[] = "Fuengirola";
$arr[] = "Marbella";
$arr[] = "Río de Janeiro";
$arr[] = "Gijón";
$arr[] = "Oviedo";
$arr[] = "Cáceres";
$arr[] = "Mérida";
$arr[] = "Cádiz";
$arr[] = "Estepona";
$arr[] = "París";
$arr[] = "Londres";
$arr[] = "Berlín";
$arr[] = "Hannover";
$arr[] = "Moscú";
$arr[] = "Atenas";
$arr[] = "Kassel";
$arr[] = "Praga";
$arr[] = "Nueva York";
$arr[] = "Dublín";
$arr[] = "Manilva";
$arr[] = "Gibraltar";
$arr[] = "Ulan Bator";
$arr[] = "Bombay";
$arr[] = "Niza";
$arr[] = "Pekín";
$arr[] = "Madrid";
$arr[] = "Bilbao";
$arr[] = "Úbeda";
$arr[] = "Valencia";
$arr[] = "Tokio";
$arr[] = "Vasteras";
$arr[] = "Washington";
$arr[] = "México DC";
$arr[] = "Estocolmo";
$arr[] = "Copenague";
$arr[] = "Oslo";
//Primero recogemos el parámetro de la URL
$param = $_REQUEST["param"];
$sugerencia="";
// Miramos si coincide el parámetro con alguna de las ciudades
if ($param !== ""){
    $param = strtolower($param); // se convierte el parámetro recibido a minúscula
    $len=strlen($param); // se determina la longitud del parámetro recibido
    foreach ($arr as $nombre){
        // se compara si el texto recibido coincide con el comienzo de alguna ciudad registrada en nuestro array
        if (stristr($param, substr($nombre,0,$len))) {
            if ($sugerencia === "") {
                $sugerencia = $nombre; //primera sugerencia
            }else{
                $sugerencia .= ", $nombre"; //segunda y siguientes sugerencias
            }
        }
    }
}
//En el caso de no encontrar ninguna sugerencia se le hace saber al usuario.
// en caso contrario devuelve las sugerencias encontradas
echo $sugerencia === "" ? "ninguna sugerencia" : $sugerencia;
?>