function saludar(){
    console.log("Hola Mundolf!");
}

saludar();

function saludar(nombre){
    console.log("Hola "+nombre);

}

saludar("Juan");


function suma(a,b){
    return a+b;
}

const resultado = suma(5,10);

console.log("funcion suma: "+resultado)


const sumar = (a,b) => {

    return a+b;
}

console.log("arrow function: "+sumar(20,10));


const sumarr = function(a,b){
    return a+b;
}

console.log("funcion como expresión: "+sumarr(5,8));