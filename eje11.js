//Ingresar una palabra e identificar la letras distintas y sus repeticiones. Por ejemplo: PALA (P = 1, A = 2, L = 1). Utilizar un objeto literal

var palabra = "murcielago";
var letras = {};

for (var i = 0; i < palabra.length; i++) {
    var letra = palabra[i].toUpperCase(); // Convertir a mayúscula para evitar duplicados
    if (letras[letra]) {
        letras[letra]++;
    } else {
        letras[letra] = 1;
    }
}
console.log(letras); // { P: 1, A: 2, L: 1 }

