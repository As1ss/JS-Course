let a =1;
let b=a;

b++;
console.log(a,b); //Resultado de b = 2


let c ={};
let d = c; // Asignamos el objeto d a la misma dirección en memoria que c
/**
 * Al asignar una propiedad al objeto d se le asigna a c 
 * también porque apunta a la misma dirección en memoria
 */
d.prop = 20; 

console.log(c,d);


let e = 1;

function suma(n){
    n++;
}
/**
 * El valor de la variable será el mismo porque cuando se le pasa como parámetro se crea otra variable con el
 * mismo valor que apunta a otra dirección de memoria, 
 * al ser un tipo de dato primitivo recuerda que los valores se almacenan directamente en una 
 * dirección en memoria. 
 * Para poder modificar el valor de e deberiamos agregarlo de nuevo retornando el valor en la función.
 */
suma(e);
console.log(e); 


let f = {prop:0};

function sumaObjeto(object){
    object.prop;
}

/**
 * Aquí si se aumenta el valor del atributo prop del objeto f porque los objetos se pasan por referencia, es 
 * decir, tanto el objeto como el que se le pasa como parámetro apuntan a la misma dirección en memoria
 * que es donde se encuentra dicho objeto.
 */
sumaObjeto(f);

console.log(f);

