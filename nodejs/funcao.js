const parImpar = (num)=>{
    if(num === 0) {
        console.log(num+' é neutro') 
    } else if(num > 0) {
        console.log(num + ' é positivo')
    } else {
        console.log(num + ' é negativo')
    }

    if(num%2) {
       console.log(num+' é impar\n') 
    } else {
        console.log(num+' é par\n') 
    }
}

parImpar(1)
parImpar(-1)
parImpar(54)
parImpar(0)
