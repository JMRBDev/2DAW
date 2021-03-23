let xmlhttp = new XMLHttpRequest();
let ciclos = "./json/ciclos.json";

xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        let listaCiclos = JSON.parse(this.responseText);
        mostrarCiclos(listaCiclos);
    }
}

xmlhttp.open("GET", ciclos, true);
xmlhttp.send();

function mostrarCiclos(listaCiclos) {
    listaCiclos.forEach(ciclo => {
        document.querySelector("#ciclos").innerHTML += `<b>${ciclo.nombre}</b>: ${ciclo.modulos.join(", ")}<br>`;
    });
}