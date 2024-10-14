function contar(){
    let inicio = document.querySelector("#txti").value;
    let fim =  document.querySelector("#txtf").value;
    let passo = document.querySelector("#txtp").value;
    let resultado = document.querySelector("#resultado")
    let contador;

    if(inicio.length == 0 || fim.length == 0 || passo.length == 0){
        alert("[Erro] Faltam dados!")
    }else{
        resultado.innerHTML = "Contando: </br>"
        let i = Number(inicio)
        let f = Number(fim)
        let p = Number(passo)

        if(p <= 0){
            alert("Passo invalido! Considerando o passo a 1.")
            p = 1;
        }

        if(i < f){
            for(contador = i; contador <= f; contador+=p){
                resultado.innerHTML += `${contador } \u{1f449} `;
            }
        }else{
            for(contador = i; contador >= f; contador-=p){
                resultado.innerHTML += `${contador } \u{1f449} `;    
            }
        }
        resultado.innerHTML += `\u{1f3c1}`
    }
}