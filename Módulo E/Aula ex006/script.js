function gerarTabuada(){

    var num = document.getElementById('num')
    var txt = document.getElementById('txt')
    //txt.innerHTML = '<option>Fala cmg BB</option>'

    if(num.value.length == 0){
        window.alert('[ERRO] Digite o número para gerar a tabuada!!')
    } else{
        // Maneira principal
        // num = Number(num.value)
        // txt.innerHTML = ''
        // for(var i = 1; i <= 10; i++){
        //     txt.innerHTML += `<option>${num} x ${i} = ${num*i}</option>`
        // }

        // Outra Maneira de resolver
        let n = Number(num.value)
        let c = 1
        txt.innerHTML = ''
        while(c <= 10){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            txt.value = `txt${c}`
            txt.appendChild(item)
            c++
        }

    }
}