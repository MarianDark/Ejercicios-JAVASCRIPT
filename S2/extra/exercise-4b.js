//Usando la función anterior beneficiate de poder conocer el indice del array para crear una función llamada removeItem que pasandole un array y un texto como parametros (los mismos parametros que en el anterior ejercicio) llame a la función anteriormente creada findArrayIndex y obten el indice para posteriormente usar la función de javascript .splice() para eliminar el elemento del array. Finalmente retorna el array.
//De nuevo haz varios ejemplos para practicar y comprueba que funcionan correctamente.

function findArrayIndex(array, text) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === text) {
            return i;
        }
    }
    return -1; 
}

function removeItem(array, text) {
    const index = findArrayIndex(array, text);
    if (index !== -1) {
        array.splice(index, 1);
    }
    return array;
}

const array1 = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'];
console.log(removeItem(array1, 'Salamandra')); 

const array2 = ['Manzana', 'Pera', 'Uva', 'Melocotón'];
console.log(removeItem(array2, 'Pera')); 

const array3 = ['Perro', 'Gato', 'Ardilla', 'Pájaro'];
console.log(removeItem(array3, 'Tortuga'));
