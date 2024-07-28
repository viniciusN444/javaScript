var idade = 14;
console.log(`Sua idade é de ${idade} anos.`)
if(idade < 16){
    console.log("Não vota!")
}else{
    if(idade < 18 || idade > 65){
        console.log("Você pode votar!\nMas seu voto é opcional!")
    }else{
        if(idade >= 18){
            console.log("Voto obrigatorio!!")
        }
    }    
}