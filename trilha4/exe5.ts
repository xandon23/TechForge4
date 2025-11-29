interface LivroBiblioteca {
    titulo: string;
    autor: string;
    genero: string;
    disponivel: boolean;
}

class BibliotecaGestao {
    livros: LivroBiblioteca[] = [
        { titulo: "Harry Potter", autor: "J.K. Rowling", genero: "Fantasia", disponivel: false },
        { titulo: "O Senhor dos Anéis", autor: "Tolkien", genero: "Fantasia", disponivel: true },
        { titulo: "It: A Coisa", autor: "Stephen King", genero: "Terror", disponivel: true },
        { titulo: "A Bússola de Ouro", autor: "Pullman", genero: "Fantasia", disponivel: true }
    ];

    filtrarPorGenero(genero: string): LivroBiblioteca[] {
        return this.livros.filter(l => l.genero === genero);
    }

    buscarPorAutor(autor: string): LivroBiblioteca[] {
        return this.livros.filter(l => l.autor === autor);
    }

    obterLivrosDisponiveisOrdenados(): LivroBiblioteca[] {
        return this.livros
            .filter(l => l.disponivel) 
            .sort((a, b) => a.titulo.localeCompare(b.titulo)); 
    }
}

const gestao = new BibliotecaGestao();
console.log("--- Fantasia ---");
console.log(gestao.filtrarPorGenero("Fantasia"));

console.log("--- Disponíveis Ordenados (A Bússola vem antes de O Senhor) ---");
console.log(gestao.obterLivrosDisponiveisOrdenados());