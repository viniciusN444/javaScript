/* Recuperando os dados do html, criando variaveis globais, onde estas variaveis funcionam em todo o codigo, pois ela foi declarada de modo global. */
let num = document.querySelector('input#fnum');
let lista = document.querySelector('select#flista');
let res = document.querySelector('div#res');
let valores = [];

/* Verificando se o numero digitado é realmente um numero, caso contrario, a função de adicionar o numero ao vetor não funcionará. */

/* Lembrando: essa função tem parametros, e toda vez que é chamada tem que passar o valor para o parametro. */
function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true;
    }else{
        return false;
    }
}


/*
    Verificando se o número esta na lista.

    Se dentro da lista o numero digitado for diferente de -1 (este -1, significa que o valor não foi encontrado) retorne verdadeiro (true), senão retorne falso (false)
*/
function inLista(n,l){
    if(l.indexOf(Number(n)) != -1){
        return true;
    }else{
        return false;
    }
}

function adicionar(){
    /* Se o numero digitado for realmente um numero E o numero digitado ainda NÃO(!) estiver na lista (esta lista é o vetor, onde ficará responsavel por guardar os valores numericos digitados) ele guardará o numero no vetor valores.
    */
    if(isNumero(num.value) && !inLista(num.value, valores)){
        /* Se tiver tudo certo, se o num for realmente um numero e se este num não estiver na lista, então vai ser adicionado ao vetor */
        valores.push(Number(num.value));
        /* 
        Apos adicionar no vetor, criamos um option pois ele ira aparecer dentro do select.
            apos criarmos o option com o nome item, pegamos o valor do option araves da propiedade text e adiciona na lista.
            o ista.appendChild(item) e para criar o elemento dentro da lista que esta responsavel pelo select.
        */
        let item = document.createElement('option')
        item.text = `Número ${num.value} adicionado`
        lista.appendChild(item)
        /* Apos adiconar o numero e o finalizar estiver aberto o res.innerHTML = '' ficara responsavel por apagar as respostas do resultado ate que finalize novamente para ver o resultado de novo.*/
        res.innerHTML = ""
    }else{
        alert('Valor invalido ou já encontrado na lista');
    }
    /* Dando certo ou errado o campo de input vai ser limpado e receberá o foco(onde automaticamente e clicado no input pronto para ser digitado novamente, sem a necessidade do click manualmente) */
    num.value = ""
    num.focus();
}

function finalizar(){
    /* Se for clicado nem nenhum valor na lista retornará um alert de erro */

    if(valores.length == 0){
        alert('Insira valores numericos entre 1 a 100 antes de finalizar!')
    }else{
        let tot = valores.length; // reponsavel pelo tamanho do vetor
        let maior = valores[0]; // maior numero do vetor
        let menor = valores[0]; // menor numero do vetor
        let media = 0; // media  dos valores do vetor
        let soma = 0; // soma dos valores vetor

        /* 
            for() é lido: Para 
            in é lido: dentro
            então fica assim: PARA cada posição DENTRO do vetor [valores] retorna a soma dos valores com o (soma+=valores[pos] e a mesma coisa para media so que e divisao com o tamanho do array.)
        */
        for(let pos in valores){
            soma += valores[pos]
            media += soma / tot


            /* valores do vetor for o maior numero guardara dentro da varialvel maior caso for o menor numero guardara da varialvel menor. (aqui o que esta dando o direcionamento e os sinais < e >) */
            if(valores[pos] > maior){
                maior = valores[pos]
            }else if(valores[pos] < menor){
                menor = valores[pos]
            }
        }

        // Mostrando resultados
        res.innerHTML = ""
        res.innerHTML += `<p>O total de numeros cadastrados foram de ${tot} numeros.</p>`
        res.innerHTML += `<p>O maior valor informado foi: ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado foi: ${menor}</p>`
        res.innerHTML += `<p>Somando todos os valores o resultado e de: ${soma}</p>`
        res.innerHTML += `<p>A media entre todos os valores e de: ${media}</p>`
    }
}