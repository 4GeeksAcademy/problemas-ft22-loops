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