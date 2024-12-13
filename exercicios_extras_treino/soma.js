//Exercício 1: Teste a soma de diferentes vetores de números.
let vet01 = [5,5,7,10];
let vet02 = [10,11,56];
let vet03 = [7,7];
let soma = 0;

for(let c = 0; c < vet01.length; c++){
    soma += vet01[c]
}

for(let c = 0; c < vet02.length; c++ ){
    soma += vet02[c];
}

for(let c = 0; c < vet03.length; c++){
    soma += vet03[c];
}

let resultado = `A soma entre todos os vetores é de ${soma}`
console.log(resultado)