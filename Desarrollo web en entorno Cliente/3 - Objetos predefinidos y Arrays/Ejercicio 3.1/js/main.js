const cronometro = document.getElementById('cronometro');

function calcularHora() {
    let fecha = new Date();
    console.log(((fecha.getHours() + 24) % 12 || 12).toString().length);
    let amPm = fecha.getHours() < 12 ? "am" : "pm";
    let horas = ((fecha.getHours() + 24) % 12 || 12).toString().length == 1 ? "0" + ((fecha.getHours() + 24) % 12 || 12) : ((fecha.getHours() + 24) % 12 || 12);
    let minutos = fecha.getMinutes().toString().length == 1 ? "0" + fecha.getMinutes() : fecha.getMinutes();
    let segundos = fecha.getSeconds().toString().length == 1 ? "0" + fecha.getSeconds() : fecha.getSeconds();

    cronometro.innerHTML = `<h1>${horas}:${minutos}:${segundos} ${amPm}</h1>`;
}

calcularHora();
setInterval(calcularHora, 1000);