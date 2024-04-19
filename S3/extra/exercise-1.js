// Array de países
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const body = document.querySelector('body');

const lista = document.createElement('ul');


countries.forEach(pais => {
    const itemLista = document.createElement('li');
    itemLista.textContent = pais;
    lista.appendChild(itemLista);
});

body.appendChild(lista);
