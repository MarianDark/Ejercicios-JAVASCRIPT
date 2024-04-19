
const divsInsertHere = document.querySelectorAll('.fn-insert-here');

divsInsertHere.forEach(div => {
    const parrafo = document.createElement('p');
    parrafo.textContent = 'Voy dentro!';
    div.appendChild(parrafo);
});
