/**
 * Crear algoritmo que devuelva número menor y mayor de un array.
 */

let array = [2,5,7,15,-5,-100,55];

function obtenerMenorMayor(array){
    let menor = array[0];
    let mayor = array[0];

    for(num of array){
       menor = menor<num ? menor: num;
       mayor = mayor>num ? mayor: num;
    }
    
    return [menor,mayor];


}

let numeros = obtenerMenorMayor(array);

console.log(numeros);

