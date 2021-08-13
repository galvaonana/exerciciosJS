//O usuario deve informar um numero inteiro para data (dd/mm/aaaa) onde cada campo deve ficar salvo em atributos da
//instância. A classe tb deve ter um metodo para imprimir a data.

class Data {
    constructor(dia, mes, ano) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }

}

const dya = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

var day
dya.question('Insira aqui o dia', dia => {
    day = dia
    console.log(day)
    dya.close();
})

const mez = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
var month
mez.question('Insira aqui o mes' , mes =>{
    month = mes
    console.log(month)
    mez.close();
})

const anu = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
var year
anu.question('Insira aqui o ano' , ano => {
    year = ano 
    console.log(year)
    anu.close();
})


var data = new Data(day, month, year);
//console.log();



//crie uma classe para Chloe, a elefoa da Ada
class Bichinho {
    constructor(cor, tamanho, material) {
        this.cor = cor;
        this.tamanho = medio;
        this.material = barbante;
    }
}

class Christian {
    constructor(idade, signo, comidaFav) {
        this.idade = idade;
        this.signo = signo;
        this.comidaFav = comidaFav;
    }
}