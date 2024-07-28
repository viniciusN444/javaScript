var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas.`)

if(hora < 12){
    console.log(`Ainda é de manhã, então, Bom diaa!`)
}else if(hora >= 12 && hora < 18){
    console.log(`Estamos no periodo da tarde, então, Boa Tardee!`)
}else{
    console.log(`Estamos no periodo da noite, então, Boa Noitee!`)
}

