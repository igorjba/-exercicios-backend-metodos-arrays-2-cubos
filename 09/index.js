const numeros = [10, 987, -886, 0, 12, 199, -45, -67]

const verificarNumerosPositivos = ((listaDeNumeros) => {
    const numerosPositivos = listaDeNumeros.filter((numero) => {
        return numero > 0;
    })
    console.log(numerosPositivos);
})

verificarNumerosPositivos(numeros)