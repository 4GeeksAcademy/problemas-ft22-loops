//Escribe un programa que calcule el promedio de una lista de números ingresados por el usuario.
function calcularPromedio(listaNumeros) {
    let sum = 0;
    for (let i = 0; i < listaNumeros.length; i++){
        sum += listaNumeros[i]; 
    }
    let promedio = sum / listaNumeros.length;
    return promedio;
}


console.log(calcularPromedio([2, 4, 6, 8, 10])); // deberia ser promedio = 6