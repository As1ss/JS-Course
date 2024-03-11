/*
Obtener el número mayor 
*/


function obtenerNumMayor(a,b){
    if(a>b){
        return a;
    }
    else if(b>a){
        return b;
    }
    else{
        console.log("Son iguales");
    }
    /*
    También se podría retornar el resultado de una expresión ternaria pero no obtenemos el resultado
    si son iguales
    */

    //return (a,b) ? a: b;
}

let resultado = obtenerNumMayor(10,5);

console.log(resultado);