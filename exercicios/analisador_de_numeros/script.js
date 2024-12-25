let listaSelect = window.document.querySelector('#numerosAdicionados');
let resultado = window.document.querySelector('#resultado');
let valoresAdicionados = [];

// Função para verificar se o número está entre 1 e 100
function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true;
    }else{
        return false;
    }
}

// Função para verificar se o número já foi adicionado à lista
function inLista(n, lista){
    if(lista.indexOf(n) != -1){
        return true;
    }else{
        return false;
    }
}

function adicionar(){
    // Captura o valor digitado dentro da função, para garantir que está atual
    let numeroDigitado = window.document.querySelector('#numero').value;

    // Verifica se o número digitado é válido e não está na lista
    if(isNumero(numeroDigitado) && !inLista(Number(numeroDigitado), valoresAdicionados)){
        // Adiciona o número à lista de valores
        valoresAdicionados.push(Number(numeroDigitado));

        // Cria um novo item na lista de seleção
        let valor = document.createElement('option');
        valor.text = `Valor ${numeroDigitado} adicionado.`;
        listaSelect.appendChild(valor);
    } else {
        // Caso o número seja inválido ou já esteja na lista
        alert('Número inválido ou já adicionado!');
    }
    window.document.querySelector('#numero').value = '';
    window.document.querySelector('#numero').focus()
    resultado.innerHTML = "";
}

function finalizar(){
    let total = valoresAdicionados.length;
    let maiorNumero = valoresAdicionados[0]
    let menorNumero = valoresAdicionados[0]
    let soma = 0
    let media = 0

    for(let pos in valoresAdicionados){
        soma += valoresAdicionados[pos]
        media += valoresAdicionados[pos] / total

        if(valoresAdicionados[pos] > maiorNumero){
            maiorNumero = valoresAdicionados[pos]
        }else if(valoresAdicionados[pos] < menorNumero){
            menorNumero = valoresAdicionados[pos]
        }
    }

    resultado.innerHTML += `<p>Foram cadastrados ${total} números.</p>`
    resultado.innerHTML += `<p>O maior número digitado é o: ${maiorNumero}</p>`
    resultado.innerHTML += `<p>O menor número digitado é o: ${menorNumero}</p>`
    resultado.innerHTML += `<p>A soma entre todos os valores digitados é de: ${soma}</p>`
    resultado.innerHTML += `<p>A media entre todos os valores digitados é de: ${media.toFixed(2)}</p>`
}

