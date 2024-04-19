const userAnswers = [];

function confirmExample(description) {
  const result = confirm(description);
  return result;
}

function promptExample(description) {
  const result = prompt(description);
  return result;
}

function father(description, callback) {
  const result = callback(description);
  userAnswers.push(result);
}

father("¿Estás seguro de continuar?", confirmExample);
father("Ingrese su nombre:", promptExample);
father("¿Desea suscribirse al boletín?", confirmExample);

console.log(userAnswers);
