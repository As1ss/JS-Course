

empleado = {
    id: 1,
    nombre: "Joaquín",
    edad: 25,
    accion: function(){
        console.log(this.nombre+ " está trabajando...");
    }
}


//delete empleado.accion;
 
if("accion" in empleado){
    empleado.accion();
}


console.log(Object.keys(empleado)); //["id","nombre","edad","accion"]


console.log("---------------------------------");

//El metodo Object.keys(objeto) devuelve un array de las claves (propiedades) de un objeto
for (llave of Object.keys(empleado)){
    console.log(llave); // id, nombre, edad, accion
    console.log(llave,empleado[llave]) // id 1, nombre Joaquin, etc.
}
console.log("---------------------------------");

//El método Object.entries(objeto) devuelve una matriz (array de arrays) con clave y valor de los atributos.

console.log(Object.entries(empleado));
for(llave of Object.entries(empleado)){
    console.log(llave); // [["id",1],["nombre","Joaquin"],["edad",25],["accion",f]]
}


console.log("---------------------------------");
//El método que se debería utilizar y el mas actual es el iterar los atributos de un objeto con
// la palabra clave in dentro de un for

for (llave in empleado){
    console.log(llave); // id, nombre, edad, accion
    console.log(llave,empleado[llave]); //id 1, nombre Joaquin, etc.
}