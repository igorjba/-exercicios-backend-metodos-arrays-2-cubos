const numeros = [0, 122, 4, 6, 7, 8, 44]

const verificarPar = ((lista) => {
    const par = lista.every((numero) => {
        return numero % 2 === 0;
    })

    if (par === true) {
        console.log("array válido");


    } else {

        console.log("array inválido");

    }
});

verificarPar(numeros);