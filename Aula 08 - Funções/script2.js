 /*function somar(...numeros) {  ... rest operator significa que o parametro numeros vai receber um array com infinitos parametros 
    let somaTotal = 0
    for (let numero of numeros) {
        somaTotal += numero
    }
    return somaTotal
}
let total = somar(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
console.log(total)*/


/* ----------------------------------- */

let p = {
    nome: 'Amanda',
    idade:25
}

let p2 = {...p} //o rest operator permite a copia de um outro objeto. Caso façamos a alteração em uma delas, não afetará a outra. Evita inconsistências

p2.nome = 'André'
console.log(p)
console.log(p2)

/* ---------------------------------------------------- */

let arr = [4, 5, 6]
let arr2 = arr

console.log(arr)
console.log(arr2)