class Animal {
    constructor(tipo,porte,femea,nascimento){
        this.tipo = tipo;
        this.porte = porte;
        this.femea = femea;
        this.nascimento = nascimento;
    }

    fazerBarulho() {
        console.log('GH AHHHHHHHHHHHHHHHHHHHHHHHHHHHHH')
    }
}

class Gato extends Animal {
    constructor(tipo,raca,cor){
        super(tipo);
        this.raca = raca;
        this.cor = cor;
    }

    miar() {
        console.log('meaaaaaaaow')
    }
}

class Cachorro extends Animal {
    constructor(tipo,raca,cor){
        super(tipo);
        this.raca = raca;
        this.cor = cor;
    }

    latir() {
        console.log('woof')
    }
}

let bicho1 = new Animal('mamifero','medio',false,2020)
let gato1 = new Gato('felino','sphynx','preto')
let snoop = new Cachorro('canino','beagle','malhado')


console.log(bicho1.porte)

bicho1.fazerBarulho()

gato1.fazerBarulho()
gato1.miar()

