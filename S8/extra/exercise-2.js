// Hacer una solicitud HTTP GET a la URL http://localhost:3000/diary
fetch("http://localhost:3000/diary")
  .then((response) => response.json()) // Convertir la respuesta a JSON
  .then((data) => {
    // Ordenar las notas por fecha de menor a mayor
    data.sort((a, b) => new Date(a.date) - new Date(b.date));

    // Crear un div para cada nota del diario
    const diaryDiv = document.getElementById("diaryEntries");
    data.forEach((entry) => {
      const entryDiv = document.createElement("div");

      // Añadir título, fecha y descripción
      const titleHeading = document.createElement("h3");
      titleHeading.textContent = entry.title;

      const dateSubtitle = document.createElement("h5");
      dateSubtitle.textContent = new Date(entry.date).toLocaleDateString();

      const descriptionParagraph = document.createElement("p");
      descriptionParagraph.textContent = entry.description;

      // Botón para eliminar la nota
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Eliminar";
      deleteButton.addEventListener("click", () => {
        // Lógica para eliminar la nota (puedes implementarlo según tu necesidad)
        // Por ejemplo, podrías hacer otra solicitud fetch a una URL que maneje la eliminación de la nota
        console.log("Eliminar nota:", entry.id);
      });

      // Agregar elementos al div de la entrada
      entryDiv.appendChild(titleHeading);
      entryDiv.appendChild(dateSubtitle);
      entryDiv.appendChild(descriptionParagraph);
      entryDiv.appendChild(deleteButton);

      // Agregar el div de la entrada al contenedor principal
      diaryDiv.appendChild(entryDiv);
    });
  })
  .catch((error) => {
    // Manejar cualquier error que ocurra durante la solicitud
    console.error("Error al obtener las notas del diario:", error);
  });
