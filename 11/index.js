const nomes = [
    "Maria",
    "João",
    "José",
    "Antonio",
    "Beatriz",
    "Camila",
    "amanda",
];

const verificarNomes = ((listaDeNomes) => {

    let nomesComA = [];

    const verificarNomesComA = listaDeNomes.filter((nome) => {

        comA = nome.indexOf("A", 0, 0)

        coma = nome.indexOf("a", 0, 0)
        if (comA === 0 || coma === 0) {
            nomesComA.push(nome);
        }

    });

    console.log(nomesComA);

});

verificarNomes(nomes)