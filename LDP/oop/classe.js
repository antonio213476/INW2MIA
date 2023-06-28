class triangulo {
    constructor(base1,altura1) {
        this.base1 = base1
        this.altura1 = altura1
    }

    mostarArea(){
        console.log('A area é :'+(this.altura1 * this.base1))
    }
}


let objeto1 = new triangulo(5,3)
let objeto2 = new triangulo(4,2)


console.log('triangulo\ntrinagulo 1:'+objeto1.mostarArea()+'\ntriangulo2\n'+objeto2.mostarArea())