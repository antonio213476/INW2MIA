let lojas = [
    {
         codigo: 1,
         produto: 'Teclado',
         valor: 20,
         estoque: 0,
         vendas: 0
     },
     {
        codigo: 2,
        produto: 'Mouse',
        valor: 10,
        estoque: 2,
        vendas: 0
     },
     {
        codigo: 3,
        produto: 'Monitor',
        valor: 150,
        estoque: 2,
        vendas: 0
     },
     {
        codigo: 4,
        produto: 'Cadeira',
        valor: 700,
        estoque: 2,
        vendas: 0
     },
     {
        codigo: 5,
        produto: 'Ryzen 5 5600x',
        valor: 800,
        estoque: 2,
        vendas: 0
     }
 ]

const prompt = require("prompt-sync")()
let codigoDoProduto = parseInt(prompt('Digite o codigo do produto: '))

const listarEstoque = lojas.reduce((lojas, objeto) => {
    return lojas + objeto.estoque;
}, 0);

console.log('Total do estoque é: '+listarEstoque)

const pegarProduto = lojas.find(loja => {
    return loja.codigo === codigoDoProduto
});

if(pegarProduto) {
    if(pegarProduto.estoque <= 0) {
        console.log('Produto indisponivel, estoque esgotado.')
        return
    }

    console.log('Produto encontrado!')
    console.log('\nNome: '+pegarProduto.produto+'\nValor: '+pegarProduto.valor+'\nEstoque: '+pegarProduto.estoque+'\nVendas: '+pegarProduto.vendas)
    
    let comprarProduto = prompt('Gostaria de comprar o produto? (S/N) ').toUpperCase()

    if(comprarProduto === 'S') {
        let sair = ''
        while(sair !== 'N' && pegarProduto.estoque > 0) {
            console.log(sair)
            pegarProduto.estoque -= 1
            pegarProduto.vendas += 1
            console.log('\nNome: '+pegarProduto.produto+'\nValor: '+pegarProduto.valor+'\nEstoque: '+pegarProduto.estoque+'\nVendas: '+pegarProduto.vendas)
            console.log('Obrigado pela compra!')
            sair = prompt('Gostaria de comprar mais? (S/N)').toUpperCase()
        }
        if(pegarProduto.estoque <= 0 ) {
            console.log('\nO estoque do produto acabou!')
        }
        console.log('\nVolte sempre!')
        return
    }
} else {
    console.log('\nProduto não encontrado')
}

