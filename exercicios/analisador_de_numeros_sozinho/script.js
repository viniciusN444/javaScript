let numeroDigitado = window.document.querySelector("#numero").value;
let lista = window.document.querySelector("#lista");
let numeroGuardado = [];

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true;
    }else{
        return false;
    }
}

function inLista(n){
    if(lista.indexOf(Number(n)) != -1){
        return true;
    }else{
        return false;
    }
}

function adicionar(){
}