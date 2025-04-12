//Ingresar dos valores enteros y enumerar los elementos que los separan.
var num1 = 5
var num2 = 1
function separacion(num1, num2){
    let resultado = [];
    if (num1 > num2) {
        for (let i = num1 - 1; i > num2; i--) {
            resultado.push(i);
        }
    } else {
        for (let i = num2 - 1; i > num1; i--) {
            resultado.push(i);
        }
    }
    return resultado;
}
console.log(separacion(num1,num2))