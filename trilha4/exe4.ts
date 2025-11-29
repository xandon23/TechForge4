interface Livro {
    titulo: string;
    autor: string;
    disponivel: boolean;
}

class Biblioteca {
    acervo: Livro[] = [
        { titulo: "Dom Quixote", autor: "Cervantes", disponivel: true },
        { titulo: "1984", autor: "Orwell", disponivel: false },
        { titulo: "O Pequeno Príncipe", autor: "Saint-Exupéry", disponivel: true }
    ];

    buscarLivrosDisponiveis(): Livro[] {
        return this.acervo.filter(livro => livro.disponivel === true);
    }
}

const biblio = new Biblioteca();
console.log(biblio.buscarLivrosDisponiveis());