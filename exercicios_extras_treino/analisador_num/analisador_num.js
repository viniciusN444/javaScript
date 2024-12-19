// Declarando variáveis globais
let lista = document.querySelector('select#lista')
let valoresDigitados = []
let resultado = document.querySelector('div#resultado')

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function adicionar(){
    // Obtendo o valor do input dentro da função
    let num = document.querySelector('input#numDigitado').value
    let numero = Number(num)  // Convertendo o valor para número
    
    // Verificando se o número é válido e não está na lista
    if(isNumero(numero) && !inLista(numero, valoresDigitados)){
        valoresDigitados.push(numero) // Adicionando à lista
        let item = document.createElement('option') // Criando novo item para a lista
        item.text = `Valor ${numero} adicionado`
        lista.appendChild(item) // Adicionando o item à lista
    } else {
        alert('Número inválido ou já adicionado!')
    }
    
    // Limpar o campo de input após adicionar o número
    document.querySelector('input#numDigitado').value = ''
    document.querySelector('input#numDigitado').focus()
    resultado.innerHTML = ''
}

function finalizar(){
    if(valoresDigitados.length == 0){
        alert('Insira números entre 1 até 100 antes de finalizar.')
    } else {
        let total = valoresDigitados.length
        let maior = valoresDigitados[0]
        let menor = valoresDigitados[0]
        let soma = 0
        let media = 0

        for(let pos in valoresDigitados){
            soma += valoresDigitados[pos]
            media += valoresDigitados[pos] / total

            if(valoresDigitados[pos] > maior){
                maior = valoresDigitados[pos]
            }else if(valoresDigitados[pos] < menor){
                menor = valoresDigitados[pos]
            }
        }
        // Limpar conteúdo anterior
        resultado.innerHTML = '' // Isso garante que o conteúdo anterior seja removido
        resultado.innerHTML += `<p>Total de números cadastrados: ${total}</p>`
        resultado.innerHTML += `<p>Maior número digitado foi: ${maior}</p>`
        resultado.innerHTML += `<p>Menor número digitado foi: ${menor}</p>`
        resultado.innerHTML += `<p>Soma dos valores digitado foi de: ${soma}</p>`
        resultado.innerHTML += `<p>Media dos valores digitado foi de: ${media}</p>`
    }
}



