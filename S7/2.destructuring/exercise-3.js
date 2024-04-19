/* En base al siguiente javascript, usa destructuring para crear 2 variables igualandolo
a la función e imprimiendolo por consola.
 */

const animalFunction = () => {
  return { name: "Bengal Tiger", race: "Tiger" };
};

// Destructuring
const { name, race } = animalFunction();

// Imprimir las variables por consola
console.log("Name:", name);
console.log("Race:", race);
