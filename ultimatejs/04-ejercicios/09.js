/**
 * Crear algoritmo que devuelva un array de objetos en base a pares
 */


let pairs = [
    [1, {name:"Alexis"}],
    [2,{name:"Roberto"}],
    [3,{name:"Pablito"}]
]

let array =[
    {id:1,nombre:"Alexis"},
    {id:2,nombre:"Roberto"},
    {id:3,nombre:"Pablito"},
]

function toCollection(arr){

    let arrayObjetos =[];

    for (idx in arr){
        arrayObjetos[idx] = [{indice:arr[0],nombre:arr[1]}];
    }
    
    return arrayObjetos;

}

let resultado = toCollection(pairs);

console.log(array);