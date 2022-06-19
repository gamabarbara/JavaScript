alert('Monte seu triângulo!')
ladoa = parseInt(prompt('Informe o 1° valor!'))
ladob = parseInt(prompt('Informe o 2° valor!'))
ladoc = parseInt(prompt('Informe o 3° valor!'))

if (ladoa == ladob && ladob== ladoc) {
    alert('Esse é um triângulo EQUILÁTERO!')
} else if (ladoa == ladob && ladob!= ladoc) {
    alert('Esse é um triângulo ISÓCELES!')
} else {
    alert('Esse é um triângulo ESCALENO!')
}


alert('Vou descobrir qual o maior número!')
const n1 = parseFloat(prompt('Digite o 1° número'))
const n2 = parseFloat(prompt('Digite o 2° número'))
const n3 = parseFloat(prompt('Digite o 3° número'))

if (n1>=n2 && n1>= n3) {
    alert(`O maior número é o ${n1}`)
} else if (n2>=n1 && n2>=n3) {
    alert(`O maior número é o ${n2}`)
} else {
    alert(`O maior número é o ${n3}`)
} 


alert('Vamos brincar?')
let x = parseInt(prompt('Digite um número!'))
let y = parseInt(prompt('Agora digite outro número!'))
let z = x
let a = y

alert(`Os números escolhidos foram ${x} e ${y} correto?`)
alert('Agora vou invertê-los!')
alert(`Seus números invertidos ficam ${a} e ${z}!`)
