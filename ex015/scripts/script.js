function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var nascimento = document.getElementById('txtano')
    var res = document.getElementById('res')
    
    if (nascimento.value.length == 0 ||  Number(nascimento.value) > ano){
        window.alert('[ERROR]Verifique os dados e tente novamente.')

    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(nascimento.value)
        var genero = ''

        var img = document.createElement("img") //criando a tag pelo java script
        img.setAttribute = ('id', 'foto') // setando os atributos
        img.setAttribute = ("src", "")
        img.style.paddingTop = '15px'


        if(fsex[0].checked){
            genero = 'Homem'

            if(idade >= 0 && idade < 12){
                img.src = "imagens/menino.png"

            }else if(idade < 20){
                img.src = "imagens/adolescente-masculino.png"
                
            }else if(idade < 60){
                img.src = 'imagens/homem.png'
                
            }else if(idade < 100){
                img.src = 'imagens/idoso.png'
            }else{
                img.src = 'imagens/ramses.png'
            }

        } else if(fsex[1].checked){
            genero = 'Mulher'

            if(idade >= 0 && idade < 12){
                img.src = "imagens/menina.png"

            }else if(idade < 20){
                img.src = "imagens/adolescente-feminino.png"
                
            }else if(idade < 60){
                img.src = 'imagens/mulher.png'
                
            }else if(idade < 100){
                img.src = 'imagens/idosa.png'
            }else{
                img.src = 'imagens/ramses.png'
            }
        
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos <br/>`
        res.appendChild(img)
    }
}