const nomes = [
    "Maria",
    "João",
    "José",
    "Antonio",
    "Beatriz",
    "Camila",
    "amanda",
];

const verificarNomesComA = nomes.filter((nome) => {
    return nome.slice(0, 1).toLowerCase() === "c";
});

console.log(verificarNomesComA);
