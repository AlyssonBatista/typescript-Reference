const total = 100;
function somar(a: number,b: number){
    return a + b;
}

console.log(total)

let produto = "livro"
let preco: number = 200; // não há nececidade de tipar uma variável se ela já estiver um valor atribuido 

const carro: {
    marca: string; // não há nececidade de tipar uma variável se ela já estiver um valor atribuido 
    portas: number; // não há nececidade de tipar uma variável se ela já estiver um valor atribuido 
} = {
    marca: 'Audi',
    portas: 2
};

// Inferência de tipo

let preco2 = 200;

const carro2 = {
    marca: 'Audi',
    portas: 2
}

function somar2(a: number, b: number){
    return a + b
}

somar2(2,3) // 5

// Mas sempre vamos tipar as funções 

const nintendo = {
    nome: "Nintendo",
    preco: '2000'
};

function transformaPreco( produto: {nome: string, preco: string}){
    produto.preco = "R$ " + produto.preco;
    return produto
};

const produtoNovo = transformaPreco(nintendo)

console.log(produtoNovo)