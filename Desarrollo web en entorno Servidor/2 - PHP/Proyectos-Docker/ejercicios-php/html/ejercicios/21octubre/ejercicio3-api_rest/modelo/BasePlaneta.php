<?php
    require_once "AbstractBase.php";
    require_once "Planeta.php";
    require_once('./utiles/Rest.php');
    require_once('./utiles/StarWarsAPI.php');

    class BasePlaneta extends AbstractBase{

        public function obtenerTodos(){
            $planetas = [];
            $rest = Rest::callAPI('GET', StarWarsAPI::recursoPlanetas(),"");
            $total = $rest['count'];

            /*
            //Obtener siguiente página
            $next = $rest['next'];
            //Obtener pagina anterior
            $previus = $rest['previous'];*/

            $valores =  $rest['results'];

            foreach($valores as $key => $value){
                $planeta = new Planeta($key+1);
                $planeta->setNombre($value['name']);
                array_push (  $planetas ,$planeta);
            }

             return $planetas;
        }
        public function obtener($id){
            $rest = Rest::callAPI('GET', StarWarsAPI::recursoPlanetas().$id."/","");
           
            return $rest;
        }

    }
?>