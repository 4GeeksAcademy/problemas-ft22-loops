//Crea un programa que genere la tabla de multiplicar de un número ingresado por el usuario.
// (antes de ejecutar, instalé  npm install prompt-sync  en terminal y descargó carpeta node_modules para tener prompt)
const prompt = require('prompt-sync')();

function tabla(num) {
    console.log(`Tabla de multiplicar del ${num}`);
    for (let i = 0; i <= 10; i++) {
        console.log(`${num} * ${i} = ${num * i}`);
    }
}

let numero = parseInt(prompt('Dame un valor mayor a 0: '));
tabla(numero);

//Escribe un bucle que calcule el factorial de un número dado.
function factorialNum(num) {
    factSum = num;
    for (let i = num - 1; i >= 1; i--) {
        factSum = factSum * i;      //5*4*3*2*1
    }
    return factSum;
}
console.log(factorialNum(parseInt(prompt('Dame un valor para calcular su factorial: '))));