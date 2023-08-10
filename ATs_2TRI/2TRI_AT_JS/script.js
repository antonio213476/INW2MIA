let codigo = ["COD01","COD02","COD03"]
let servico = ["Buscar vagas com cotas","Cursos de programação","Mentorias On-line"]
let valorunitariodoacao = [0.00,25.00,50.00]
let movimento = [0,0,0]
let valorTotal = 0
let prompt = require('prompt-sync')()
let contiunar

console.log(`
Bem vindo a EquiChance
Trazendo oportunidades a todos\n`
)

do{
console.log('COD\tSERVICOS\t\t\tDOACOES')
for(i=0;i<valorunitariodoacao.length;i++) {
    console.log(codigo[i]+"\t"+servico[i]+"\t\t"+valorunitariodoacao[i])
}


for(x=0;x<11;x++) {
    console.log('')
    let oCodigo = prompt('Por favor, solicite o codigo do servico: ').toUpperCase()

    let servicoSelecionado
    
    if(oCodigo==='COD01'||oCodigo==='1'){
        servicoSelecionado = servico[0]
        movimento[0] += 1
        valorTotal += valorunitariodoacao[0]
    }else if(oCodigo==='COD02'||oCodigo==='2'){
        servicoSelecionado = servico[1]
        movimento[1] += 1
        valorTotal += valorunitariodoacao[1]
    }else if(oCodigo==='COD03'||oCodigo==='3'){
        servicoSelecionado = servico[2]
        movimento[2] += 1
        valorTotal += valorunitariodoacao[2]
    } else {
        console.log('Servico nao encontrado, usando COD001\n')
        servicoSelecionado = servico[0]
        movimento[0] += 1
        valorTotal += valorunitariodoacao[2]
    }
    
    console.log('Servico selecionado: '+servicoSelecionado+'\n')
    console.log('CARRINHO DE COMPRAS')

    for(i=0;i<movimento.length;i++) {
        if(0 < movimento[i]) {
            for(g=0;g<movimento[i];g++) {
                console.log(codigo[i]+"\t"+servico[i]+"\t\t"+valorunitariodoacao[i])
            }
        }
    }
}
console.log('\nObrigado pelas doações! \nTotal de doações: R$ '+valorTotal)

contiunar = prompt("Deseja continuar(S|N)").toUpperCase
} while(contiunar==='S')

console.log('Volte Sempre!')