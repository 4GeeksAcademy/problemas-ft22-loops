//Define una función que determine si una palabra es un palíndromo (se lee igual al revés).
/*radar
oso
ala
reconocer
somos
rayar
*/
function palindromo(palabra) {
    //primero duplicamos la palabra y la ponemos al reves
    let reves = "";
    for (i = palabra.length - 1; i >= 0; i--){
        reves = reves + palabra[i];  // concatenar caracteres
    }
    if (palabra === reves) {
        console.log(`La palabra ${palabra} es un palindromo!`);
    }
    else console.log(`La palabra ${palabra} no es un palindromo :(`)
}

palindromo('oso');