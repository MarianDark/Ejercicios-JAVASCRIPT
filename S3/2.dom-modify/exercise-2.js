document.addEventListener("DOMContentLoaded", function () {
  const newDiv = document.createElement("div");

  const newParagraph = document.createElement("p");

  newParagraph.textContent = "Este es el contenido del párrafo";

  newDiv.appendChild(newParagraph);

  newDiv.classList.add("contenedor-div");

  document.body.appendChild(newDiv);
});
