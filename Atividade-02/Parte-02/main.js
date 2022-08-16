/* Desestruturação */

const usuario = {
    nome: 'Lara',
    idade: 18,
    endereco: {
        rua: 'A',
        cidade: 'Jequié'
    }
}

// console.log(usuario)

// const nome = usuario.nome
// const idade = usuario.idade

// const {nome, idade, endereco:{cidade}} = usuario
// console.log(nome)
// console.log(idade)
// console.log(cidade)

// function getNome(usuario){
//    console.log(usuario.nome)
// }

// Desestrutura o objeto, não passando ele todo, mas somente a parte que interessa.
// Ou seja, permite extrair dados de arrays ou objetos em variáveis distintas

function getNome({nome}){
    console.log(nome)
}

// getNome(usuario) // Chamada da função.

/* ---------------------------------------------------------------------------------------------------------- */

/* Rest */

// Assemelha-se a desestruturação.
// ...resto: Pega todo o resto do usuário, ou seja, os demais atributos que não foram passados diretamente. 

const {nome, ...resto} = usuario
console.log(resto)

const arr = [1, 2, 3, 4]
const [a, b, ...c] = arr
console.log(c)

function soma(a, b, c, d){
    return a+b+c+d
}
console.log(soma(1, 2, 3, 4))

function soma2(...params){
    return params.reduce((total, next) => total + next)
}
console.log(soma2(1, 2, 3, 4, 6, 7))

/* ---------------------------------------------------------------------------------------------------------- */

/* Spread */

// Permite expandir o objeto recebido e fazer modificações em algumas propriedades dele.

const usuario1 = {
    nome: 'Lara',
    idade: 18,
    empresa: 'Escola'
}

const usuario2 = {...usuario1, nome: 'Maria'}
console.log(usuario2)

/* ---------------------------------------------------------------------------------------------------------- */

/* Templates */

// Strings que permitem expressões embutidas, usando crase (``) no lugar de aspas duplas ("").

const idade2 = 18
const nome2 = "Lara"

console.log("Meu nome é " + nome2 + " e tenho " + idade2 + " anos.")
console.log(`Meu nome é ${nome2} e tenho ${idade2} anos.`)

/* ---------------------------------------------------------------------------------------------------------- */

/* Sintaxe Curta de Objeto (Object short syntax) */

// Como a variável já foi definida/declarada anteriormente e tem o mesmo nome da propriedade, não é necessario escrever a "propriedade:valor", mas apenas um só.
// Isto é, diminui a verbosidade.

// const usuario3 = {
//    nome2: nome2,
//    idade2: idade2,
//    empresa: 'Escola'
// }

const usuario3 = {
    nome2,
    idade2,
    empresa: 'Escola'
}
console.log(usuario3)