let lista = document.querySelector('#lista');
let resultado = document.querySelector('#resultado');
let valoresAdicionados = [];

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100)
        return true
    else 
        return false
}

function inLista(n, lista){
    if(lista.indexOf(Number(n)) != -1){
        return true
    }else
        return false
}

function adicionar(){
    let numeroDigitado = document.querySelector('#numero')
    let numero = Number(numeroDigitado.value)

    if(isNumero(numero) && !inLista(numero, valoresAdicionados)){
        valoresAdicionados.push(numero)
        let item = document.createElement('option')
        item.text = `Valor ${numero} adicionado`
        lista.appendChild(item)
    }else{
        alert('Valor invalido ou já encontrado na lista.')
    }
    document.querySelector('#numero').value = ""
    document.querySelector('#numero').focus()
    resultado.innerHTML = ""
}

function finalizar(){
    let total = valoresAdicionados.length
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
    resultado.innerHTML += `<p>Maior número cadastrado foi: ${maiorNumero}</p>`
    resultado.innerHTML += `<p>Menor número cadastrado foi: ${menorNumero}</p>`
    resultado.innerHTML += `<p>A soma entre os valores digitados foi de: ${soma}</p>`
    resultado.innerHTML += `<p>A media entre os valores digitados foi: ${media.toFixed(2)}</p>`
}