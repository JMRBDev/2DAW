$(document).ready(() => {
    $("#btnSuma").click(() => {
        $.ajax({
            type: "POST",
            url: "http://localhost/DWEC-AJAX/suma/suma.php",
            data: $("#formulario").serialize(),
            success: (data) => {
                $("#respSuma").html(data);
            },
        });
    });
});