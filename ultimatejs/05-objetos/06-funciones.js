
function Usuario(nombre){
    this.nombre= nombre;
}

console.log(Usuario.name);
console.log(Usuario.length);

const U = Usuario;
let user = new U('Nicolas');

console.log(user);


//Podemos crear una funcion que retorna otra funcion
function of(Fn,arg){
    return new Fn(arg);
}

let user1 = of(Usuario,"Alexis");

console.log(user1);

function returned(){
    return function(){
        console.log("Hola mundo");
    }
}

let saludo = returned();

saludo();