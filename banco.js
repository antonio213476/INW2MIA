class banco {
    constructor(numero,cpf,saldo,ativado){
        this.numero = numero
        this.cpf = cpf
        this.saldo = saldo
        this.ativado = ativado
    }


    ativar() {
        if(this.ativado === false) {
            this.ativado = true
            return
        }
        console.log('\nA conta já está ativada!\n')
    }

    credito(valor){

        if (this.ativo === false){
            console.log("ERRO: CONTA INATIVA")
            return
        }
        
        if(valor<=0){
            console.log("ERRO: VALOR INVALIDO")
        } 

        this.saldo += valor
        console.log("Credito feito com successo!\nSeu saldo atual agora é:\n" + this.saldo)

        }

    debito(valor){
        if (this.ativo === false){
            console.log("ERRO: CONTA INATIVA")
            return
        }

        if(valor<=0){
            console.log("ERRO: VALOR INVALIDO")
        } else if (valor>this.saldo){
            console.log("ERRO: SALDO INDISPONIVEL")
            return
        }
        
        this.saldo -= valor
        console.log("Debito feito com successo!\nSeu saldo atual agora é:\n" + this.saldo)

    }
    
}

// 1
class contaPoupanca extends banco{
    constructor(numero,cpf,saldo,ativado,diaAniversarioPoupanca){
        super(numero, cpf, saldo, ativado);
        this.diaAniversarioPoupanca = diaAniversarioPoupanca
    }
}
// 2
class contaCorrente extends banco{
    constructor(numero,cpf,saldo,ativado,contadorTalao){
        super(numero, cpf, saldo, ativado);
        this.contadorTalao = contadorTalao
    }
}
// 3
class contaEspecial extends banco{
    constructor(numero,cpf,saldo,ativado,limite){
        super(numero, cpf, saldo, ativado);
        this.limite = limite
    }
}
// 4
class contaEmpresa extends banco{
    constructor(numero,cpf,saldo,ativado,emprestimoEmpresa){
        super(numero, cpf, saldo, ativado);
        this.emprestimoEmpresa = emprestimoEmpresa
    }
}
// 5
class contaEstudantil extends banco{
    constructor(numero,cpf,saldo,ativado,limiteEstudantil){
        super(numero, cpf, saldo, ativado);
        this.limiteEstudantil = limiteEstudantil
    }
}

let conta1 = new contaPoupanca(1,"123.456.789-10",100,false)
let conta2 = new contaCorrente(1,"223.456.789-10",100,false)
let conta3 = new contaEspecial(1,"323.456.789-10",100,false)
let conta4 = new contaEmpresa(1,"423.456.789-10",100,false)
let conta5 = new contaEstudantil(1,"523.456.789-10",100,false)

const promptSync = require('prompt-sync')();

let mensagemNormal = `\n[NOME DO BANCO]\n[SLOGAN]\n
1 - CONTA POUPANÇA\n2 - CONTA CORRENTE
3 - CONTA ESPECIAL\n4 - CONTA EMPRESA
5 - CONTA ESTUDANTIL\n6 - SAIR\n`
3
console.log(mensagemNormal)

let numeroDaConta = parseInt(promptSync("DIGITE O CODIGO DA OPERAÇÃO SELECIONADA:"))
let contaAtualString;
let contavalida = true

switch(numeroDaConta) {
    case 1:
        contaAtualString = '[1] CONTA POUPANÇA'
        break;
    case 2:
        contaAtualString = '[2] CONTA CORRENTE'
        break;
    case 3:
        contaAtualString = '[3] CONTA ESPECIAL'
        break;
    case 4:
        contaAtualString = '[4] CONTA EMPRESA'
        break;
    case 5:
        contaAtualString = '[5] CONTA ESTUDANTIL'
        break;
    case 6:
        console.log("Saindo...")
        contavalida = false
        break;
    default:
        console.log("ERRO: NUMERO INVALIDO")
        contavalida = false
        break;
}

if(contavalida === true) {

let contaAtual = eval("conta" + numeroDaConta.toString())

contaAtual.ativar()

console.log(contaAtual.ativado)
if(contaAtual.ativado === false ) {
    console.log("A conta está inativa! Não é possível usar uma conta inativa")
    return
}

let mensagemConta = `\n[NOME DO BANCO]\n[SLOGAN]\n  
CONTA ${contaAtualString}\nSaldo Atual: R$ ${contaAtual.saldo}`

console.log(mensagemConta)



let movimento = promptSync("MOVIMENTO : D = Debito | C = Credito ")
let valormovimento = parseInt(promptSync("VALOR MOVIMENTO: R$ "))
let continuar = promptSync("CONTIUNAR : S/N ")

if(continuar==='N') {
    console.log('Saindo...')
    return
}

if(Number.isInteger(valormovimento) === false) {
    console.log('ERRO: NUMERO INVALIDO')
    return
}

if(movimento==='D') {
    contaAtual.debito(valormovimento)
}else if(movimento==='C') {
    contaAtual.credito(valormovimento)
} else {
    console.log('ERRO: MOVIMENTO INVALIDO')
    return
}

}