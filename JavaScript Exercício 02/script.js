/* EXERCÍCIO 1  */
var array = []
var number = parseFloat(prompt('Quantos números você deseja digitar?'))
let soma = 0

for (i=0; i<number; i++){
    let res = parseFloat(prompt(`Digite o ${i + 1}° número`))
    array.push(res)
    soma+=res
}
const media = soma/number
const potencia = soma**2
const raiz = Math.sqrt(soma)
const cubica = Math.cbrt(soma)

alert(`A soma dos números digitados é ${soma}`)
alert(`A média dos números digitados é ${media}`)
alert(`A potência dos números digitados é ${potencia}`)
alert(`A raiz quadrada dos números digitados é ${raiz}`)
alert(`A raiz cúbica dos números digitados é ${cubica}`)
console.log(array) 


/* EXERCÍCIO 2 */
let nomes = prompt('Digite seu nome completo')
 alert(`Seu nome em letras maiúsculas é ${nomes.toUpperCase()}`)
alert(`Seu nome em letras minúsculas é ${nomes.toLowerCase()}`) 
var arr = nomes.split("")
for (i in arr) {
    console.log(arr[i])
}; 

/* EXERCÍCIO 3 */

function convert() {
var num = prompt('Digite um número binário') 
var soma = 0;
var base = 1;
var len = num.length
    for(var i = len-1; i>= 0; i--){
        if(num[i] == '1')
            soma += base
            base = base*2
        }
            alert(soma)
            return soma
}
        convert()
