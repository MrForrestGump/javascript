function gerarTabuada(){
    let numero = document.getElementById('numero')
    let tabuada = document.getElementById('tabuada')


    if(numero.value.length == 0){
        alert('Insira um número.')
        
    }else{
        numero = Number(numero.value)
        tabuada.innerHTML = ''
        
        for(let i = 1; i < 11; i++){
            let item = document.createElement('option')
            item.text = `${i} x ${numero} = ${i*numero}`
            tabuada.appendChild(item)
        }
    }
    
    
}