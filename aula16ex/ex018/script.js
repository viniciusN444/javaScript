let num = document.querySelector('input#fnum');
let lista = document.querySelector('#flista');
let res = document.querySelector('div#res');
let valores = [];

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <=100){
        return true;
    }else{
        return false;
    }
}

function inLista(n,l){
    if(l.indexOf(Number(n))!= -1){
        return true;
    }else{
        return false;
    }
}

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value)) //adicionando ao vetor --> valores = []
        let numAdicionado = document.createElement('option');
        numAdicionado.text = `Valor ${num.value} adicionado.`
        lista.appendChild(numAdicionado)
        res.innerHTML = "";
        
    }else{
        alert('Valor invalido ou já encontrado na lista.')
    }
    num.value = "";
    num.focus()
}

function finalizar(){
    if(valores.length == 0){
        alert('Adicione valores antes de finalizar!')
    }else{
        let total = valores.length 
        valores.sort()
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for(let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior){
                maior = valores[pos]
            } 
            if(valores[pos] < menor){
                menor = valores[pos]
            }
        }
        media = soma / total

        res.innerHTML = "";
        res.innerHTML += `<p>Ao todo temos ${total} números cadastrados.</p>`;
        res.innerHTML += `<p> O Maior valor informado foi o ${maior} </p>`
        res.innerHTML += `<p> O Menor valor informado foi o ${menor} </p>`
        res.innerHTML += `<p> Somando todos os valores deu ${soma} </p>`
        res.innerHTML += `<p> A media entre todos os valores e  ${media} </p>`
        


    }
}