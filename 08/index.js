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

const arrayModificado = frutas.map((fruta, indice) => {
    return `${indice} - ${fruta.slice(0, 1).toUpperCase()}${fruta.slice(1).toLowerCase()}`;
});

console.log(arrayModificado);