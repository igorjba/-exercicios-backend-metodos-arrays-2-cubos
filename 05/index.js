const usuarios = [
    {
        nome: "André",
        idade: 29,
        habilitado: false,
    },
    {
        nome: "Marcos",
        idade: 70,
        habilitado: true,
    },
    {
        nome: "Ana",
        idade: 35,
        habilitado: true,
    },
    {
        nome: "Vinícius",
        idade: 44,
        habilitado: true,
    },
    {
        nome: "Carlos",
        idade: 17,
        habilitado: true,
    },
    {
        nome: "Maria",
        idade: 19,
        habilitado: false,
    },
];

const validarMotorista = ((listaDeUsuarios) => {

    const maiorIdade = listaDeUsuarios.every((candidato) => {

        return candidato.idade >= 18 && candidato.idade <= 65;

    });

    if (maiorIdade) {

        // const habilitados = listaDeUsuarios.filter((pessoa) => {
        //     return pessoa.habilitado === true;

        // }); //não precisa dessa constante

        const naoHabilitados = listaDeUsuarios.filter((pessoa) => {
            return pessoa.habilitado === false;

        });

        if (naoHabilitados.length === 0) {

            console.log("todos passaram no teste");

        } else {

            console.log("todos precisam estar habilitados");

        }

    } else {

        console.log("todos precisam estar habilitados");

    };
});

validarMotorista(usuarios);