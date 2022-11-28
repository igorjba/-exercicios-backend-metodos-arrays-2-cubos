const cidades = [
    "Salvador",
    "São Paulo",
    "Brasilia",
    "Recife",
    "Rio de Janeiro",
];

const verificarCidade = ((listaDeCidades) => {
    const cidadeMaiorQueOito = listaDeCidades.filter((cidade) => {
        return cidade.length <= 8;

    });
    const listaArrumada = cidadeMaiorQueOito.join(", ");
    console.log(listaArrumada);
});

verificarCidade(cidades);
