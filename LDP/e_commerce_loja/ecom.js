let produtos = [
    {
         Codigo: 'GRP0X-01',
         Produto: 'Boné                ',
         Valor: 100.00,
         Estoque: 10,
         Carrinho: 0
     },
     {
        Codigo: 'GRP0X-02',
        Produto: 'Calça                ',
        Valor: 150.00,
        Estoque: 10,
        Carrinho: 0
    },
    {
        Codigo: 'GRP0X-03',
        Produto: 'Bermuda Afro        ',
        Valor: 90.00,
        Estoque: 10,
        Carrinho: 0
    },
    {
        Codigo: 'GRP0X-04',
        Produto: 'Bata                ',
        Valor: 140.00,
        Estoque: 10,
        Carrinho: 0
    },
    {
        Codigo: 'GRP0X-05',
        Produto: 'Camisa Afro         ',
        Valor: 150.00,
        Estoque: 10,
        Carrinho: 0
    },
    {
        Codigo: 'GRP0X-06',
        Produto: 'Saia Rodada          ',
        Valor: 90.00,
        Estoque: 10,
        Carrinho: 0
    },
    {
        Codigo: 'GRP0X-07',
        Produto: 'Saia Style           ',
        Valor: 90.00,
        Estoque: 10,
        Carrinho: 0
    },
    {
        Codigo: 'GRP0X-08',
        Produto: 'Macacão               ',
        Valor: 150.00,
        Estoque: 10,
        Carrinho: 0
    },
    {
        Codigo: 'GRP0X-09',
        Produto: 'Camiseta Tematica',
        Valor: 150.00,
        Estoque: 10,
        Carrinho: 0
    },
    {
        Codigo: 'GRP0X-10',
        Produto: 'Calça social afro',
        Valor: 95.50,
        Estoque: 10,
        Carrinho: 0
    }
 ]

let carrinho = []


const prompt = require("prompt-sync")()

let desejaComprar;

do{
    console.log('\nLojas AG\nOs melhores produtos por menores preços!\n')
    desejaComprar = prompt('Deseja fazer compras? (S/N) ').toUpperCase()
 
    if(desejaComprar==='N') {
        break
    }

    const listarCodigos = produtos.map(cod => {
        return cod.Codigo 
    });
    

    console.log('\nCODIGO\t\tPRODUTO\t\t\tVALOR\t\tESTOQUE')

    for (let i=0;i<produtos.length;i++) {
        console.log(produtos[i].Codigo+'\t'+produtos[i].Produto+'\t'+produtos[i].Valor+'\t\t'+produtos[i].Estoque+'\t\t'); 
    }

    console.log('\nCARRINHO DE COMPRAS:')

    if(0<carrinho.length) {

        for (let i=0;i<carrinho.length;i++) {
            console.log(carrinho[i].Codigo+'\t'+carrinho[i].Produto+'\t'+carrinho[i].Valor+'\t\t'+carrinho[i].Estoque+'\t\t'); 
        }
    } else {
        console.log('VAZIO')
    }
    console.log('')

    let codigoProduto = prompt('Digite o codigo do produto: ').toUpperCase()

    const acharProduto = produtos.find(cod => {
        return cod.Codigo === codigoProduto
    });

    console.log('\n'+acharProduto.Codigo+'\t'+acharProduto.Produto+'\t'+acharProduto.Valor+'\t\t'+acharProduto.Estoque+'\t\t'+acharProduto.Estoque); 

    let comprar = parseInt(prompt('Quantos produtos você gostaria de comprar? '))

    if(comprar) {
        if(comprar<=acharProduto.Estoque){
            acharProduto.Estoque -= comprar
            carrinho.push(acharProduto)
            console.log('Obrigado pela compra!')
        }
        else {
            console.log('Não existe estoque suficiente para continuar a compra...')
        }
    }
    
     

} while(desejaComprar!=='N')
console.log('\nAté breve!')


