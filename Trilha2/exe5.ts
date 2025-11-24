class Agenda {
    compromissos: string[];

    constructor() {
        this.compromissos = [];
    }

    adicionarCompromisso(compromisso: string): void {
        this.compromissos.push(compromisso);
        console.log(`Compromisso "${compromisso}" adicionado!`);
    }

    listarCompromissos(): void {
        console.log("=== Minha Agenda ===");
        for (let item of this.compromissos) {
            console.log(`- ${item}`);
        }
    }
}

const hoje = new Agenda();
hoje.adicionarCompromisso("Estudar TypeScript");
hoje.adicionarCompromisso("Ir na academia");
hoje.listarCompromissos();