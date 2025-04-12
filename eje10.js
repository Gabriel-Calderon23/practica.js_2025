//Sumar solo los elementos pares de un array.
var numeros = [1,2,3,4,5,6,7,8]
function sumaPares(numeros){
    let resultado = 0;
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
            resultado += numeros[i];
        }
    }
    return resultado;
}
console.log(sumaPares(numeros))