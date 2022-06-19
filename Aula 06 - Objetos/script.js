/* 
Objeto é dividido em duas partes:
- Propriedades(atributos)/ características de uma objeto
- Métodos/Funções (rotinas de um objeto)
*/

let pessoa = { // par de chaves usado para criar objetos/ objeto vazio
nome:'João',  // propriedade
idade:28, 
cpf:'123.456.789.65',
endereco: {  // objeto dentro de outro
    cidade: 'São Paulo',
    estado: 'São Paulo',
    cep: '61761-880'
}, 
cumprimentar() {
    console.log('Olá mundo')
}
}


console.log(pessoa) // E se eu quiser pegar um valor por vez?
console.log(pessoa.nome) // JS entende que é pra retornar o valor da propriedade nome
console.log(`Olá, meu nome é ${pessoa.nome} e eu tenho ${pessoa.idade} anos e eu moro em ${pessoa.endereco.cidade}`)
pessoa.idade = 29
console.log(pessoa.idade)
//JSON significa JavaScript Object Notation
pessoa.cumprimentar()
console.table(pessoa) // mostra os dados do objeto em forma de tabela 
console.log(pessoa['idade']) // Outra maneira de acessar as propriedades do objeto
pessoa['cumprimentar']() // maneira de executar uma função