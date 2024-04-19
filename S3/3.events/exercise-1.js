const button = document.createElement("button");

button.id = "btnToClick";
button.textContent = "Haz click";

document.body.appendChild(button);

button.addEventListener("click", function (evento) {
  console.log(`La informacion del evento es: ${evento}`);
});
