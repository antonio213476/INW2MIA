/* let prompt = require("prompt-sync")()

let celcius = parseFloat(prompt('digite a temperatura em celcius: '))
let kelvin = celcius + 273

console.log('A temperatura em kelvin é:\n' +kelvin) */


const prompt = require('prompt-sync')()

let numero1 = parseInt(prompt('Digite o primeiro numero:'))
let numero2 = parseInt(prompt('Digite o segundo numero:'))

let operacao = prompt('Digite a operacao selecionada:')

let mensagem = 'O resultado é:\n'
let resultado

if(operacao==='+'){
    resultado = numero1 + numero2
    console.log(mensagem+resultado)
} else if(operacao==='-') {
    resultado = numero1 - numero2
    console.log(mensagem+resultado)
}else if(operacao==='%' || operacao==='/') {
    resultado = numero1 / numero2
    console.log(mensagem+resultado)
}else if(operacao==='x' || operacao==='*') {
    resultado = numero1 * numero2
    console.log(mensagem+resultado)
}else if(operacao==='elevar') {
    resultado = Math.pow(numero1,numero2)
    console.log(mensagem+resultado)
}else if(operacao==='raiz') {
    let qualNumero = parseInt(prompt('Numero voce gostaria de realizar a operação (1/2) '))
    resultado = Math.sqrt(numero1)
    if(qualNumero=='2') {
        resultado = Math.sqrt(numero2)
    } 
    console.log(mensagem+resultado)
}else {
    console.log('Operação invalida')
}