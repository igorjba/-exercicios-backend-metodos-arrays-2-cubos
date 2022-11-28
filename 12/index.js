const pessoas = [
    {
        nome: "Antonio",
        idade: 30,
        profissao: "Jornalista",
    },
    {
        nome: "Maria",
        idade: 30,
        profissao: "Jornalista",
    },
    {
        nome: "Ana",
        idade: 21,
        profissao: "Programador",
    },
    {
        nome: "Beatriz",
        idade: 20,
        profissao: "Programador",
    },
    {
        nome: "José",
        idade: 32,
        profissao: "Jornalista",
    },
    {
        nome: "Marcos",
        idade: 30,
        profissao: "Programador",
    },
];

const carreira = "Programador";
const idade = 20;


const pessoasPorIdade = pessoas.filter((pessoa) => {

    return pessoa.idade > idade && pessoa.profissao === carreira;

});

const carreira2 = "Jornalista";
const idade2 = 30;

const pessoasPorIdade2 = pessoas.filter((pessoa) => {

    return pessoa.idade > idade && pessoa.profissao === carreira2;

});

const idade3 = 29;

const pessoasPorIdade3 = pessoas.filter((pessoa) => {

    return pessoa.idade <= idade3 && (pessoa.profissao === carreira2 || pessoa.profissao === carreira);

});



console.log(pessoasPorIdade3);






