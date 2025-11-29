interface Documento {
    titulo: string;
    conteudo: string;
}

class Texto implements Documento {
    constructor(
        public titulo: string, 
        public conteudo: string
    ) {}

    exibir(): string {
        return `Título: ${this.titulo}, Conteúdo: ${this.conteudo}`;
    }
}

const doc = new Texto("Lembrete", "Comprar café");
console.log(doc.exibir());