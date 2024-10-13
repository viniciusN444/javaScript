function contar() {
    var inicio = parseInt(window.document.querySelector("#inicio").value);
    var fim = parseInt(window.document.querySelector("#ifim").value);
    var passo = parseInt(window.document.querySelector("#ipasso").value);
    var resultado = window.document.querySelector("#resultado");
    var contador;
    
    // Verifica se os valores são números válidos
    if (isNaN(inicio) || isNaN(fim) || isNaN(passo)) {
        alert("Por favor, insira todos os valores.");
        return;   
    }

    // Limpa resultados anteriores
    resultado.innerHTML = "Contagem: ";

    // Verifica se o passo é válido
    if (passo <= 0) {
        alert("O passo deve ser um número positivo.");
        return;
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
