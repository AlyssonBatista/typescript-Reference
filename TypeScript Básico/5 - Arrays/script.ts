const numeros = [10,20,30,40,50,6];
const alunos = ['Alysson','Adriele','marcelo','jamisson','jose','josefa']
function maiorQue10(data: Array<number>){
    return data.filter((n) => n > 10 )
}

function mostrarNomes (data: Array<string>){
    return data.map((nome) => console.log(nome))
}


console.log(maiorQue10(numeros))
mostrarNomes(alunos)

// ==============================================================================================================================================================================

async function fetchCursos() {
    const response = await fetch('https://api.origamid.dev/json/cursos.json')
    const data = await response.json();
    console.log(data)
    mostrarCursos(data)
}

fetchCursos()

interface Curso {
    aulas: number;
    gratuito: boolean;
    horas: number;
    idAulas: Array<number>;
    nivel: 'iniciante' | 'avancado';
    nome: string;
    tags: Array<string>;
}

function mostrarCursos (cursos: Curso[]){
    cursos.forEach(curso => {
        let color;
        if (curso.nivel === 'iniciante') {
        color = 'blue';
        } else if (curso.nivel === 'avancado') {
        color = 'red';
        }
        document.body.innerHTML += `
        <div>
            <h2 style="color: ${color};">${curso.nome}</h2>
            <p>Horas: ${curso.horas}</p>
            <p>Aulas: ${curso.aulas}</p>
            <p>Tipo: ${curso.gratuito ? 'Gratuito' : 'Pago'}</p>
            <p>Tags: ${curso.tags.join(', ')}</p>
            <p>Aulas: ${curso.idAulas.join(' | ')}</p>
        </div>
        `
    })
}