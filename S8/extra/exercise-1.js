document.addEventListener("DOMContentLoaded", function () {
  const gallery = document.getElementById("gallery");

  fetch("https://breakingbadapi.com/api/characters")
    .then((response) => response.json())
    .then((characters) => {
      characters.forEach((character) => {
        const characterElement = document.createElement("div");
        characterElement.classList.add("character");

        const image = document.createElement("img");
        image.src = character.img;
        image.alt = character.name;

        const name = document.createElement("h2");
        name.textContent = character.name;

        characterElement.appendChild(image);
        characterElement.appendChild(name);

        gallery.appendChild(characterElement);
      });
    })
    .catch((error) => {
      console.error("Error fetching characters:", error);
    });
});
