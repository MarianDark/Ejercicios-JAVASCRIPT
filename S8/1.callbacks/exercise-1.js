const numbersList = [];

function sum(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function father(a, b, callback) {
  const result = callback(a, b);
  numbersList.push(result);
}

father(5, 3, sum);

father(10, 6, subtract);

father(8, 2, sum);

father(20, 12, subtract);

console.log("numbersList:", numbersList);
