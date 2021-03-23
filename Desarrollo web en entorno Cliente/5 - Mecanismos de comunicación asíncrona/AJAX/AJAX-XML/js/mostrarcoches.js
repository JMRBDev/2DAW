let xmlhttp = new XMLHttpRequest();

xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        recuperarDatos(this.responseXML);
    }
}

xmlhttp.open("GET", "./xml/coches.xml", true);
xmlhttp.send();

function recuperarDatos(xml) {
    let salida = "";

    let arr = xml.getElementsByTagName("coche");

    for (let i = 0; i < arr.length; i++) {
        salida += `
            Marca: ${arr[i].getElementsByTagName("marca")[0].childNodes[0].nodeValue}<br>
            Modelo: ${arr[i].getElementsByTagName("modelo")[0].childNodes[0].nodeValue}<br>
            Color: ${arr[i].getElementsByTagName("color")[0].childNodes[0].nodeValue}<br><br>
        `;
    }

    document.querySelector("#listado").innerHTML = salida;
}