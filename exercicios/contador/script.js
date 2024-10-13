function contar(){
    //Reuperação de dados do html
    var inicio = parseInt(document.querySelector("#inicio").value);
    var fim = parseInt(document.querySelector("#ifim").value);
    var passo = parseInt(document.querySelector("#ipasso").value)
    var resultado =  document.querySelector("#resultado");
    var contador;

    /*
        Verifica se o número digitado é um número ou não.
        Se os valores digitados forem realmente números, o resultado será true, pois o isNaN() verifica se o valor não é um número.
        Se os valores digitados não forem números, retornará false, pois, o valor digitado é número. 
    */
    if(isNaN(inicio) || isNaN(fim) || isNaN(passo)){
        alert("Porfavor, insira apenas números validos!");
        return;
    } 

    // Limpa resultados anteriores
    resultado.innerHTML = "Contagem: ";

    if(passo <= 0){
        alert("Considere o passo partindo de 1.")
    }

    // Contagem crescente
    if (inicio < fim) {
        for (contador = inicio; contador <= fim; contador += passo) {
            resultado.innerHTML += `${contador} `;
        }
    } else if (inicio > fim) {
        // Contagem decrescente
        for (contador = inicio; contador >= fim; contador -= passo) {
            resultado.innerHTML += `${contador} `;
        }        
    } else {
        alert("O valor de início e fim não pode ser o mesmo.");
    }

}