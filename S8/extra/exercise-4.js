        // Función para obtener y mostrar los planetas
        fetch('http://localhost:3000/planets')
            .then(response => response.json())
            .then(planets => {
                const planetsDiv = document.getElementById('planets');
                planets.forEach(planet => {
                    const planetButton = document.createElement('button');
                    planetButton.textContent = planet.name;
                    planetButton.addEventListener('click', () => fetchCharacters(planet.id));
                    planetsDiv.appendChild(planetButton);
                });
            })
            .catch(error => console.error('Error al obtener los planetas:', error));

        // Función para obtener y mostrar los personajes asociados a un planeta
        function fetchCharacters(planetId) {
            const charactersDiv = document.getElementById('characters');
            charactersDiv.innerHTML = ''; // Limpiar los personajes anteriores

            // Crear input para filtrar personajes por nombre
            const filterInput = document.createElement('input');
            filterInput.setAttribute('type', 'text');
            filterInput.setAttribute('placeholder', 'Buscar por nombre');
            charactersDiv.appendChild(filterInput);

            // Hacer una solicitud para obtener los personajes del planeta seleccionado
            fetch(`http://localhost:3000/characters?idPlanet=${planetId}`)
                .then(response => response.json())
                .then(characters => {
                    // Filtrar personajes por nombre al escribir en el input
                    filterInput.addEventListener('input', () => filterCharacters(characters));

                    // Mostrar los personajes
                    characters.forEach(character => {
                        const characterDiv = document.createElement('div');
                        characterDiv.classList.add('character');

                        // Mostrar la imagen y el nombre del personaje
                        const characterImage = document.createElement('img');
                        characterImage.src = character.avatar;
                        characterImage.alt = character.name;
                        characterDiv.appendChild(characterImage);

                        const characterName = document.createElement('p');
                        characterName.textContent = character.name;
                        characterDiv.appendChild(characterName);

                        // Mostrar la descripción del personaje al hacer clic en él
                        const characterDescription = document.createElement('p');
                        characterDescription.textContent = character.description;
                        characterDescription.classList.add('character-description');
                        characterDiv.appendChild(characterDescription);

                        characterDiv.addEventListener('click', () => toggleDescription(characterDescription));

                        charactersDiv.appendChild(characterDiv);
                    });
                })
                .catch(error => console.error('Error al obtener los personajes:', error));
        }

        // Función para filtrar los personajes por nombre
        function filterCharacters(characters) {
            const filterValue = document.querySelector('input[type="text"]').value.toLowerCase();
            const filteredCharacters = characters.filter(character => character.name.toLowerCase().includes(filterValue));
            const charactersDiv = document.getElementById('characters');
            charactersDiv.innerHTML = ''; // Limpiar los personajes anteriores
            filteredCharacters.forEach(character => {
                // Mostrar solo los personajes que coincidan con el filtro
                const characterDiv = document.createElement('div');
                characterDiv.classList.add('character');

                const characterImage = document.createElement('img');
                characterImage.src = character.avatar;
                characterImage.alt = character.name;
                characterDiv.appendChild(characterImage);

                const characterName = document.createElement('p');
                characterName.textContent = character.name;
                characterDiv.appendChild(characterName);

                const characterDescription = document.createElement('p');
                characterDescription.textContent = character.description;
                characterDescription.classList.add('character-description');
                characterDiv.appendChild(characterDescription);

                characterDiv.addEventListener('click', () => toggleDescription(characterDescription));

                charactersDiv.appendChild(characterDiv);
            });
        }

        // Función para mostrar u ocultar la descripción de un personaje
        function toggleDescription(descriptionElement) {
            if (descriptionElement.style.display === 'none') {
                descriptionElement.style.display = 'block';
            } else {
                descriptionElement.style.display = 'none';
            }
        }