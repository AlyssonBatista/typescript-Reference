"use strict";
// const total = 100;
function somar(a, b) {
    return a + b;
}
console.log(total);
let produto = "livro";
let preco = 200; // não há nececidade de tipar uma variável se ela já estiver um valor atribuido 
const carro = {
    marca: 'Audi',
    portas: 2
};
// Inferência de tipo
let preco2 = 200;
const carro2 = {
    marca: 'Audi',
    portas: 2
};
function somar2(a, b) {
    return a + b;
}
somar2(2, 3); // 5
// Mas sempre vamos tipar as funções 
const nintendo = {
    nome: "Nintendo",
    preco: '2000'
};
function transformaPreco(produto) {
    produto.preco = "R$ " + produto.preco;
    return produto;
}
;
const produtoNovo = transformaPreco(nintendo);
console.log(produtoNovo);
function normalizarTexto(texto) {
    return texto.trim().toLowerCase();
}
const input = document.querySelector('input');
const total = localStorage.getItem('total');
if (input && total) {
    input.value = total;
    calcularGanho(Number(input.value));
}
function calcularGanho(value) {
    const p = document.querySelector('p');
    if (p) {
        p.innerText = `Ganho total: ${value + 100 - value * 0.2}`;
    }
}
function totalMudou(input) {
    if (input) {
        localStorage.setItem('total', input.valueOf);
        calcularGanho(Number(input.valueOf));
    }
}
if (input) {
    input.addEventListener('keyup', totalMudou);
}
