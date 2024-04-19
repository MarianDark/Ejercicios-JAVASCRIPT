document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll('[data-function="testMe"]');

  if (elements.length >= 3) {
    const thirdElement = elements[2];
    console.log(thirdElement.textContent);
  } else {
    console.log("No hay suficientes elementos");
  }
});
