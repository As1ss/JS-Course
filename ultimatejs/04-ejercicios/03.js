/**
 * indice validar que no sea menor a cero y que el elemento exista en el array
 */

let numeros = [1,21,34,55,61];

function validarArray(numeros,indice){
    if(indice<0  || indice>=numeros.length){
        console.log("El índice es inválido.");
    }
    else{
        return numeros[indice];
    }

}

let resultado = validarArray(numeros,6);

console.log(resultado);