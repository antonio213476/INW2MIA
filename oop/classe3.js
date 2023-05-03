class aviao{
    constructor(nome,marca,peso,velocidade,velocidadeMudar,velocidadeMaxima,ligado){
        this.nome = nome
        this.marca = marca
        this.peso = peso
        this.velocidade = velocidade
        this.velocidadeMudar = velocidadeMudar
        this.velocidadeMaxima = velocidadeMaxima
        this.ligado = ligado
    }

    toggleLigar(){
        if(this.ligado === true) {
            console.log('Desligando '+this.nome+'...')
            this.ligado = false
            console.log(this.nome+' está desligado!')
            return
        } else {
            console.log('Ligando '+this.nome+'...')
            this.ligado = true
            console.log(this.nome+' está ligado!')
            return
        }
    }

    acelerar() {
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
    }

    desacelerar() {
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
    }
}

let aviao_1 = new aviao('747','Boeing',300000,0,10,800,false)

console.log(aviao_1)

aviao_1.toggleLigar()

aviao_1.acelerar()