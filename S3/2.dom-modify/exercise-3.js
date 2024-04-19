document.addEventListener("DOMContentLoaded", function () {
  const newDiv = document.createElement("div");

  newDiv.classList.add("contenedor-div");

  for (let i = 1; i <= 6; i++) {
    const newParagraph = document.createElement("p");
    newParagraph.textContent = "Este es el párrafo " + i;
    newDiv.appendChild(newParagraph);
  }

  document.body.appendChild(newDiv);
});
