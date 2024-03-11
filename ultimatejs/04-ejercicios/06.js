/**
 * Crear algoritmo que devuelva cantida de números positivos de un array
 */

let array =[2,5,7,15,-5,-100,55];

function obtenerPositivos(array){

    let positivos = 0;

    for (i=0;i<array.length;i++){
        positivos = array[i]>0? positivos+=1: positivos; 
    }

    return positivos;

}

let resultado = obtenerPositivos(array);
console.log(resultado);