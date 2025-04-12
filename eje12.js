// Crear una lista de objetos con las propiedades: nombre, sexo biológico y edad
const personas = [
    { nombre: "Ana", sexo: "F", edad: 25 },
    { nombre: "Luis", sexo: "M", edad: 30 },
    { nombre: "María", sexo: "F", edad: 35 },
    { nombre: "Carlos", sexo: "M", edad: 20 },
    { nombre: "Sofía", sexo: "F", edad: 28 }
];

// Calcular el promedio de edad
const promedioEdad = personas.reduce((sum, persona) => sum + persona.edad, 0) / personas.length;

// Obtener el nombre de la mujer con mayor edad
const mujerMayor = personas
    .filter(persona => persona.sexo === "F")
    .reduce((mayor, persona) => (persona.edad > mayor.edad ? persona : mayor), { edad: 0 }).nombre;

// Obtener el nombre del hombre con menor edad
const hombreMenor = personas
    .filter(persona => persona.sexo === "M")
    .reduce((menor, persona) => (persona.edad < menor.edad ? persona : menor), { edad: Infinity }).nombre;

// Calcular el promedio de edad de las mujeres
const mujeres = personas.filter(persona => persona.sexo === "F");
const promedioEdadMujeres = mujeres.reduce((sum, mujer) => sum + mujer.edad, 0) / mujeres.length;

// Mostrar los resultados
console.log("Promedio de edad:", promedioEdad);
console.log("Nombre de la mujer con mayor edad:", mujerMayor);
console.log("Nombre del hombre con menor edad:", hombreMenor);
console.log("Promedio de edad de las mujeres:", promedioEdadMujeres);














