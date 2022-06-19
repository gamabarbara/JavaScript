
class Pessoa {
    constructor(nome, idade, cpf){
        this.nome = nome // tudo que vem acompanhado do this é uma propriedade da classe
        this.idade = idade
        this.cpf = cpf
    }

    cumprimentar() { //método dentro de uma classe
    console.log(`Olá, meu nome é ${this.nome}, tenho ${this.idade} anos`)

    }
    static cumprimentar2() { //métodos estáticos não tem objetos obrigatórios
        console.log('Olá')
    }
}

let p = new Pessoa('João', 28, '123.456.789-65') // instanciação. Criando um novo objeto da classe pessoa
let p2 = new Pessoa('Bárbara', 27,'425.103.628-01')
let p3 = new Pessoa ('Anderson', 27, '446.037.338-60')

/* p.cumprimentar()
p2.cumprimentar()
p3.cumprimentar() */

const pessoas = [p,p2, p3, new Pessoa('Aurélio', 25, '432.765.976-65')] //loop para acessar cada propriedade do objeto
for (let pessoa of pessoas) {
    console.log(pessoa.nome)
}