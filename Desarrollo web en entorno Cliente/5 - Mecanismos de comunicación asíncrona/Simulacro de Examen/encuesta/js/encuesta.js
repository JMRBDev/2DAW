$(document).ready(() => {
    $("#form-btn").click(() => {
        console.log($("#formulario").serialize());
        $.ajax({
            type: "GET",
            url: "http://localhost:80/DWEC/examen_encuesta/encuesta.php",
            data: {
                "voto": $("#formulario").serialize(),
            },
            success: (data) => {
                $("#resultado").html(data);
            },
        });
    });
});