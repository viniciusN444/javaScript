/*
    Crie um array chamado numeros contendo os números: 3, 7, 12, 22, 5. Em seguida:

    Calcule a soma de todos os números no array.
    Exiba o resultado no console

*/

let numeros = [3,7,12,22,5];
let soma = 0;

for(let i = 0; i < numeros.length; i++){
    soma += numeros[i]
}

console.log(`A soma entre todos os numeros do vetor é de: ${soma}`)