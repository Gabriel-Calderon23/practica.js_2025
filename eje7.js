//Ingresar dos números y mostrar los múltiplos de 3 comprendidos entre ambos

var num1 = 5
var num2 = 10
function multiplos(num1, num2){
    let resultado = [];
    if (num1 > num2) {
        for (let i = num2; i <= num1; i++) {
            if (i % 3 === 0) {
                resultado.push(i);
            }
        }
    } else {
        for (let i = num1; i <= num2; i++) {
            if (i % 3 === 0) {
                resultado.push(i);
            }
        }
    }
    return resultado;
}
console.log(multiplos(num1,num2))
