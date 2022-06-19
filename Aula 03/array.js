/* const array = [5, 6, 7, 10, 8]
let soma = 0
for (let i=0; i < array.length; i++) {
    const nota = (array[i])
    soma += nota
}

const media = soma / array.length
console.log(`Sua média é ${media.toFixed(2)}`) */

const array = []
let soma = 0
const qtdNotas = parseInt(prompt('Quantas notas você recebeu?'))
for (let i=0; i < qtdNotas; i++) {
    const nota = parseFloat(prompt(`Insira a ${i + 1}° nota`))
    soma += nota
}

const media = soma / qtdNotas
alert(`Sua média é ${media.toFixed(2)}`)