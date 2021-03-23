<?php
class StarWarsAPI{
    //De: https://swapi.dev/api/
    /**
     * Endpoints

    /species/ -- get all the species resources
    /species/:id/ -- get a specific species resource
    /species/schema/ -- view the JSON schema for this resource

     */
    const API = "https://swapi.dev/api/";
    const PEOPLE = "people/";
    const FILMS = "films/";
    const PLANETS =  "planets/";
    const SPECIES = "species/";
    const STARSHIPS = "starships/";
    const VEHICLES = "vehicles/";

    function recursoPersonas() {
        return self::API.self::PEOPLE;
    }
    function recursoPeliculas() {
        return  "https://swapi.dev/api/films/";
    }
    function recursoPlanetas(){
        return "https://swapi.dev/api/planets/";
    }

}
     
?>