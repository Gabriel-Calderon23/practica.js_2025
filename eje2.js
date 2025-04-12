//Ingresar tres valores e indicar cual es el mayor y cual el menor.

var num1 =5;
var num2 = 1;
var num3 = 3;
var mayor = 0
var menor = 0
for ( mayor=0; mayor<num1; mayor++){
    if (num1>num2){
        mayor=num1
    }else{
        mayor=num2
    }
}
console.log("el mayor es: "+ mayor)
for ( menor=0; menor<num3; menor++){
    if (num3<num2){
        menor=num3
    }else{
        menor=num2
    }
}
console.log("el menor es: "+ menor)