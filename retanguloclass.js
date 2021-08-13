//Declarando classes
//Classes são de fato funçoes especiais; a classe possui dois componentes "class expressions" e "class declarations"

const { toUnicode } = require("punycode");

//modelo 

class Retangulo {
    constructor(altura, largura) {//a altura eh salva no this.altura e o mesmo acontece no this.largura
        this.altura = altura;
        this.largura = largura; //corpo da classe
    }
    area () {//declaracao
        return this.altura * this.largura;
        
    }
}
var retangulo1 = new Retangulo (2,4)//instancia + como se cria a instancia 
console.log(retangulo1.area());//log eh uma funcao de console

var retangulo2 = new Retangulo (3,6) 
console.log(retangulo2.area()); //instancia eh passada no console.log

var retangulo3 = new Retangulo (7,9)
console.log(retangulo3.area());

var retangulo4 = new Retangulo (9,11)
console.log(retangulo4.area());

var retangulo5 = new Retangulo (8,9)
console.log(retangulo5.area());















