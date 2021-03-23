let xmlhttp = new XMLHttpRequest();
let datos = "./json/miswebs.json";

xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        let listaWebs = JSON.parse(this.responseText);
        cogeWebs(listaWebs);
    }
}

xmlhttp.open("GET", datos, true);
xmlhttp.send();

function cogeWebs(arr) {
    let salida = "";
    arr.forEach(web => {
        salida += `<a href="${web.url}">${web.nombre}</a><br>`;
    });

    document.querySelector("#lasWebs").innerHTML = salida;
}