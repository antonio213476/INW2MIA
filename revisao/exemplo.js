let prompt = require("prompt-sync")()

let celcius = parseFloat(prompt('digite a temperatura em celcius: '))
let kelvin = celcius + 273

console.log('A temperatura em kelvin é:\n' +kelvin)