// Carga la galería de películas de Studio Ghibli
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

// Manejar el formulario para añadir nuevos luchadores
document.getElementById('newFighterForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newFighter = {
        name: formData.get('name'),
        avatar: formData.get('avatar'),
        critic: parseInt(formData.get('critic'), 10),
        defense: parseInt(formData.get('defense'), 10),
        vitality: parseInt(formData.get('vitality'), 10),
        damage: formData.get('damage')
    };

    await fetch('http://localhost:3000/characters', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newFighter),
    });

    alert('Luchador añadido correctamente');
    e.target.reset(); // Reinicia el formulario
});

// Inicializar la carga de la galería y los personajes
loadGhibliGallery();
