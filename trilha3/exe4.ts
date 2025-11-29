class Animal {
    private energia: number;

    constructor(energiaInicial: number) {
        this.energia = energiaInicial;
    }

    comer(): void {
        this.energia += 10;
        console.log("Comendo... Energia subiu para: " + this.energia);
    }

    protected gastarEnergia(qtd: number): void {
        this.energia -= qtd;
        console.log(`Gastou ${qtd} de energia.`);
    }

    statusEnergia(): void {
        console.log(`Nível atual de energia: ${this.energia}`);
    }
}

class Leao extends Animal {
    comer(): void {
        console.log("O leão está caçando...");
        this.gastarEnergia(20); 
        super.comer();
    }
}

class Passaro extends Animal {
    
}


const simba = new Leao(50);
simba.comer(); 
simba.statusEnergia();

const piu = new Passaro(20);
piu.comer(); 
piu.statusEnergia();