//Calcular a área do trapezio (b+B)*h/2

class Trapezio {
    constructor (ladoMaior, ladoMenor, altura) {
        this.ladoMaior = ladoMaior;
        this.ladoMenor = ladoMenor;
        this.altura = altura;
    }
    area(){
        return (this.ladoMaior + this.ladoMenor) * this.altura / 2;
    }
}
var trapezio1 = new Trapezio (6,4,5)
console.log(trapezio1.area());