//O exercicio de triangulo deve calcular a área do triangulo. Base * Altura / 2

class Triangulo { //declaraçao de classe sempre com letra maiuscula; 
    constructor (base, altura) {
        this.base = base;
        this.altura = altura;
    }
    area() {
        return this.base * this.altura / 2;
    }
}
var triangulo1 = new Triangulo (8,10)
console.log(triangulo1.area());

var triangulo2 = new Triangulo (20,30)
console.log(triangulo2.area());

var triangulo3 = new Triangulo (50,80)
console.log(triangulo3.area());