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
        var contador = 0 //armazena o valor da contagem das letras da palavra
        for(var i = 0; i < this.letras.length; i++){ //variavel de ciclo
            contador++
        }//aqui vou contar quantas letras tem na palavra "banana" por exemplo
        //o for vai parar de contar quando as letras da palavra
        //"banana" terminarem
        //conta uma letra + outra letra+ outra letra
        return contador;  //retorna o numero de letras contadas na palavra "banana"
    }

    
    contaVogais(){
        var contador = 0//contador de vogais
        var arrVogais = ["a", "e", "i", "o", "u"]
        for(var i = 0; i < this.letras.length; i++){//percorre esta palavra (this)
            for(var v = 0; v < arrVogais.length; v++){//o for percorre a lista de vogais
                if (this.letras[i] == arrVogais[v])//verifica se sim ou se não
                contador++
            }
        }
        return contador;
    }
}
 var word1 = new Palavra ("banana") //quero contar a quantidade de letras inseridas na variavel word1, criando a nova 
//palavra "banana"
console.log(word1.contaVogais());//impressao do numero de caracteres da palavra "banana"
console.log(word1.contaLetras());