let num = [5,8,2,9,3]
num.push(1)
num.sort()
console.log(num)
console.log(`o vetor tem ${num.length} numeros de comprimento`)
console.log(`O primeiro valor do array é o ${num[0]}`)
let pos = num.indexOf(10);
if(pos==-1){
    console.log("Valor não encontrado!")
}else{
    console.log(`O valor 8 esta na posição ${pos}`)
}