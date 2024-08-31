function Verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var anoNasc = window.document.getElementById("txtAno");
    var resultado = window.document.getElementById("res");
    
    // Verifica se o campo de ano de nascimento está vazio ou inválido
    if (anoNasc.value.length === 0 || Number(anoNasc.value) > ano) {
        window.alert("[ERRO] Verifique os dados e tente novamente!");
        return; // Saia da função para evitar processamento adicional
    }

    var fsex = document.getElementsByName('redsex');
    var idade = ano - Number(anoNasc.value);
    var genero = '';
    var img = document.createElement('img');
    img.setAttribute('id', 'foto');

    if (fsex[0].checked) {
        genero = "Homem";
        if (idade < 10) {
            // Criança
            img.setAttribute('src', 'img/circle-bebe-man.png');
        } else if (idade < 21) {
            // Jovem
            img.setAttribute('src', 'img/circle-young-man.png');
        } else if (idade < 50) {
            // Adulto
            img.setAttribute('src', 'img/circle-adulto-man.png');
        } else {
            // Idoso
            img.setAttribute('src', 'img/circle-idoso.png');
        }
    } else if (fsex[1].checked) {
        genero = "Mulher";
        if (idade < 10) {
            // Criança
            img.setAttribute('src', 'img/circle-bebe-woman.png');
        } else if (idade < 21) {
            // Jovem
            img.setAttribute('src', 'img/circle-young-woman.png');
        } else if (idade < 50) {
            // Adulto
            img.setAttribute('src', 'img/circle-adulto-woman.png');
        } else {
            // Idosa
            img.setAttribute('src', 'img/circle-idosa.png');
        }
    }
    // Exibe o resultado e a imagem
    resultado.style.textAlign = 'center';
    img.style.display = 'block';          // Faz com que a imagem seja um bloco (para permitir o margin auto)
    img.style.margin = 'auto';  
    resultado.innerHTML = `Detectamos ${genero} com ${idade} anos`;
    resultado.appendChild(img);

}
