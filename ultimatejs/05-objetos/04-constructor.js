// {id: 1, recuperarClave: function(){}}


//Constructor vacío

function Usuario(){
    this.id = 1;
    this.recuperacionClave = function(){
        console.log("Recuperando clave...");
    }
}

let usuario = new Usuario();

console.log(usuario);

//Constructor con parametros
function Usuario(id,recuperacionClave){
this.id=id;
this.recuperacionClave=recuperacionClave;
}

function recuperacionClave(){
    console.log("Recuperando claveee...");
}

let usuario1 = new Usuario(2,recuperacionClave);

console.log(usuario1);

