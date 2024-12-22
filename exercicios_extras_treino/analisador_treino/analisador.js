let numeroDigitado = window.document.querySelector('input#txtNumeroDigitado').value;
let lista = window.document.querySelector('select#listaDeNumeros');
let valoresDigitados = [];
let resultado = window.document.querySelector('div#resultado');

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100)
        return true
    else
        return false
}

function inLista(n, lista){
    if(lista.indexOf(Number(n)) != -1)
        return true
    else
        return false
}

function adicionar(){
    let numeroDigitado = window.document.querySelector('input#txtNumeroDigitado').value;

    if(isNumero(Number(numeroDigitado)) && !inLista(Number(numeroDigitado), valoresDigitados)){
        valoresDigitados.push(Number(numeroDigitado))   
        let item = document.createElement('option')
        item.text = `Valor ${Number(numeroDigitado)} adicionado`
        lista.appendChild(item)
        resultado.innerHTML = ''
    }else{
        alert("Valor invalido ou já encontrado na lista!")
    }
    window.document.querySelector('input#txtNumeroDigitado').value = ''
    window.document.querySelector('input#txtNumeroDigitado').focus()
}

function finalizar(){
    let total = valoresDigitados.length;
    let somaNumeros = 0;
    let maior = valoresDigitados[0];
    let menor = valoresDigitados[0];
    let media = 0;

    for(let pos in valoresDigitados){
        somaNumeros += valoresDigitados[pos]
        media = valoresDigitados[pos] / total
        if(valoresDigitados[pos] > maior){
            maior = valoresDigitados[pos]
        }else if(valoresDigitados[pos] < menor){
            menor = valoresDigitados[pos]
        }
    }

    resultado.innerHTML = ''
    resultado.innerHTML += `<p>Foram cadastrados ${Number(total)} números.</p>`
    resultado.innerHTML += `<p>A soma entre todos os valores cadastrados é de ${somaNumeros}.`
    resultado.innerHTML += `<p>A media entre os valores digitados é de: ${media.toFixed(2).replace('.', ',')}`
    resultado.innerHTML += `<p>O maior número digitado foi ${maior}`
    resultado.innerHTML += `<p>O menor número digitado foi: ${menor}`
}


