function soma(n1, n2){
    return n1 + n2
}

function soma2(n1=0, n2=0){     //dessa maneira impedimos que um dos parâmetros seja NaN e retorne NaN
    return n1 + n2
}


console.log(soma(5, 7))
console.log(soma(5))        //O segundo parâmetro fica como NaN(indefinido), retornando NaN

console.log(soma2(5))
