const aviao = {
    marca: 'Boeing',
    nome: 'Boeing 767',
    velocidadeAceleracao: 10,
    velocidadeDesaceleracao: 10,
    velocidade: 0,
    velocidadeMinima: 0,
    velocidadeMaxima: 800,

    ligado: false,

    ligar:function() {
        if(this.ligado === true) {
            console.log('Aviao já esta ligado!')
            return
        }
        this.ligado = true
        console.log('O aviao esta sendo ligado\nO aviao foi ligado!')
    },
    desligar:function() {
        if(this.ligado === false) {
            console.log('Aviao já esta desligado!')
            return
        }
        this.ligado = false
        console.log('O aviao esta sendo desligado\nO aviao foi desligado!')
    },
    acelerar:function() {
        if(this.ligado === false) {
            console.log('Aviao esta desligado! Não é possivel usar-lo enquanto ele esta desligado.')
            return
        }
        if(this.velocidade >= this.velocidadeMaxima) {
            console.log('Aviao já esta em sua velocidade maxima!')
            return
        }
        this.velocidade += this.velocidadeAceleracao
        console.log('O aviao agora esta acelerando, e com uma velocidade de '+this.velocidade+'km/h.')
    },
    desacelerar:function() {
        if(this.ligado === false) {
            console.log('Aviao esta desligado! Não é possivel usar-lo enquanto ele esta desligado.')
            return
        }
        if(this.velocidade <= this.velocidadeMinima) {
            console.log('Aviao não consegue mais desacelerar!')
            return
        }
        this.velocidade -= this.velocidadeDesaceleracao
        console.log('O aviao agora esta desacelerando, e com uma velocidade de '+this.velocidade+'km/h.')
    },

}

aviao.ligar()
while(aviao.velocidade <= 200){
    aviao.acelerar()
}
console.log('O aviao está decolando')
while(aviao.velocidade < 400){
    aviao.acelerar()
    if (aviao.velocidade >= 300) {
        console.log('O aviao está em velocidade de cruzeiro\n')
    }
}
while(aviao.velocidade >= 210){
    aviao.desacelerar()
}
console.log("Avião está pousando")
while(aviao.velocidade >= 10){
    aviao.desacelerar()
}   
aviao.desligar()