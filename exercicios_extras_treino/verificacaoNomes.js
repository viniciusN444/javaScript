/*
    Crie um array chamado nomes com os seguintes valores: ["Ana", "João", "Carlos", "Maria", "Pedro"].

    Verifique se o nome "Maria" está presente no array.
    Caso esteja, exiba a mensagem: "Maria foi encontrada!"
    Caso contrário, exiba: "Maria não está na lista."
*/

let nomes = ["Ana", "João", "Carlos", "Maria", "Pedro"];
let mensagemFinal = "";

/*
    Jeito mais facil de fazer abaixo: 
    
    if (nomes.includes("Maria")) {
    mensagemFinal = "Maria foi encontrada.";
    } else {
        mensagemFinal = "Maria não está na lista.";
    }

*/

if(nomes.indexOf("Maria") !== -1){
    mensagemFinal = "Maria foi encontrada.";
    
}else{  
    mensagemFinal = "Maria não está na lista.";
}

console.log(mensagemFinal);
