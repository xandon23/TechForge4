class Pagamento {
    processar(): void {
        console.log("Processando pagamento genérico...");
    }
}

class PagamentoCartao extends Pagamento {
    constructor(private numeroCartao: string) { super(); }

    processar(): void {
        if (this.numeroCartao.length === 16) {
            console.log("Validando cartão... Pagamento aprovado!");
        } else {
            console.log("Erro: Número de cartão inválido.");
        }
    }
}

class PagamentoBoleto extends Pagamento {
    processar(): void {
        const codigoBoleto = Math.floor(Math.random() * 1000000000);
        console.log(`Gerando boleto com código: ${codigoBoleto}`);
    }
}

function executarPagamento(pagamento: Pagamento) {
    pagamento.processar();
}

const compra1 = new PagamentoCartao("1234123412341234");
const compra2 = new PagamentoBoleto();

executarPagamento(compra1);
executarPagamento(compra2);