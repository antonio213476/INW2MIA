// npm install prompt-sync


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
            return
        } 

        this.saldo += valor
        console.log("Credito feito com successo!\nSeu saldo atual agora é:\nR$ " + this.saldo)

        }

    debito(valor){
        if (this.ativo === false){
            console.log("ERRO: CONTA INATIVA")
            return
        }

        if(valor<=0){
            console.log("ERRO: VALOR INVALIDO")
            return
        } 

        this.saldo -= valor

        if (valor<=this.saldo){
            console.log(`Debito feito com successo!\nSeu saldo atual agora é:\nR$ ` 
            + this.saldo)
        }
        
        
    }
    
}

let precoTalao = 30

// 1
class contaPoupanca extends banco{
    constructor(numero,cpf,saldo,ativado,diaAniversarioPoupanca){
        super(numero, cpf, saldo, ativado);
        this.diaAniversarioPoupanca = diaAniversarioPoupanca
    }

    correcao(dataInformada) {
        if(dataInformada === this.diaAniversarioPoupanca) {
            this.saldo = (this.saldo * 0.05) + this.saldo
            console.log('Saldo ajustado! Seu saldo atual é:\nR$ '+this.saldo)
            return
        }
        console.log('A data de hoje não é igual a o dia de aniversario da poupança.\nSeu saldo não foi atualizado')
    }
}
// 2
class contaCorrente extends banco{
    constructor(numero,cpf,saldo,ativado,contadorTalao){
        super(numero, cpf, saldo, ativado);
        this.contadorTalao = contadorTalao
    }

    pedirTalao() {
        if(this.saldo >= precoTalao) {
            let mensagem = `Talão requisitado`
            this.saldo -= precoTalao
            this.contadorTalao -= 1

            if(this.contadorTalao < 1) {
                console.log(mensagem +'!')
                return
            }
            console.log(mensagem +`, você ainda pode requisitar `
            +this.contadorTalao+` talão/ões! Seu saldo atual agora é R$ `+this.saldo
            )

            return
        }
        console.log('ERRO: Você não possui credito suficiente para este talão.')
    }
}
// 3
class contaEspecial extends banco{
    constructor(numero,cpf,saldo,ativado,limite){
        super(numero, cpf, saldo, ativado);
        this.limite = limite
    }

    usarLimite(){
        if(this.saldo > this.limite) {
            console.log("ERRO: SALDO INDISPONIVEL || VALOR É MAIOR QUE O SEU LIMITE")
            return
        }

       
        this.limite += this.saldo
        this.saldo = 0
        console.log(`Seu limite foi utilizado para sua conta não ficar negativa.
Seu saldo atual foi ajustado para R$ 0, e seu limite foi diminuido para R$ `+
        this.limite)
        
    }
}
// 4
class contaEmpresa extends banco{
    constructor(numero,cpf,saldo,ativado,emprestimoEmpresa){
        super(numero, cpf, saldo, ativado);
        this.emprestimoEmpresa = emprestimoEmpresa
        }

    pedirEmprestimo(valorEmprestimo){
        if(valorEmprestimo > this.emprestimoEmpresa) {
            return
        }

        this.saldo += valorEmprestimo 
        console.log('Emprestimo feito com successo! Seu saldo foi ajustado para:\nR$ '+this.saldo)
    }
}
// 5
class contaEstudantil extends banco{
    constructor(numero,cpf,saldo,ativado,limiteEstudantil){
        super(numero, cpf, saldo, ativado);
        this.limiteEstudantil = limiteEstudantil
    }

    usarEstudantil(){
        this.saldo += this.limiteEstudantil
        console.log('Saldo ajustado para:\nR$ '+this.saldo)
    }
}

let conta1 = new contaPoupanca(1,"123.456.789-10",100,false,"04/06")
let conta2 = new contaCorrente(2,"223.456.789-10",100,false,3)
let conta3 = new contaEspecial(3,"323.456.789-10",100,false,1000)
let conta4 = new contaEmpresa(4,"423.456.789-10",100,false,10000)
let conta5 = new contaEstudantil(5,"523.456.789-10",100,false,5000)

const promptSync = require('prompt-sync')();

let mensagemNormal = `\nBanco Batata\nSeu dinheiro, suas regras\n 
1 - CONTA POUPANÇA\n2 - CONTA CORRENTE
3 - CONTA ESPECIAL\n4 - CONTA EMPRESA
5 - CONTA ESTUDANTIL\n6 - SAIR\n`

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
let movimento;
let valormovimento;
let continuar;

let operacaoDoBanco = function(conta) {
    let mensagemConta = `\nBanco Batata\nSeu dinheiro, suas regras\n  
CONTA ${contaAtualString}\nSaldo Atual: R$ ${conta.saldo}`
    
    console.log(mensagemConta)
    
    
    
    movimento = promptSync("MOVIMENTO : D = Debito | C = Credito ")
    valormovimento = parseInt(promptSync("VALOR MOVIMENTO: R$ "))
    continuar = promptSync("CONTIUNAR : S/N ")

    
    if(continuar==='S') {
        if(Number.isInteger(valormovimento) === false) {
            console.log('ERRO: NUMERO INVALIDO')
            return
        }
        
        if(movimento==='D') {
            conta.debito(valormovimento)
        }else if(movimento==='C') {
            conta.credito(valormovimento)
        } else {
            console.log('ERRO: MOVIMENTO INVALIDO')
            return
        }
    
        if(conta.saldo < 0) {
            if(numeroDaConta !== 3) {
                console.log("ERRO: SALDO INDISPONIVEL")
                return
            }
            conta.usarLimite()
            let outraOperacao = promptSync("Você gostaria de fazer uma outra operação? (S/N) ")
            if(outraOperacao == 'S') {
                operacaoDoBanco(conta)
            }
        }
    }
}

if(contavalida === true) {

    let contaAtual = eval("conta" + numeroDaConta.toString())
    contaAtual.ativar()

    if(contaAtual.ativado === false ) {
        console.log("A conta está inativa! Não é possível usar uma conta inativa")
        return
    }

    operacaoDoBanco(contaAtual)

    
    switch(numeroDaConta) {
        
    
        case 1:
            let dataDeHoje = promptSync("Qual é a data de hoje?")
            console.log(dataDeHoje)
            contaAtual.correcao(dataDeHoje)
            break;
        case 2:
            while(contaAtual.contadorTalao > 0) {
                if (contaAtual.saldo < precoTalao) {
                    break
                }
    
                let querTalao = promptSync(
                    `Você gostaria de pedir um talão? Cada talão é R$ 30,00 (S/N)`
                )
    
                if(querTalao == 'S') {
                    contaAtual.pedirTalao()
                    
                } else {
                    break
                }
            }
            break;
        case 4:
            let querEmprestimo = promptSync(
                `Você gostaria de pedir um emprestimo a sua empresa? (S/N)`
            )
    
            if(querEmprestimo == 'S') {
                let emprestimo = parseInt(promptSync(`Qual o valor do emprestimo? (Limite de R$ `+contaAtual.emprestimoEmpresa+`) `))
    
                contaAtual.pedirEmprestimo(emprestimo)
            }
    
            break;
        case 5:
            let querEstudantil = promptSync(
                `Você gostaria de usar o emprestimo estudantil? (S/N)`
            )
    
            if(querEstudantil == 'S') {
                contaAtual.usarEstudantil()
            }
            break;
    }
}
