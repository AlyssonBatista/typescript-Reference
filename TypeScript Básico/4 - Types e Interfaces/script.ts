type NumberOrString = number | string; // utilizar type se for algo simples

let total1: NumberOrString = 10;
total1 = '200'

interface Produto {   // utilizar interface caso defina objetos os objetos como está abaixo
    nome: string;
    preco: number;
    teclado: boolean;
};

function preencherDados(dados: Produto) {
    document.body.innerHTML += `
    <div>
      <h2>${dados.nome}</h2>
      <p>R$ ${dados.preco}</p>
      <p>Inclui teclado: ${dados.teclado ? 'sim' : 'não'}</p>
    </div>
    `;
  }

type Categorias = 'design' | 'codigo' | 'descod';

function pintarCategoria(categoria: Categorias) {
    if( categoria === 'design'){
        console.log('Pintar vermelho')
    } else if (categoria === 'codigo'){
        console.log('Pintar verde')
    } else if (categoria === "descod"){
        console.log('Pintar roxo')
    }
}

pintarCategoria('codigo')

preencherDados({
    nome: "Computador",
    preco: 2000,
    teclado: true
})


preencherDados({
    nome: "Celular",
    preco: 3000,
    teclado: false
})

// ===============================================================================================================================================================================

async function fetchProduct() {
    const response = await fetch('https://api.origamid.dev/json/notebook.json');
    const data = await response.json();
    console.log(data)
    showProduct(data)
}

fetchProduct();
interface Empresa {
    fundacao: number;
    nome: string;
    pais: string;
}
interface produtos {
    descricao: string;
    garantia: string;
    nome: string;
    preco: number;
    seguroAcidentes: true;
    empresaFabricante: Empresa;
    empresaMontadora: Empresa
}
  

function showProduct(data:produtos){
    document.body.innerHTML = `
    <div>
      <h2>${data.nome}</h2>
      <p>${data.descricao}</p>
    </div>
    `;
}