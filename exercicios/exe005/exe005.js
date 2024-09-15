function Carregar() {
    // Obtendo os elementos do DOM
    var mensagem = document.getElementById("msg");       // Elemento onde a mensagem será exibida
    var comprimentar = document.getElementById("comprimentar"); // Elemento onde a saudação será exibida
    var img = document.getElementById("imagem");        // Elemento onde a imagem de fundo será alterada
    
    // Criando um objeto Date para obter a hora atual
    var data = new Date();
    var hora = data.getHours();  // Obtendo a hora atual do sistema

    // Definindo o fundo e a mensagem de acordo com a hora
    if (hora >= 0 && hora < 6) {
        // Madrugada: 00:00 a 05:59
        comprimentar.innerHTML = "Boa madrugada!";  // Saudação para a madrugada
        mensagem.innerHTML = `Agora são ${hora} horas da madrugada.`; // Mensagem mostrando a hora
        img.src = '../imgs_exercicios/noite.png'; // Imagem para a madrugada
    } else if (hora >= 6 && hora < 12) {
        // Manhã: 06:00 a 11:59
        comprimentar.innerHTML = "Bom dia!";  // Saudação para a manhã
        mensagem.innerHTML = `Agora são ${hora} horas da manhã.`; // Mensagem mostrando a hora
        img.src = '../imgs_exercicios/img_manha (1).png'; // Imagem para a manhã
    } else if (hora >= 12 && hora < 19) {
        // Tarde: 12:00 a 18:59
        comprimentar.innerHTML = "Boa tarde!";  // Saudação para a tarde
        mensagem.innerHTML = `Agora são ${hora} horas da tarde.`; // Mensagem mostrando a hora
        img.src = '../imgs_exercicios/img_tarde (1).png'; // Imagem para a tarde
    } else {
        // Noite: 19:00 a 23:59
        comprimentar.innerHTML = "Boa noite!";  // Saudação para a noite
        mensagem.innerHTML = `Agora são ${hora} horas da noite.`; // Mensagem mostrando a hora
        img.src = '../imgs_exercicios/img_noite (1).png'; // Imagem para a noite
    }
}
