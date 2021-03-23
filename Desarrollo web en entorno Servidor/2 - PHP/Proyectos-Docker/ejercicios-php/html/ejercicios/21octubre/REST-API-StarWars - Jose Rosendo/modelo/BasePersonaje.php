<?php
    require_once "AbstractBase.php";
    require_once "Personaje.php";
    require_once('./utiles/Rest.php');
    require_once('./utiles/StarWarsAPI.php');

    class BasePersonaje extends AbstractBase{


        public function obtenerTodos(){
            $personajes = [];
            $rest = Rest::callAPI('GET', StarWarsAPI::recursoPersonas(),"");
            $total = $rest['count'];

            /*
            //Obtener siguiente página
            $next = $rest['next'];
            //Obtener pagina anterior
            $previus = $rest['previous'];*/

            $valores =  $rest['results'];

            foreach($valores as $key => $value){
                $personaje = new Personaje($key+1);
                $personaje->setNombre($value['name']);
                $personaje->setHeight($value['height']);
                $personaje->setGender($value['gender']);
                $personaje->setBirth_year($value['birth_year']);
                array_push (  $personajes ,$personaje);
            }

             return $personajes;
        }
        public function obtener($id){
            $rest = Rest::callAPI('GET', StarWarsAPI::recursoPersonas().$id."/","");
           
            return $rest;
        }

    }
?>