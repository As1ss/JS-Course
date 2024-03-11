/**
 * Crear array de longitud N, y que sus elementos sean numeros de 1 hasta N.
 */

let longitud = 7;

function recorrerArray(longitud){

    if(longitud<=0){
        return [];
    }
    else{
        let arrayNumeros = [];

        for (i=0;i<longitud;i++){
            arrayNumeros[i]=i+1;
        }
        return arrayNumeros;
    }

   

}

let resultado = recorrerArray(longitud);

console.log(resultado);