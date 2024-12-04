function tabuada(){
    var numeroDigitado = window.document.querySelector('#numeroTabuada').value;
    var sessaoTabuada = window.document.getElementById('seltab')

    if(numeroDigitado.length == 0){
        alert("[ERRO] Digite o número que deseja ver a tabuada!")
    }else{
        var numConvertido = Number(numeroDigitado); // conversão do numero digitado que antes era uma string.
        var contador = 1;
        sessaoTabuada.innerHTML = '';
        while (contador <= 10){
            var item = document.createElement('option');
            item.text = `${numConvertido} X ${contador} = ${numConvertido * contador}`
            item.value = `sessaoTabuada${contador}`; // valores do option
            contador++
            sessaoTabuada.appendChild(item);
        }
    }
}