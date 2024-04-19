document.addEventListener('DOMContentLoaded', () => {
    const galleryContainer = document.querySelector('.b-gallery');
    const loadMoreButton = document.createElement('button');
    loadMoreButton.textContent = 'Cargar más';
    loadMoreButton.classList.add('b-btn');
    loadMoreButton.addEventListener('click', loadMoreCharacters);

    let currentPage = 1;

    function loadCharacters(page) {
        const url = `http://localhost:3000/characters?_page=${page}&_limit=5`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                data.forEach(character => {
                    const characterElement = createCharacterElement(character);
                    galleryContainer.appendChild(characterElement);
                });
                if (data.length < 5) {
                    galleryContainer.removeChild(loadMoreButton);
                }
            })
            .catch(error => console.error('Error loading characters:', error));
    }

    function createCharacterElement(character) {
        const item = document.createElement('div');
        item.classList.add('b-gallery__item');

        const img = document.createElement('img');
        img.src = character.image;
        img.alt = character.name;
        img.classList.add('b-gallery__img');
        item.appendChild(img);

        const text = document.createElement('p');
        text.textContent = character.name;
        text.classList.add('b-gallery__text');
        item.appendChild(text);

        return item;
    }

    function loadMoreCharacters() {
        currentPage++;
        loadCharacters(currentPage);
    }

    loadCharacters(currentPage);
    galleryContainer.appendChild(loadMoreButton);
});
