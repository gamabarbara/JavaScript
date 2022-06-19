let nota1 = parseFloat(prompt('Informe a 1° nota'))
let nota2 = parseFloat(prompt('Informe a 2° nota'))
let nota3 = parseFloat(prompt('Informe a 3° nota'))
let qtdFaltas = parseInt(prompt('Informe sua quantidade de faltas'))

const media = (nota1 + nota2 + nota3) /3
const alunoPassou = media > 7
alert('Sua media é ' + media)

if (media > 7 && qtdFaltas <= 3) {
  alert('Parabéns! Você passou acima da média')
} else if (media === 7 || qtdFaltas<= 3) {
   alert('Você quase não passou!')
} else {
  alert('Infelizmente você não passou!')
}
