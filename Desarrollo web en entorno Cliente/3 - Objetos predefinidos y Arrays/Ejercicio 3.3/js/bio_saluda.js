const container = document.getElementById('container');
const saludaBtn = document.getElementById('saluda');
const biografiaBtn = document.getElementById('biografia');

// Con constructor
class Persona {
    constructor(name, age, gender, interests) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.interests = interests;
    }

    saluda() {
        container.innerHTML = `<h2>Hola, soy ${this.name}</h2>`;
    }

    bio() {
        container.innerHTML = `<h2>Nombre: ${this.name}<br>Edad: ${this.age}<br>Género: ${this.gender}<br>Intereses: ${this.interests}</h2>`;
    }
}

let p1 = new Persona('Jose', 21, 'H', 'Música, programación y tecnología');


// Con variable de tipo Object
let persona = {
    name: "Jose",
    age: 21,
    gender: "H",
    interests: "Música, programación y tecnología",
    saluda: () => {
        container.innerHTML = `<h2>Hola, soy ${persona.name}</h2>`;
    },
    bio: () => {
        container.innerHTML = `<h2>Nombre: ${persona.name}<br>Edad: ${persona.age}<br>Género: ${persona.gender}<br>Intereses: ${persona.interests}</h2>`;
    }
}