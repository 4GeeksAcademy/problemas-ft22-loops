//Escribe un bucle que calcule el factorial de un número dado.
function factorialNum(num) {
    factSum = num;
    for (let i = num - 1; i >= 1; i--) {
        factSum = factSum * i;      //5*4*3*2*1
    }
    return factSum;
}
console.log(factorialNum(parseInt(prompt('Dame un valor para calcular su factorial: '))));