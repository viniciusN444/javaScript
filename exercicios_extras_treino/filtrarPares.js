/*
    Crie um array chamado numeros contendo os seguintes números: [10, 15, 20, 25, 30, 35, 40]. Em seguida:

    Filtre apenas os números pares do array e armazene-os em um novo array chamado pares.
    Exiba o array pares no console.

*/

let numeros = [10, 15, 20, 25, 30, 35, 40];
let pares = []; // Array para armazenar os números pares

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 == 0) {
        pares.push(numeros[i]); // Adiciona o número par ao array
    }
}

// Exibe os números pares
if (pares.length > 0) {
    console.log(`Esses são os números pares do array: ${pares}`);
} else {
    console.log("Não existem números pares no array.");
}
