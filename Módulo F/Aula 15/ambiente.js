let num = []
console.log(num)

let num1 = [5, 8, 2, 9, 3]
console.log(num1)
console.log(`Nosso vetor é ${num1}`)
console.log(`O primeiro valor do nosso vetor é: ${num1[0]}`)

//Para adicionar um valor
num1[5] = 7
console.log(num1)
//ou
num1.push(1)
console.log(num1)

console.log(`O tamanho do vetor é ${num1.length}`)

//Para colocar o vetor em ordem crescente dos valores inseridos até o momento
console.log(num1.sort())

console.log('Percurso para exibição do vetor:')
for (let pos=0; pos<num1.length; pos++){
    console.log(`Na posição ${pos} contêm o valor ${num1[pos]}`)
}

console.log('Utilizando o for each')
for(let pos in num1){
    console.log(`Na posição ${pos} contêm o valor ${num1[pos]}`)
}

console.log('Buscando valores no Vetor')
console.log('O valor 7 está na posição ' + num1.indexOf(7))  //Utilizamos o indexOf() para nos retornar o index do valor que colocamos de parâmetro
console.log(num1.indexOf(10))                                //Quando o valor não existir no vetor é retornado -1