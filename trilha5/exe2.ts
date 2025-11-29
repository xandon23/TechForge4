abstract class Inventory {
    protected items: Record<string, number> = {};

    abstract addItem(item: string, quantity: number): void;
    abstract removeItem(item: string): void;
    abstract getInventory(): Record<string, number>;
}

class WarehouseInventory extends Inventory {
    addItem(item: string, quantity: number): void {
        const qtdAtual = this.items[item] || 0;
        this.items[item] = qtdAtual + quantity;
    }

    removeItem(item: string): void {
        delete this.items[item];
    }

    getInventory(): Record<string, number> {
        return this.items;
    }
}

class StoreInventory extends Inventory {
    addItem(item: string, quantity: number): void {
        const qtdAtual = this.items[item] || 0;
        const totalFinal = qtdAtual + quantity;

        if (totalFinal > 10) {
            console.log(`Erro: Limite de estoque excedido para ${item}. Máximo permitido: 10.`);
        } else {
            this.items[item] = totalFinal;
        }
    }

    removeItem(item: string): void {
        delete this.items[item];
    }

    getInventory(): Record<string, number> {
        return this.items;
    }
}