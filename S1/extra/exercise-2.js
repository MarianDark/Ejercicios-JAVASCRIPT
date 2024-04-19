//Usa un for para remplazar todas las comidas que no sean veganas con las comidas del array de frutas. Recuerda no usar frutas duplicadas. Finalmente, imprime el array resultante.

const fruits = ['Strawberry', 'Banana', 'Orange', 'Apple'];
const foodSchedule = [
    {name: "Salad", isVegan: true},
    {name: "Salmon", isVegan: false},
    {name: "Tofu", isVegan: true},
    {name: "Burger", isVegan: false},
    {name: "Rice", isVegan: true},
    {name: "Pasta", isVegan: true}
];

for (let i = 0; i < foodSchedule.length; i++) {
    if (!foodSchedule[i].isVegan) {
        let fruitIndex = 0;
        while (fruits.includes(foodSchedule[i].name) && fruitIndex < fruits.length) {
            fruitIndex++;
        }
        if (fruitIndex < fruits.length) {
            foodSchedule[i].name = fruits[fruitIndex];
        }
    }
}

console.log(foodSchedule);

