//crie uma classe 'palavra' com funçoes para: 
    //I. contar letras de uma palavra com variavel para guardar o numero de letras da palavra
    //II. contar vogais de uma palavra com variavel para guardar o numero de letras da palavra
    //Usar referencia de vogais
    //Usar loops como while e for

class Palavra {
    constructor(letras){
        this.letras = letras;
    } //fim do corpo da funcao constructor
    
    descrever(){
        console.log("A palavra " + this.letras + "tem" + this.contaVogais() + "vogais, e " + this.contaLetras() + "letras");
    } //o objetivo dessa funcao eh apenas imprimir


    contaLetras(){
        var contador = 0 //armazena o numero de letras da this.palavra :v
        for(var i = 0; i< this.letras.length; i++){
            contador++
        }//depois que o ciclo acaba, vem ai o:
        return contador;
    }

    contaVogais(){
        var contador = 0
        var arrVogais = ["a","e","i","o","u"]
        for(var i = 0; i< this.letras.length; i++){
            for(var v = 0; v < arrVogais.length;v++){
                if (this.letras[i] == arrVogais[v])//comparaçao de uma unica letra 
                contador++
            }
        }
        return contador;
    }
}
// var word1 = new Palavra ("instancia")
// console.log(word1.contaVogais());
// console.log(word1.contaLetras());

// var word2 = new Palavra("bolota")
// console.log("A palavra bolota possui " + word2.contaVogais() + " vogais e " + word2.contaLetras() + " letras" );

// var word3 = new Palavra ("Pamonha")
// console.log("A palavra pamonha possui" + word3.contaVogais() + " vogais, e " + word3.contaLetras() + " letras");

var word4 = new Palavra ("pamonha")
word4.descrever();
