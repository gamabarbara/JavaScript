/* MÉTODOS DE ARRAYS 

nums.forEach((x) =>{ função como parâmetro para outra função
    console.log(x)
})
 O For Each é uma função que não retorna nenhum valor. 

nums.forEach((x) => {
    document.write(`<p>${x}</p>`)
})*/

/* O Map nos retorna algum valor. O map executa uma função para cada item do array, gerando um novo array com os valores modificados */

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const nomes = ['Amanda', 'André', 'Andrew', 'Antonio', 'Barbara', 'Carolina', 'Bruno', 'Claudia', 'Debora']
let novoArray = nums.map(x => {
    return x ** 2
})
 let numerosPares = nums.filter(function (x) { // ele pede uma função que irá retornar um valor booleano
    return x % 2 == 0
 })

 let numeroMaiorQue5 = nums.find((numero) => { // ele pede uma função que retorna um valor booleano e ele retorna um valor(O primeiro indice que for encontrado de acordo com o parâmetro)
     return numero > 5
 })

 let indiceNumeroMaiorQue5 = nums.findIndex(numero => { // ele retorna o indice de um elemento, o primeiro que for encontrado
     return numero > 5
 })

let nomesComCaracteresAcimaDe6 = nomes.filter(nomes =>{ // string
        return nomes.length > 6
    })

let existeAlgumNomeCom8Caracteres = nomes.some(function(nome) { // retorna valor booleano. Se o parâmetro for encontrado ao menos uma vez, ele já retorna verdadeiro
    return nome.length == 8
})

let todosOsNomesPossuem8Caracteres = nomes.every(nomes => { // retorna valor booleano. Retorna falso se apenas um não satisfazer a condição. 
    return nomes.length >= 7
})

let novo = nums.concat([20, 30, 40]) // passar um array como parâmetro e ele adiciona esse array no final do outro array. Ele gera um novo array com os novos valores

console.log(nums.join('*')) // se não colocar parâmetro, ele retorna os elementos da array separados por vírgula transformados em string. O que usar como parâmetro ele usa para separar os itens da array

console.log(nums.includes(8)) // se o valor usado no parâmetro for encontrado na array, ele retorna true.

console.log(nums)
nums.pop() // remove o ultimo elemento do array
console.log(nums)

nums.shift() // remove o primeiro elemento do array
console.log(nums)

nums.unshift(1) // adiciona valores no inicio do array
console.log(nums)

nums.push(10) // adiciona o valor ao ultimo elemento do array
console.log(nums)
 
console.log(nums.reverse()) // pega o array e inverte as posições

console.log(nums.slice(2,5)) // ele recorta o array.Parametro inicio e final. Se colocar -1 ele retorna o ultimo item. numero negativo, da direita para a esquerda

console.log(nums.splice()) // Recebe dois parâmetros. O primeiro é o indice de onde começar a remover os elementos. O segundo é a quantidade de elementos que você deseja retornar no novo array

nums.reduce((acumulador, valorAtual) => {
    console.log(`acumulador = ${acumulador}, valorAtual = ${valorAtual}`)
    return acumulador + valorAtual
}) // pega os valores do array e transforma em uma coisa só. A função que usamos pede dois parâmetros. O primeiro é o acumulador(primeiro elemento do array), o segundo é o valor atual

let a = nomes
.filter(nome => nome.length > 6)
.map(nome => nome.length)
.map(x => x ** 3)
.map(x => x * 9)
.filter(x => x % 2 == 0)
.reverse()
.reduce((acc, atual) => acc * atual)

console.log(a)