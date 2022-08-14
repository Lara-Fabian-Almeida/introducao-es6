/* Arrays */

// Criação do array.
const arr = [1, 2, 3, 4, 6, 8, 9]

// Imprime array na tela.
console.log(arr)

/* Funções sobre Arrays*/

// map: método que realiza uma operação em cada item do array e retorna o array com os elementos operados.
// Neste caso, a operação realizada é dobrar o valor dos elementos do array.
const arrNovo = arr.map(function(item){
    return item * 2;
})
console.log(arrNovo)

// reduce: método que itera sobre um array e reduz seus elementos a uma única variável.
const soma1 = arr.reduce(function(total, next){
    return total + next;
})
console.log(soma1)

// filter: método que filtra os elementos que um array, o reduzindo de acordo com a condição imposta no retorno.
const itensPares = arr.filter(function(item){
    // === significa que se quer um retorno estritamente igual, ou seja,
    // elementos de mesmo valor, mas tipos distintos não são aceitos.
    return item % 2 === 0;
})
console.log(itensPares)

// find: método que procura por um determinado elemento no array e o retorna, caso o encontre.
// Se o elemento não é encontrado, retorna undefined.
const procura7 = arr.find(function(item){
   return item === 7;
})
console.log(procura7)

/* ---------------------------------------------------------------------------------------------------------- */

/* Arrow Function */

// =>: Reduz a sintaxe da função, a escrevendo em menos linhas.
const newArr = arr.map(item => item * 2)
console.log(newArr)

const teste1 = () => [1, 2, 3]
console.log(teste1())

const teste = () => {
    return {nome: 'Lara'};
}
console.log(teste())

/* ---------------------------------------------------------------------------------------------------------- */

/* Parâmetros Default*/

// A função soma é declarada recebendo os parâmetros com valor default, pois caso não seja passado nenhum valor na chamada da função, o cálculo é feito com os valores default.
function soma(a=2, b=3){
    return a + b;
}
console.log(soma())