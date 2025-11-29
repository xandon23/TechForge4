abstract class Funcionario {
    private nome: string;
    private salario: number;

    constructor(nome: string, salario: number) {
        this.nome = nome;
        this.salario = salario;
    }

    public getSalario(): number {
        return this.salario;
    }

    public getNome(): string {
        return this.nome;
    }

    abstract calcularBonus(): number;
}

class Gerente extends Funcionario {
    calcularBonus(): number {
        return this.getSalario() * 0.10; 
    }
}

class Operario extends Funcionario {
    calcularBonus(): number {
        return this.getSalario() * 0.05; 
    }
}

function calcularSalarioComBonus(lista: Funcionario[]) {
    lista.forEach(func => {
        const bonus = func.calcularBonus();
        const final = func.getSalario() + bonus;
        console.log(`${func.getNome()} - Salário Final: R$${final.toFixed(2)}`);
    });
}

const equipe = [
    new Gerente("Ana", 5000),
    new Operario("Carlos", 2000)
];

calcularSalarioComBonus(equipe);