let numeros = []

let lista  = document.getElementById('lista') 
let res = document.getElementById('res')
let numtxt = document.getElementById('num')


function isNumero(n){
    if(n > 0 && n <101){
        return true

    }else{
        return false
    }
}

function inLista(n, l){
    if (l.indexOf(Number(n)) != -1 ){
        return true
    }else{
        return false
    }
}

function somarLista(l){
    let resultado = 0
    for(let i = 0; i < l.length; i++){
        resultado += l[i]
    }
    return resultado
}

function medialista(l){
    let media = 0
    for(let i = 0; i < l.length; i++){
        media += l[i]
    }
    console.log(media)
    return media/l.length
}

function listar(lista, n){
    let item = document.createElement('option')
    item.text = `Valor ${n} adicionado.`
    lista.appendChild(item)
}


function adicionar(){
    res.innerHTML = ''
    if(isNumero(numtxt.value) && !inLista(numtxt.value, numeros)){
        numeros.push(Number(numtxt.value))
        listar(lista, numtxt.value)
    } else {
        alert('Valor inválido ou já encontrado na lista.')
    }
}

function descrever(){
    if(numeros.length == 0){
        alert('Adicione números antes de finalizar')
    }else{
        numeros.sort()
        res.innerHTML = ''
        res.innerHTML = `<p>Ao todo, temos ${numeros.length} números cadastrados </p>
        <p>O maior valor informado foi ${numeros[numeros.length-1]}</p>
        <p>O menor valor informado foi ${numeros[0]}</p>
        <p>Somando todos os valoresm, temos ${somarLista(numeros)}</p>
        <p>A média é dos valores digitados é ${medialista(numeros)}</p>`
    }
}