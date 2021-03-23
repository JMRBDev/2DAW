function calcularLetraDNI() {
    const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
    const numeroDNI = document.getElementById('numeroDNI').value;
    const resultado = document.getElementById('resultado');

    /* Lo hago de esta manera para controlar que el DNI siempre tenga 8 dígitos, de la manera
       en la que está en el PDF se puede poner como DNI el número "123" */
    resultado.innerHTML = numeroDNI.toString().length > 0 && numeroDNI >= 0 ?
    numeroDNI.toString().length != 8 ?
    "No has introducido un número de DNI correcto" :
    `${numeroDNI}${letras[numeroDNI % 23]}` :
    "No has introducido un número de DNI";
}