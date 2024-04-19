const textBox = document.querySelector('input');

textBox.addEventListener('input', function () {
    console.log(`el valor del input es: ${textBox.value}`)
});