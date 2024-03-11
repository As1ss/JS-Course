function crearUsuario(name,email){
    return {
        name,
        email,
        activo:true,
        recuperacionClave: function() {
            console.log("Recuperando clave...");
        }
    };
}

let user1= crearUsuario("Alexis","alexis@test.com");
let user2= crearUsuario("Roberto","roberto@test.com");


console.log(user1,user2);