const prompt = require("prompt-sync")()
let alunos = [
   {
        nome: 'Antonio',
        nota: 6,
        faltas: 0
    },
    {
        nome: 'Mateus',
        nota: -1,
        faltas: 999
    },
    {
        nome: 'Jose',
        nota: 5,
        faltas: 0
    }
]

let nomeAluno = prompt('Digite o nome do aluno: ')
let alunoEncontrado = false;

const encontrarAluno = alunos.find(aluno => {
    return aluno.nome === nomeAluno
});

if(encontrarAluno) {
    console.log('Aluno encontrado!')
    let querSair = '';
    while(querSair !== 'S') {
        let querSaber = prompt('O que gostaria de ver? (NOTA/FALTAS) ')
        if(querSaber === 'NOTA') {
            console.log('Nome: '+encontrarAluno.nome+'\nNota: '+encontrarAluno.nota)
        } else if(querSaber === 'FALTAS') {
            console.log('Nome: '+encontrarAluno.nome+'\nFaltas: '+encontrarAluno.faltas)
        } else {
            console.log('Digitou algo errado?')
        }
        querSair = prompt('Gostaria de sair? (S/N)')
    }
} else {
    console.log('Aluno não encontrado... Você digitou o nome certo?')
}