const user = {id: 1};

user.name = "Alexis";


user.guardar = function(){
    console.log("Guardando al usuario "+user.name+"...");
}

user.guardar();

delete user.name;
delete user.guardar;

console.log(user);


//El método Object.freeze({}); hace que no puedas cambiar los atributos del objeto
const user1 = Object.freeze({id:1, name:"Pedro"});

user1.id = 3;
user1.name ="Pepe";

console.log(user1);


//El método Object.seal({}); hace que no podamos agregar o eliminar atributos pero si alterar su valor

const user2 = Object.seal({id:3, name:"Juanete"});

user2.id = 200;
user.name = "Juanita";

console.log(user2);