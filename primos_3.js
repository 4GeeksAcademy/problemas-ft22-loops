function soloPrimosMenores(numero){
    for (let i = 2; i <= numero; i++){
        let esPrimo = true;
        for (let j = 2; j < i; j++){
            if (i % j == 0){
                esPrimo = false;
                break;
            }
            
        }
        if (esPrimo) {
            console.log(i);
        }
    }
}
soloPrimosMenores(19);