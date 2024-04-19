document.addEventListener("DOMContentLoaded", function () {
  const baseUrl = "https://api.nationalize.io?name=";

  const nameInput = document.getElementById("nameInput");
  const submitButton = document.getElementById("submitButton");
  const resultsDiv = document.getElementById("results");

  submitButton.addEventListener("click", function () {
    const name = nameInput.value.trim();

    if (name === "") {
      alert("Por favor, ingresa un nombre antes de consultar.");
      return;
    }

    fetch(baseUrl + name)
      .then((response) => {
        if (!response.ok) {
          throw new Error("No se pudo obtener una respuesta de la API.");
        }
        return response.json();
      })
      .then((data) => {
        displayResults(data);
      })
      .catch((error) => {
        console.error("Error al consultar la API:", error);
      });
  });

  function displayResults(data) {
    resultsDiv.innerHTML = "";

    if (data.country && data.country.length > 0) {
      data.country.forEach((country) => {
        const infoText = `El nombre ${nameInput.value} tiene un ${Math.round(
          country.probability * 100
        )} porciento de ser de ${country.country_id}`;
        const paragraph = document.createElement("p");
        paragraph.textContent = infoText;
        resultsDiv.appendChild(paragraph);

        // Crear botón 'X' para eliminar el párrafo asociado
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "X";
        paragraph.appendChild(deleteButton);

        // Agregar event listener para eliminar el párrafo cuando se hace clic en el botón 'X'
        deleteButton.addEventListener("click", function () {
          paragraph.remove();
        });
      });
    } else {
      const infoText = `No se encontraron resultados para el nombre ${nameInput.value}.`;
      const paragraph = document.createElement("p");
      paragraph.textContent = infoText;
      resultsDiv.appendChild(paragraph);
    }
  }
});
