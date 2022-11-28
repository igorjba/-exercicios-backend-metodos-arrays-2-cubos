//Olhar cada fruta da lista
//Colocar cada fruta da lista em letra minuscula
//Olhar cada fruta da lista
//Separar a primeira letra de cada fruta
//Transformar a primeira letra de cada fruta em maiuscula
//Juntar cada fruta separada
//coletar o indice de cada fruta
//juntar o indice com cada fruta
//inserir num array

const frutas = ["Manga", "UVA", "abacaxi", "banaNA", "MAçã"];

const ajustarLetras = ((lista) => {
    const ListaMinusculo = lista.map((fruta) => {

        return fruta.toLowerCase();

    });

    let frutaMaiuscula = [];

    const ListaMaiuscula = ListaMinusculo.map((nomeDaFruta) => {

        let primeiraLetra = nomeDaFruta.slice(0, 1);
        let segundaLetra = nomeDaFruta.slice(1);

        frutaMaiuscula.push(primeiraLetra.toUpperCase() + segundaLetra)

    });

    let frutaComIndice = [];

    const ListaComIndice = frutaMaiuscula.map((nome) => {
        let indiceDaFruta = frutaMaiuscula.indexOf(nome)

        frutaComIndice.push(indiceDaFruta + " - " + nome);

    });

    console.log(frutaComIndice);

});

ajustarLetras(frutas);