class List{
    constructor(){
        this.data = [];
    }

    add(nome){
        // push: método que adiciona um elemento ao final do array e retorna o comprimento do.
        this.data.push(nome);

        // console.log: função imprime um(a) texto/mensagem no console.
        console.log(this.data);
    }
}

class ToList extends List{
    constructor(){
        super();
        this.usuario = 'Lara';
    }

    getUsuario(){
        console.log(this.usuario);
    }

    // static: um método estático não necessita ser instanciado.
    static soma(a, b){
        return a + b;
    }
}

// Instanciando objeto.
// const toList = new ToList()

// document.getElementById('novotodo').onclick = function(){
//    toList.add('Lara');
//    toList.getUsuario();
// }

// console.log(ToList.soma(1, 2));

// const: cria variável constante, que não pode ter o seu valor modificado, mas o de suas propriedades, sim.
// const nome = {primeiro_nome: 'Lara'};
// A propriedade do objeto é modificada no código abaixo.
// nome.primeiro_nome = 'Maria';

// var: cria variável global, que pode ser acessada em qualquer parte do código.
var nome = "Lara";
// Como a variável nome é do tipo var, é possível modificá-la.
nome = 'Maria';

console.log(nome);

function teste(x){
    // let: torna a variável visível apenas no escopo da função onde ela foi criada.
    let y = 4;

    if(x > 2){
        y = 6;
        console.log(x, y);
    }
}

console.log(teste(10));

// Como a variável y só é visiível no escopo da função teste, ocorre um erro ao tentar exibi-la fora dele.
// console.log(y);