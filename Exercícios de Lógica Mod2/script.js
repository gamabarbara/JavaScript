
/* EXERCÍCIO 11
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
*/    
/* EXERCÍCIO 12
const number = parseFloat(prompt('Digite o 1° número'))

if(number > 0) {
    alert('Seu número é positivo')
} else if (number < 0) {
    alert('Seu número é negativo')
} else {
    alert('Seu número é nulo')
} 
*/
/* EXERCÍCIO 13
const number = parseFloat(prompt('Digite um número'))
if (number % 2 == 0) {
    alert('Seu número é par')
} else {
    alert('Seu número é ímpar')
} 
*/

/* EXERCÍCIO 14
const lin = prompt('Digite sua linguagem de Programação favorita')
switch(lin){
    case 'JavaScript':
alert(`Sua linguagem de Programação favorita é ${lin}`)
break
    case 'Phyton':
alert(`Sua linguagem de Programação favorita é ${lin}`)
break
    case 'C':
alert(`Sua linguagem de Programação favorita é ${lin}`)
break
    case 'Java':
alert(`Sua linguagem de Programação favorita é ${lin}`)
break
    case 'PHP':
alert(`Sua linguagem de Programação favorita é ${lin}`)
break
default:
alert('Sua linguagem de programação favorita é outra')
break
}  */

/* EXERCÍCIO 15
const car = (prompt('Qual carro você deseja comprar?'))
switch(car) {
    case 'Hatch':
alert('Compra efetuada com sucesso')
break
    case 'Sedans':
confirm('Tem certeza que não prefere este modelo?')
break
    case 'Motocicletas':
confirm('Tem certeza que não prefere este modelo?`')
break
    case 'Caminhonetes':
confirm('Tem certeza que não prefere este modelo?')
break
default:
alert('Não trabalhamos com este tipo de automóvel aqui')
break
} */

/* EXERCÍCIO 16
const fruta = (prompt('Qual sua fruta favorita'))
switch(fruta) {
    case 'Maçã':
alert('Não vendemos esta fruta aqui')
break
    case 'Kiwi':
confirm('Estamos com escassez de kiwis')
break
    case 'Melancia':
confirm('Aqui está, são 3 reais o quilo')
break
default:
alert('[ERRO]')
break
} */

/* EXERCICIO 17
let list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i <= 9; i++){
    if(list[i] % 2 ==0)
    console.log(list[i]);
} */

/* EXERCICIO 18
let list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    console.log(list.reverse());
 */
/* EXERCICIO 19
n = ''
    while(n<=5){
        console.log(n)
        n++
    } */


/*   EXERCICIO 20 
  let maiorDe = 0
    let menorDe = 0

     for (i = 0; i < 5; i++){
         var idades = parseInt(prompt("Digite uma idade: "));
         if (idades <= 18) {
        menorDe++
     } else {
        maiorDe++
     }
     } 
     alert(`${maiorDe} maiores de idade e ${menorDe} menores de idade`);  */
  
  
/* EXERCICIO 21
     let arrayNomes = []

     for (i = 0; i < 5; i++){
         var nomes = prompt("Digite um nome: ");
         arrayNomes.push(nomes)
     } 
     alert(`Os nomes que você digitou foram ${arrayNomes}`)
     alert(`Esses nomes invertidos são ${arrayNomes.reverse()}`)
     */