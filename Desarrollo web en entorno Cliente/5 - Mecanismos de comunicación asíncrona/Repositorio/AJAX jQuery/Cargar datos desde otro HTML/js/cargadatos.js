$(document).ready(() => {
    $("#btnDatos").click(() => {
        $("#lista").load("datos.html");
    });
});