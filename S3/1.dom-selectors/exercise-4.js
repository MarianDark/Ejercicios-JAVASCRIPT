document.addEventListener('DOMContentLoaded', function () {
  const pokemonElements = document.querySelectorAll('.pokemon');
  
  pokemonElements.forEach(element => {
      console.log(element.textContent);
  });
});