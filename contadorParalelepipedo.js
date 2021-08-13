//crie uma classe 'palavra' com funçoes para: 
    //I. contar letras de uma palavra com variavel para guardar o numero de letras da palavra
    //II. contar vogais de uma palavra com variavel para guardar o numero de letras da palavra
    //Usar referencia de vogais
    //Usar loops como while e for

class Palavra {
    constructor(letras) {
        this.letras = letras;
    }
    contaLetras(){
        var contador = 0
        for(var i = 0; i < this.letras.length; i++) {
            contador++
        }
        return contador;
    }
    contaVogais(){
        var contador = 0
        var arrVogais = ["a", "e", "i", "o", "u"]
        for (var i = 0; i < this.letras.length; i++){
           // console.log(this.letras[i])
            for(var v = 0; v < arrVogais.length; v++){
               // console.log(arrVogais[v])
                if (this.letras[i] == arrVogais[v]){
                    contador++
                   //console.log(this.letras[i] + "é uma vogal")
                }
                else {  
                    //console.log(this.letras[i] + "não é vogal")
                }
              
            }
        }
        return contador;
    }
}
var word1 = new Palavra ("paralelepipedo")
console.log(word1.contaVogais());
console.log(word1.contaLetras());