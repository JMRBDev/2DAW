const resultado = document.getElementById('resultado');
let coches = [];

function Coche(modelo, color, kms, combustible, matriculado) {
    this.modelo = modelo;
    this.color = color;
    this.kms = kms;
    this.combustible = combustible;
    this.matriculado = matriculado;
    coches.push(this);

    this.modelonew = (modelo, color, kms, combustible) => {
            this.modelo = modelo;
            this.color = color;
            this.kms = kms;
            this.combustible = combustible;
        },

        this.modelover = () => {
            return `Modelo: ${this.modelo} - Color: ${this.color} - KMs: ${this.kms} - Combustible: ${this.combustible}${this.matriculado && this.matricula ? ` - Matricula: ${this.matricula}` : ''}`;
        }

    this.anadirMatricula = (matricula) => {
        if (this.matriculado) this.matricula = matricula;
    }
}

function verCoches() {
    let resultadoString = "";
    
    for (let i = 0; i < coches.length; i++) {
        resultadoString += coches[i].modelover() + "<br>";
    }

    resultado.innerHTML = resultadoString;
}

function borrarCoches() {
    coches = [];
}

let coche1 = new Coche("Ford", "Verde", 400000, 21, true);
coche1.matricula = "647HGB";
let coche2 = new Coche("Volvo", "Negro", 200000, 27, false);
let coche3 = new Coche("Dacia", "Blanco", 3000, 17, true);