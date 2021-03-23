function mostrarSugerencias(texto) {
    if (texto.length == 0) {
        document.querySelector("#sugerencias").innerHTML = "";
        return;
    } else {
        let xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            console.log(texto);
            if (this.readyState == 4 && this.status == 200) {
                document.querySelector("#sugerencias").innerHTML = this.response;
            }
        }
        xmlhttp.open("GET", "http://localhost/?param=" + texto, true);
        xmlhttp.send();
    }
}

function enviar() {
    let palabra = document.querySelector("#nombre").value;
    let texto = document.querySelector("#sugerencias").innerHTML;

    if (palabra == "") {
        alert("ERROR campo vacío");
    } else if (texto.toLowerCase() != document.querySelector("#sugerencias").innerText.toLowerCase()) {
        alert("Nombre disponible");
    } else {
        alert("Ese nombre ya está en uso");
    }
}