function verificar(){
    var data = new Date
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if(fano.value.lenght == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente')
    }
    else{
        //window.alert('tudo ok')
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        //res.innerHTML = `Idade Calculada: ${idade}`
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            gênero = 'Homem'
            if (idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src', 'Imagens/foto-bebe-m.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'Imagens/foto-jovem-m.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'Imagens/foto-adulto-m.png')
            } else {
                //Idoso
                img.setAttribute('src', 'Imagens/foto-idoso-m.png')
            }
        }
        else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src', 'Imagens/foto-bebe-f.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'Imagens/foto-jovem-f.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'Imagens/foto-adulto-f.png')
            } else {
                //Idoso
                img.setAttribute('src', 'Imagens/foto-idoso-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Dectamos ${gênero} com ${idade} anos`
        res.appendChild(img)
    }
}