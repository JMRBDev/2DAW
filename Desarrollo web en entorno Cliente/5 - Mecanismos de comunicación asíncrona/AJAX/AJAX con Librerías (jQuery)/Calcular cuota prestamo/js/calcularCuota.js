$(document).ready(() => {
    $("#btnCalcular").click(() => {
        $.ajax({
            type: "GET",
            url: "http://localhost:80/DWEC/interes_mensual/index.php",
            data: $("#formulario").serialize(),
            success: (data) => {
                $("#respCalculo").html(`La cuota mensual es: ${parseFloat(data).toFixed(2)}€`);
            },
        });
    });
});