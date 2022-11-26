const palavras = ["livro", "caneta", "sol", "carro", "orelha"];

const verificarPalavra = palavras.every((palavra) => {

    return palavra.length < 6;

});

console.log(verificarPalavra);