function soma(n1 = 0, n2 = 0){ // assim como no python, podemos definir valores padrões caso não seja passado os parâmetros
    return n1 + n2
}

console.log(soma(2))

console.log(soma(n2 = 5))

// também é possível colocar uma função dentro de uma variável
let v = function(){
    return 'Olá'
}

console.log(v()) // tem que colocar os pararênteses depois da variável