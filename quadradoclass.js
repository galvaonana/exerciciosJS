//calcular a area do quadrado (a= L*L)

class Quadrado {
    constructor(lado) {
        this.lado = lado;
    }
    area(){
        return this.lado * this.lado;
    }
}  

var quadrado1 = new Quadrado (10)
console.log(quadrado1.area()); 