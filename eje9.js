// Obtener la suma de los elementos de un array

var numeros = [1,2,3,4,5,6,7,8]
function sumaArray(numeros){
    let resultado = 0;
    for (let i = 0; i < numeros.length; i++) {
        resultado += numeros[i];
    }
    return resultado;
}
console.log(sumaArray(numeros))