//Ada, a daschund, ama bichinhos de pelucia. E como é uma digitAU influencer, tem vários em sua casa.

class Bichinho {
    constructor(nome, cor, tamanho, material) {
        this.nome = nome;
        this.cor = cor;
        this.tamanho = tamanho;
        this.material = material;
    }
    name(){
        return this.nome;
    }
}
var bichinho1= new Bichinho("Chloe", "bege", "medio","barbante");
console.log(bichinho1.name());