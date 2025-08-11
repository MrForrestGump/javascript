function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data  = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()

    msg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos.`

    if(hora >= 0 && hora < 12){
        img.src = 'imagens/manha-redondo.png'
        msg.innerHTML += ' Bom dia!'
        document.body.style.background = "#e9cc6a"

    }else if(hora >= 12 && hora < 18){
        img.src = 'imagens/tarde-redondo.png'
        msg.innerHTML += ' Boa tarde!'
        document.body.style.background = '#b75524'
    }else{
        img.src = 'imagens/noite-redondo.png'
        msg.innerHTML += ' Boa noite!'
        document.body.style.background = "#3a190a"
    }

}