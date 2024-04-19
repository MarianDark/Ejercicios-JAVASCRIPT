const baseUrl = "https://api.nationalize.io?name=";

document.addEventListener("DOMContentLoaded", () => {
  const input = document.querySelector('input[type="text"]');
  const button = document.querySelector("button");

  button.addEventListener("click", () => {
    const name = input.value.trim(); // Obtener el valor del input y eliminar los espacios en blanco al inicio y al final
    if (name) {
      // Verificar que el valor del input no esté vacío
      const apiUrl = `${baseUrl}${name}`;
      fetch(apiUrl)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to fetch data");
          }
          return response.json();
        })
        .then((data) => {
          // Manejar la respuesta de la API aquí
          console.log(data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    } else {
      console.log("El campo de entrada está vacío");
    }
  });
});
