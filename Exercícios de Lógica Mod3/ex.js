/* EXERCICIO 9
let array = [5, 12, 2]
function recebe() {
    return array.sort()
}
recebe()
console.log */

/* EXERCICIO 10*/
/* number = []
num1 = parseInt(prompt('Digite o 1° valor'))
num2 = parseInt(prompt('Digite o 2° valor'))
num3 = parseInt(prompt('Digite o 3° valor'))
number.push(num1)
number.push(num2)
number.push(num3)
alert(number)
number.reverse()
alert(number) */
 

/*  EXERCICIO 10.1
const numeros = parseInt(prompt('Quantos números você deseja inserir?'))
number = []
for (let i = 0; i < numeros; i++ ) {
    const num1 = parseInt(prompt(`Digite o ${i + 1}° valor`))
    number.push(num1)
}
 alert(number)
number.reverse()
alert(number) */

/* EXERCÍCIO 11  (?)
let number = parseInt(prompt('Digite um número inteiro positivo: '))
let fibonacci = [0, 1, 1, 2, 3, 5, 8, 12 ]

fibonacci.unshift(number)
alert(fibonacci) 
---------------------------------------------------------------------
let fibonacci = [0, 1, 1, 2, 3, 5, 8, 12];

for (let i = 0; i < 5; i++){
    let number = parseInt(prompt('Digite um número inteiro positivo: '))
}

number.forEach(fibonacci => {
   alert(fibonacci * i)
});  

EXERCÍCIO 12 (???]) */


let tabuleiro = [[0, 1, 2], [3, 4, 5], [6, 7, 8]]
let desenharTabuleiro = function() {
    for(let linha = 0; linha < 3 ; linha++){
        for(let coluna = 0; coluna < 3; coluna++) {
    document.write("[" + tabuleiro[linha][coluna] + "]" );
}
novaLinha();
}
}

let novaLinha = function() {
    document.write("<br>")
}