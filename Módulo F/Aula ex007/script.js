let num = document.getElementById('num')
let lista = document.querySelector('select#txt')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function inLista(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true
    } else{
        return false
    }
}

function adicionar(){

    if(isNumero(num.value) && !inLista(num.value, valores)){
        n = Number(num.value)
        valores.push(n)
        let item = document.createElement('option')
        item.text = `Valor ${n} adicionado `
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = ''      //Apaga o que está escrito no input
    num.focus()         //Faz com que toda vez que clicarmos em adicionar entremos pra escrever automaticamente na caixa de input
}

function finalizar(){
    if(valores.length == 0){
        window.alert('Adicionar valores na lista antes de finalizar')
    } else {
        
        res.innerHTML += `<p>Ao todo, temos ${valores.length} números cadastrados</p>`
        
        let menor = valores[0] 
        let maior = valores[0]
        let soma = valores[0]

        for(let i = 1; i < valores.length; i++ ){

            if(menor > valores[i]){
                menor = valores[i]
            }

            if(maior < valores[i]){
                maior = valores[i]
            }

            soma += valores[i]
        }

        res.innerHTML += `<p>O MAIOR valor informado foi ${maior}</p>`
        res.innerHTML += `<p>O MENOR valor informado foi ${menor}</p>`

        res.innerHTML += `<p>Somando todos os valores, temos ${soma}</p>`
        
        res.innerHTML += `<p>A média dos valores digitados é ${soma/valores.length}</p>`

    }
}