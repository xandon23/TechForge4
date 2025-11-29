interface ProdutoLoja {
    codigo: number;
    nome: string;
}

class Loja {
    produtos: ProdutoLoja[] = [
        { codigo: 101, nome: "Teclado" },
        { codigo: 102, nome: "Mouse" },
        { codigo: 103, nome: "Monitor" }
    ];

    buscarProdutoPorCodigo(codigo: number): ProdutoLoja | undefined {
        return this.produtos.find(p => p.codigo === codigo);
    }
}

const minhaLoja = new Loja();
console.log(minhaLoja.buscarProdutoPorCodigo(102)); 
console.log(minhaLoja.buscarProdutoPorCodigo(999)); 