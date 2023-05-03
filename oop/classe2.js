class Pessoa {
    constructor(cpf,nome,anoNascimento){
        this.cpf = cpf
        this.nome = nome
        this.anoNascimento = anoNascimento
    }

    mostrarIdade(){
        console.log(2023-this.anoNascimento)
    }
}   

let pessoa1 = new Pessoa("111.222.333-44",'Jose',2011)

pessoa1.mostrarIdade()