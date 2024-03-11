//Creación de ojbetos 

let obj = {};
let obj2 = new Object();

/**
 * new String(); "" '' ``
 * new Number(); 12
 * new Boolean(); true false
 * new Array() []
 * 
 */

function Usuario(){
    this.name="Alexander";
}

let user = new Usuario();

console.log(user);


let mensaje  = "1 + 1";
let mensajeObjeto = new String("1 + 1");

console.log(mensaje,mensajeObjeto.valueOf());