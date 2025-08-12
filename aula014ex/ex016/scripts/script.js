function contar(){
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var res = document.getElementById('res')

    inicio = Number(inicio.value)
    fim = Number(fim.value)
    passo = Number(passo.value)

    res.innerHTML = ''

    if(fim < inicio || passo <= 0){
        alert('Números inválidos, tente novamente')
    }else{
        for(var i = inicio; i < fim; i += passo){
            res.innerHTML += `${i} 👉🏽 `
        }
        res.innerHTML += `🏁`
    }
    
}