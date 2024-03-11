
function Vehiculo(){
    this.arrancarVehiculo=function(){
        console.log(this.vehiculo+ " está arrancando...");
    }
}

let avion = {
    vehiculo:"Avion"
}

let coche = {
    vehiculo :"Coche"
}

let moto = {
    vehiculo: "Moto"
}


let vehiculo = new Vehiculo();

let arancarAvion = vehiculo.arrancarVehiculo.call(avion);
/**
 *  let arrancarAvion = vehiculo.arrancarVehiculo.apply(avion); //apply es para definir los argumentos
        dentro de una coleccion los atributos [1,2]
 * */ 
let arrancarCoche = vehiculo.arrancarVehiculo.call(coche);
let arrancarMoto = vehiculo.arrancarVehiculo.call(moto);








// //Ejemplo de una inusual forma de crear una funcion
// const Point = new Function("x","y",`

//     this.x=x;
//     this.y=y;
//     this.dibujar = function(){
//         console.log("Dibujando...");
//     }

// `);

// const p = new Point(1,2);

// console.log(p);