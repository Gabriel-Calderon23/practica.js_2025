// Crear una funcion que reciba 3 parametros: minimo, maximo y divisor. Devolver una lista con los divisores del numero ingresado.

function divisores(minimo, maximo, divisor) {
    let resultado = [];
    for (let i = minimo; i <= maximo; i++) {
        if (i % divisor === 0) {
            resultado.push(i);
        }
    }
    return resultado;
}
console.log(divisores(1, 100, 5)); // [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95]




