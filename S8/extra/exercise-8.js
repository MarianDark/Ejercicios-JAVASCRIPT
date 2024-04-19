// Función para cargar la galería de películas Ghibli
async function loadGhibliGallery() {
    const response = await fetch('https://ghibliapi.herokuapp.com/films');
    const movies = await response.json();
    const gallery = document.getElementById('ghibliGallery');

    movies.forEach(movie => {
        const movieDiv = document.createElement('div');
        movieDiv.className = 'ghibliMovie';
        movieDiv.innerHTML = `
            <img src="${movie.image}" alt="${movie.title}">
            <h3>${movie.title}</h3>
        `;
        gallery.appendChild(movieDiv);
    });
}

// Función para solicitar imágenes de gatos y mostrarlas con botón de eliminación
function callACat() {
    fetch('https://api.thecatapi.com/v1/images/search')
        .then(response => response.json())
        .then(data => {
            const catDiv = document.createElement('div');
            catDiv.className = 'catImage';
            catDiv.innerHTML = `
                <img src="${data[0].url}" alt="Imagen de Gato">
                <button class="deleteCat">Eliminar</button>
            `;
            document.getElementById('catGallery').appendChild(catDiv);

            // Funcionalidad para eliminar la imagen del gato
            catDiv.querySelector('.deleteCat').addEventListener('click', function() {
                catDiv.remove();
            });
        });
}

document.getElementById('callCat').addEventListener('click', callACat);

// Inicializar
loadGhibliGallery();
