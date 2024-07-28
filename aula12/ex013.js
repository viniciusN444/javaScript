var agora = new Date() // Istancia com o objeto Data

/*
    Este getDay() pega o dia da semana, só que tem um detalhe que precisa tomar uma atensão a mais!

    O getDay funciona assim:
        0 = Dominho
        1 = Segunda
        2 = Terça
        3 = Quarta
        4 = Quinta
        5 = Sexta
        6 = Sábado

    O getDay Pega pelo número da semana, correspondente aos números acima!    
*/
switch (agora.getDay()){
    case 0:
        console.log("Domingo")
        break;
    case 1:
        console.log("Segunda-Feira")
        break;
    case 2:
        console.log("Terça-Feira")
        break;
    case 3:
        console.log("Quarta-Feira")
        break;
    case 4:
        console.log("Quinta-Feira")
        break;
    case 5:
        console.log("Sexta-Feira")
        break;
    case 6:
        console.log("Sábado")
        break;
    default:
        console.log("Erro")  
        break;      
}