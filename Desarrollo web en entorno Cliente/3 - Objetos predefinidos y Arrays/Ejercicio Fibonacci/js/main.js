const resultado = document.getElementById('container');
let num1 = 0;
let num2 = 1;
resultado.innerHTML = num1 + num2;

function fibonacci(num1, num2) {
    if (num1 + num2 <= 100) {
        resultado.innerHTML += ", " + (num1 + num2);
        fibonacci(num2, num1 + num2);
    }
}

fibonacci(num1, num2);