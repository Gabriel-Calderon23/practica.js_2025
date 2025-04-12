// Para el ejercicio anterior, generar una funcion para cada uno de los requerimientos.
const personas = [
    { nombre: "Ana", sexo: "F", edad: 25 },
    { nombre: "Luis", sexo: "M", edad: 30 },
    { nombre: "María", sexo: "F", edad: 35 },
    { nombre: "Carlos", sexo: "M", edad: 20 },
    { nombre: "Sofía", sexo: "F", edad: 28 }
];
// Generar una función para calcular el promedio de edad
function calcularPromedioEdad(personas) {
    return personas.reduce((sum, persona) => sum + persona.edad, 0) / personas.length;
}

// Generar una función para obtener el nombre de la mujer con mayor edad
function obtenerMujerMayor(personas) {
    return personas
        .filter(persona => persona.sexo === "F")
        .reduce((mayor, persona) => (persona.edad > mayor.edad ? persona : mayor), { edad: 0 }).nombre;
}

// Generar una función para obtener el nombre del hombre con menor edad
function obtenerHombreMenor(personas) {
    return personas
        .filter(persona => persona.sexo === "M")
        .reduce((menor, persona) => (persona.edad < menor.edad ? persona : menor), { edad: Infinity }).nombre;
}

// Generar una función para calcular el promedio de edad de las mujeres
function calcularPromedioEdadMujeres(personas) {
    const mujeres = personas.filter(persona => persona.sexo === "F");
    return mujeres.reduce((sum, mujer) => sum + mujer.edad, 0) / mujeres.length;
}

// Mostrar los resultados utilizando las funciones
console.log("Promedio de edad:", calcularPromedioEdad(personas));
console.log("Nombre de la mujer con mayor edad:", obtenerMujerMayor(personas));
console.log("Nombre del hombre con menor edad:", obtenerHombreMenor(personas));
console.log("Promedio de edad de las mujeres:", calcularPromedioEdadMujeres(personas));

