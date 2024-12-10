function parImpar(numero){
    if(numero % 2 == 0){
        return 'Par';
    }else{
        return 'Impar';
    }
}

let resultado = parImpar(10)
console.log(resultado)