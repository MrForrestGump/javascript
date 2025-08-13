let num = [2, 3, 6, 9]

// console.log(`Nosso vetor é o ${num}`)
console.log(num)

num[4] = 3 // se não houver a posição o js cria
console.log(num)

num.push(1) //adiciona ao final do vetor
console.log(num)
console.log(`Tamanho do vetor: ${num.length}`)

num.sort()
console.log(`Vetor ordendado ${num}`)    //ordena o vetor

// for(let i= 0; i < num.length; i++){
//     console.log(num[i])
// }

for(let i in num){
    console.log(num[i])
}

//procurando por um valor
console.log(`Qual a posição do 9? ${num.indexOf(9)}`)
//se não encontrar o valor ele retorna -1