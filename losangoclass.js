//calcular a area do losango(D1*d2/2)

class Losango {
    constructor(diagonal1,diagonal2) {
        this.diagonal1 = diagonal1;
        this.diagonal2 = diagonal2;
    }
    area(){
        return this.diagonal1 * this.diagonal2 /2;
    }
}

var losango1 = new Losango (8,8)
console.log(losango1.area());