/**
 * Crear algoritmo que tome un array de objetos y devuelva un array de pares
 */

let array =[
    {id:1,nombre:"Alexis"},
    {id:2,nombre:"Roberto"},
    {id:3,nombre:"Pablito"}
];

let pares = [
    [1,{id:1,nombre:"Alexis"}],
    [2,{id:2,nombre:"Roberto"}],
    [3,{id:3,nombre:"Pablito"}]
];

function toPairs(array){

    let pairs = [];

    for(idx in array){
        pairs[idx] = [array[idx].id,array];
    }

    return pairs;

}

let resultado = toPairs(array);
console.log(resultado);