"use strict";
let total1 = 10;
total1 = '200';
;
function preencherDados(dados) {
    document.body.innerHTML += `
    <div>
      <h2>${dados.nome}</h2>
      <p>R$ ${dados.preco}</p>
      <p>Inclui teclado: ${dados.teclado ? 'sim' : 'não'}</p>
    </div>
    `;
}
function pintarCategoria(categoria) {
    if (categoria === 'design') {
        console.log('Pintar vermelho');
    }
    else if (categoria === 'codigo') {
        console.log('Pintar verde');
    }
    else if (categoria === "descod") {
        console.log('Pintar roxo');
    }
}
pintarCategoria('codigo');
preencherDados({
    nome: "Computador",
    preco: 2000,
    teclado: true
});
preencherDados({
    nome: "Celular",
    preco: 3000,
    teclado: false
});
// ===============================================================================================================================================================================
async function fetchProduct() {
    const response = await fetch('https://api.origamid.dev/json/notebook.json');
    const data = await response.json();
    console.log(data);
    showProduct(data);
}
fetchProduct();
function showProduct(data) {
    document.body.innerHTML = `
    <div>
      <h2>${data.nome}</h2>
      <p>${data.descricao}</p>
    </div>
    `;
}
