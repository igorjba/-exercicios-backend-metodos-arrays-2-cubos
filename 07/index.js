const endereços = [
    { cep: 00111222, rua: "Rua dos Artistas" },
    { cep: 00111333, rua: "Rua Augusta" },
    { cep: 00222444, rua: "Avenida Paralela" },
    { cep: 11222333, rua: "Rua Carlos Gomes" }
];

const encontrarRua = ((arrayDeEnderecos, localProcurado) => {
    const cepEncontrado = arrayDeEnderecos.find((endereco) => {
        return endereco.cep === localProcurado;
    });
    const ruaEncontrada = cepEncontrado.rua;

    console.log(ruaEncontrada);
});

encontrarRua(endereços, 11222333);