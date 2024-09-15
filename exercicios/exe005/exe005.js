function Carregar(){
    var mensagem = document.getElementById("msg")
    var comprimentar = document.getElementById("comprimentar")
    var img = document.getElementById("imagem")
    var data =  new Date();
    var hora = data.getHours()
    
   if (hora >= 0){
    comprimentar.innerHTML = "Boa madrugada!"
    mensagem.innerHTML = `Agora são ${hora} horas da madruga`;
    img.src = '../imgs_exercicios/noite (1).png'
   } else if (hora >= 6 && hora <= 12){
    comprimentar.innerHTML = "Bom diaa!"
    mensagem.innerHTML = `Agora são ${hora} horas da manhã`;
    img.src = '../imgs_exercicios/img_manha (1).png'
   }if(hora <= 18){
    comprimentar.innerHTML = "Boa Tarde"
    mensagem.innerHTML = `Agora são ${hora} horas da tarde!`
    img.src = '../imgs_exercicios/img_tarde (1).png'
   }else{
    comprimentar.innerHTML = "Boa Noite!"
    mensagem.innerHTML = `Agora são ${hora} horas da noite!`
    img.src = '../imgs_exercicios/img_noite (1).png'
   }
}