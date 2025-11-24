class Produto {
    nome: string;
    preco: number;
    quantidade: number;

    constructor(nome: string, preco: number, quantidade: number) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }

    calcularTotalEstoque(): number {
        return this.preco * this.quantidade;
    }
}

const caneta = new Produto("Caneta Bic", 2.50, 100);
console.log(`Valor total em estoque: R$${caneta.calcularTotalEstoque()}`);