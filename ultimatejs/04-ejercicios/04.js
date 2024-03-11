/**
 * Realizar un método que devuelva los números impares del 1 al 10
 */

let i  = 0;

for(i=0;i<=10;i++){
    if(i%2==0){
        continue;
    }
    else{
        console.log("impar",i);
    }
}
