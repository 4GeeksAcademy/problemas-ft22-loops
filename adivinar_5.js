/*Haz un juego de adivinanza en el que el programa elija un número aleatorio y 
el usuario deba adivinarlo, dando pistas si el número es mayor o menor.*/
const prompt = require('prompt-sync')();



function adivina(numero) {
    let randomNum = Math.floor(Math.random() * 100 + 1);
    console.log(randomNum); //Linea personal, para asegurarse de que funciona
    do {
        if (numero > randomNum) {
            numero = prompt(`numero es menor que ${numero}: `);
        }
        else if (numero < randomNum) {
            numero = prompt(`numero es mayor que ${numero}: `);
        }
    } while (numero != randomNum);
    if (randomNum == numero){
        console.log(`Adivinaste! Estaba pensando en el numero ${randomNum}`);
    }
   
}
adivina(prompt("Adivina el numero que estoy pensando: "));
