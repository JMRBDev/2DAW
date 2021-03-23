<?php

// Funcion de crear persona
function crearPersona($persona)
{
    $fp = fopen("./personas.txt", "a"); // Acceder al ficher txt de personas en modo append para concatenar valores

    if ($persona['edad'] >= 18) { // Si la persona tiene 18 años o más:
        fwrite($fp, "," . $persona['nombre'] . ":" . $persona['edad']); // Concatenar el nombre y la edad de la persona al fichero txt
        echo "Persona creada con éxito"; // Informar de que se ha creado con éxito
    } else { // Si la persona tiene menos de 18 años:
        echo "Error, la persona es menor de edad"; // Informar de que es menor de edad
    }
}

// Función de cargar personas
function cargarPersonas()
{
    $fichero_personas = explode(",", file('./personas.txt')[0]); // Crear un array con las personas separando por comas, así que cada item del array tiene el formato nombre:edad

    echo "<table><thead><tr><th>Nombre</th><th>Edad</th></tr></thead><tbody>"; // Crear la tabla y los encabezados en negrita de Nombre y Edad
    foreach ($fichero_personas as $index => $persona) { // Para cada persona en la lista de personas:
        $persona_nombre = explode(":", $persona)[0]; // Separar los items por el símbolo : para obtener el nombre
        $persona_edad = explode(":", $persona)[1]; // Separar los items por el símbolo : para obtener la edad
        echo "<tr><td>" . $persona_nombre . "</td><td>" . $persona_edad . "</td></tr>"; // Insertar el registro de nombre y edad en su lugar correspondiente en la tabla
    }
    echo "</tbody></table>"; // Cerrar la tabla
}

if (array_key_exists("persona", $_GET)) { // Si la petición GET contiene un dato llamado "persona":
    if ($_GET['persona']['edad'] == "" || $_GET['persona']['nombre'] == "") { // Si la edad o el nombre están vacíos:
        echo "Error: Los campos nombre y edad son obligatorios"; // Informar de que los dos campos son requeridos
    } else { // Si no están vacíos:
        crearPersona($_GET['persona']); // Crear la persona
    }
} else { // Si la petición GEt no contiene un dato llamado "persona":
    cargarPersonas(); // Cargar las personas
}
