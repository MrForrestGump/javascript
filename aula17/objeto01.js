let amigo = {nome: 'Lucas', sexo: 'Masculino', peso: 73.5}

console.log(amigo)
console.log(amigo.nome)

function engordar(p){
    console.log('Engordou')
    this.peso += 10
    console.log(`agora pesa ${p.peso}Kg`)
}

engordar(amigo) 