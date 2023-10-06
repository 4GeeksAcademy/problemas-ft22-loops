//Crea un programa que simule una calculadora
const prompt = require('prompt-sync')();
//Funciones CallBack
const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => a / b;
const raizCuadrada = (a, b = 1) => Math.sqrt(a);
const alCuadrado = (a, b = 1) => a**2;
const alCubo = (a, b = 1) => a**3;

const operation = (callbackfn, param1, param2) => {
    return callbackfn(param1, param2);
}

let operacion = prompt("Que operacion desea realizar? \nsuma = 1, \nresta = 2, \nmultiplicacion = 3, \ndivision = 4, \nraiz cuadrada = 5, \ncuadrado de un numero = 6, \ncubo de un numero = 7: ");

if (operacion == 1){
    let a = parseInt(prompt("primer numero: "));
    let b = parseInt(prompt("segundo numero: "));
    console.log("La suma es: " + operation(sumar, a, b));
}
else if 
    (operacion == 2){
        let a = parseInt(prompt("primer numero: "));
        let b = parseInt(prompt("segundo numero: "));
        console.log(`La respuesta es ${a - b}`);
}

// ........... etc
