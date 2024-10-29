function tabuada(){
    let txtNumeroTabuada = parseInt(window.document.querySelector('#txtNumTabuada').value);
    let btnVerTabuada = window.document.querySelector('#btnGerarTabuada')
    let visualizarTabuada = window.document.querySelector('#containerTabuada')

    if(isNaN(txtNumeroTabuada)){
        alert('Porfavor, insira um número valido!')
    }else{
        let i=1;
        while(i <= 10){
            let item = window.document.createElement('option');
            item.text = `${txtNumeroTabuada} X ${i} = ${txtNumeroTabuada * i}`
            visualizarTabuada.appendChild(item)
            i++
        }
    }
}