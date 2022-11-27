const palavras = ["arroz", "feijão", "carne", "macarrão"]
const bebidaUM = "cerveja";
const bebidaDois = "vodka";

const verificarLista = (lista) => {

    const encontrou = lista.some((bebida) => {

        return bebida === bebidaUM || bebida === bebidaDois;

    });

    if (encontrou) {

        return console.log("revise sua lista, joão. possui bebida com venda proibida!");

    } else {

        return console.log("tudo certo, vamos as compras!");

    };

};

verificarLista(palavras);