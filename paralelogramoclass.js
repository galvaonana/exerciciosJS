//calcular a area do paralelogramo (A=b*h)

class Paralelogramo {
    constructor (base, altura) {
        this.base = base;
        this.altura = altura;
    }
    area() {
        return this.base * this.altura;
    }
}
var paralelogramo1 = new Paralelogramo (9,5)
console.log(paralelogramo1.area());