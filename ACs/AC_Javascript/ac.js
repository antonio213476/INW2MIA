// npm install prompt-sync

class produtoFarmacia {
    constructor(id,descricao,ativo,estoque,preco,precisaPrescricao,classeDoProduto){
        this.id = id
        this.descricao = descricao
        this.ativo = ativo
        this.estoque = estoque
        this.preco = preco
        this.precisaPrescricao = precisaPrescricao
        this.classeDoProduto = classeDoProduto
    }

    ativar(){
        this.ativo = true
    }

    incluirEstoque(valor){
        this.estoque += valor     
    }

    retirarEstoque(valor){
        if(valor > this.estoque){
            console.log('Infelizmente este valor é maior que nosso estoque, nao podemos disponibilisar o produto.')
            return
        }
        this.estoque -= valor     
    }
}

let protetorSolar = new produtoFarmacia(
    1,
    'Protetor solar para te proteger do sol quando o sol estiver forte',
    true,
    40,
    12,
    false,
    'Comestico'
)

let novoProduto
const promptSync = require('prompt-sync')()

console.log(`\nFarmacia Toninho\nA melhor farmacia para todas suas necessidades\n\n`)
let desejaCompras = promptSync("Você deseja fazer compras? (S/N) : ")

let venderProduto = function() {
    console.log('\nDescricao: '+novoProduto.descricao)
    console.log('Classe do Produto: '+novoProduto.classeDoProduto)
    console.log('Precisa de prescricao: '+novoProduto.precisaPrescricao)
    console.log('Estoque Atual: '+novoProduto.estoque)
    let quantosDesejaComprar = parseInt(promptSync("Quantos produtos voce deseja comprar? : "))

    novoProduto.retirarEstoque(quantosDesejaComprar)
    if(quantosDesejaComprar <= novoProduto.estoque) {
        console.log('Valor a pagar: '+novoProduto.preco * quantosDesejaComprar)
    }
}



if(desejaCompras === 'S') {
    console.log('Iniciando cadastro do produto...\n')
    let descricaoDoProduto = promptSync("Digite a descricao do produto : ")
    let precoDoProduto = promptSync("Digite o preco do produto : ")
    let precisaPrescricaoProduto = promptSync("Este produto necessita de uma prescricao medica? (S/N) : ")
    if(precisaPrescricaoProduto==='S') {
        precisaPrescricaoProduto=true
    } else{
        precisaPrescricaoProduto=false
    }
    let classeDoProduto = promptSync("Digite a classe do produto : ")

    novoProduto = new produtoFarmacia(
        1,
        descricaoDoProduto,
        true,
        10,
        precoDoProduto,
        precisaPrescricaoProduto,
        classeDoProduto
    )

    console.log('Produto cadastrado com successo!')

    let desejaContinuar = promptSync("Gostaria de continuar? (S/N) : ")
    while(desejaContinuar==='S') {
        venderProduto()
        let desejaContinuar2 = promptSync("Gostaria de comprar mais? (S/N) : ")
        if(desejaContinuar2!=='S') {
            console.log('Volte sempre!')
            return
        } 
    }
    if(desejaContinuar!=='S') {
        console.log('Volte sempre!')
        return
    }
} else{
    console.log('Até breve!\n')
}