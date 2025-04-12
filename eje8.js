//Mostrar los multiplos de 2 y 5 menores a 100
var num1 = 2
var num2 = 5
function multiplos(num1, num2){
    let resultado = [];
    for (let i = 1; i < 100; i++) {
        if (i % num1 === 0 && i % num2 === 0) {
            resultado.push(i);
        }
    }
    return resultado;
}
console.log(multiplos(num1,num2))

