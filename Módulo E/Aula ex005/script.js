function contar(){

    let inicio = document.getElementById("inicio")
    let fim = document.getElementById("fim")
    let passo = document.getElementById("passo")
    let res = document.querySelector('div#res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('[ERRO] Faltam dados!!')
    }
    else{
        inicio = Number(inicio.value)
        fim = Number(fim.value)
        passo = Number(passo.value)

        if(passo == 0){
            window.alert('[ERRO] O Passo não pode ser 0, considerando PASSO 1')
            res.innerHTML = 'Impossível contar'
            passo = 1
        }

        res.innerHTML = 'Contando:<br>'

        //contagem regressiva
        if(fim > inicio && passo > 0){
            for(var i = inicio; i <= fim; i += passo){
                res.innerHTML += ` ${i} \u{1F449}`
            }
        } else{
            //contagem regressiva
            if(fim < inicio && passo > 0){
                for(var i = inicio; i >= fim; i -= passo){
                    res.innerHTML += ` ${i} \u{1F449}`
                }   
            } else{
                for(var i = inicio; i >= fim; i += passo){
                    res.innerHTML += ` ${i} \u{1F449}`
                }
            }
        }

        res.innerHTML += `\u{1F3C1}`

    }
}