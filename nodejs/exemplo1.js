function falardepoisDe(segundos,frase){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(frase)
        }, segundos * 1000);
    })
}


falardepoisDe(3,'promise 😁')
.then(frase => frase.concat("\n\n^ texto da promise"))
.then(novaFrase => console.log(novaFrase))

