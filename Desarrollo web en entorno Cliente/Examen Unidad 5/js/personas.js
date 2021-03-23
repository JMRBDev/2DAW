$(document).ready(() => { // Cuando el documento haya cargado:
    $("#crear-btn").click(() => { // Cuando se haga clic en el botón de crear persona:
        $.ajax({ // Petición AJAX
            type: "GET",
            url: "http://localhost:80/DWEC/examen_u_5/personas.php",
            data: {
                "persona": {
                    "nombre": $("#nombre").val(), // Valor del input nombre
                    "edad": $("#edad").val(), // Valor del input edad
                },
            },
            success: (data) => {
                $("#resultado").html(data); // Mostrar respuesta del servidor
            },
        });
    });

    $("#cargar-btn").click(() => { // Cuando se haga clic en el botón de cargar personas:
        $.ajax({ // Petición AJAX
            type: "GET",
            url: "http://localhost:80/DWEC/examen_u_5/personas.php",
            data: {}, // Datos vacíos para que el server sepa que tiene que cargar personas, no crearlas
            success: (data) => {
                $("#resultado").html(data); // Mostrar la respuesta del servidor
            },
        });
    });
});