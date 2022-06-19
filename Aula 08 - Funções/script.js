/* function cumprimentar() {
    alert('Olá, usuário!')
}

function cumprimentar2(msg = 'Hello World') {
    alert(msg)
}

function criarParagrafo(txt) {
    document.write(`<p>${txt}</p>`)
}

criarParagrafo('Faça mais o que te faz feliz')
criarParagrafo('Quanto mais você aprende, mais você ganha')

function criarElementoHTML(txt, elemento = 'p') {
    document.write(`<${elemento}>${txt}</${elemento}>`)
}

criarElementoHTML('Olá, mundo', 'h1')
criarElementoHTML('Olá, mundo', 'h2')
criarElementoHTML('Olá, mundo', 'h3')
criarElementoHTML('Olá, mundo', 'h4')
criarElementoHTML('Olá, mundo', 'h5')
criarElementoHTML('Olá, mundo', 'h6')
criarElementoHTML('Faça mais o que te faz feliz', 'em')
criarElementoHTML('Olá, mundo') */

function somar (a, b) {
    return a + b
}
function subtrair(a, b) { //função anônima
    if (b>a){
        return b - a
} else {
    return a - b
}
}
let total = somar(20,32)
console.log(`total = ${total}`)
total = subtrair(20, 10)
console.log(`total = ${total}`)

function imc(peso, altura) {
    return peso / (altura ** 2)
}
let resultadoIMC = imc(100, 1.59)
console.log(resultadoIMC)
console.log(subtrair(8, 3))

/* ARROW FUNCTION 
Toda Arrow Function é anônima*/

let sub = (a,b) => {
    if (b>a){
        return b - a
} else {
    return a - b
}
}

let somar = (a,b) => a + b // Quando a arrow function tem apenas uma linha e ela retorna algo, podemos usar essa sintaxe
const resultado = sub(5,6)
const r = somar(5,6)
console.log(resultado)
console.log(r)




