const livros = ['Guerra e Paz', 'A Montanha Mágica', 'Cem Anos de Solidão', 'Dom Quixote', 'A Divina Comédia'];
const nomeDoLivro = "Dom Quixote";

const localDoLivro = livros.findIndex((livro) => {

    return livro === nomeDoLivro

});

console.log(localDoLivro);