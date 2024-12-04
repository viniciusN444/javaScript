function tabuada(){
    let numeroDigitado = window.document.querySelector('#txtNumero').value;
    let tabuada = window.document.querySelector('#sessaoTabuada')

    if(numeroDigitado.length == 0){
        alert("[ERRO] Digite o número que deseja ver a tabuada.")
    }else{
        let numConvertido = Number(numeroDigitado)
        tabuada.innerHTML = '';
        for(var c = 1; c <= 10; c++){
            let item = window.document.createElement('option');
            item.text = `${numConvertido} X ${c} = ${numConvertido * c}`
            item.value = `${c}`
            tabuada.appendChild(item)
            console.log(item)
        }
    }
}