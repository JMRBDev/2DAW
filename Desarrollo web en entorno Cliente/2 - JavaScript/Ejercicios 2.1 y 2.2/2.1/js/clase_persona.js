class Persona {
    constructor(nombre, edad, altura) {
        this.nombre = nombre;
        this.edad = edad;
        this.altura = altura;
    }
}

const resultado3 = document.getElementById('resultado3');
const persona = new Persona("Juan", 45, 175);

resultado3.innerHTML = `El usuario ${persona.nombre} tiene ${persona.edad} años y mide ${persona.altura} centímetros`;
console.log(resultado3.innerHTML);