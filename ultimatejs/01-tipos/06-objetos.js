let nombre = "Alexis";
let apellido = "Lopez"
let edad = 29;

let persona ={
    nombre:"Alexis", apellido:"Lopez", edad: 29
};


console.log(persona);
console.log(persona.nombre);
console.log(persona["apellido"]);


delete persona.apellido

console.log(persona)