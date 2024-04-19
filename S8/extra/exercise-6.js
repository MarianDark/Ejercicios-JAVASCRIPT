document.addEventListener("DOMContentLoaded", function() {
    const charactersContainer = document.getElementById('characters');
    const fightBtn = document.getElementById('fight-btn');
    const battleResult = document.getElementById('battle-result');
    const battleMessage = document.getElementById('battle-message');
    const resetBtn = document.getElementById('reset-btn');

    let selectedCharacters = [];
    let currentPlayerIndex = 0;

    // Cargar personajes desde la API local
    fetch('http://localhost:3000/characters')
        .then(response => response.json())
        .then(characters => {
            characters.forEach(character => {
                const characterCard = document.createElement('div');
                characterCard.classList.add('character-card');
                characterCard.innerHTML = `
                    <img src="${character.image}" alt="${character.name}">
                    <h3>${character.name}</h3>
                    <div class="character-stats">
                        <p>Vitalidad: ${character.vitality}</p>
                        <p>Daño: ${character.damage.join(', ')}</p>
                        <p>Defensa: ${character.defense}</p>
                        <p>Critico: ${character.critic}</p>
                    </div>
                `;
                characterCard.addEventListener('click', () => selectCharacter(character));
                charactersContainer.appendChild(characterCard);
            });
        })
        .catch(error => console.error('Error al cargar personajes:', error));

    function selectCharacter(character) {
        selectedCharacters.push(character);
        if (selectedCharacters.length === 2) {
            fightBtn.removeAttribute('disabled');
        }
    }

    function rollDice(dice) {
        const rolls = dice.map(d => {
            const [numDice, numSides] = d.split('d');
            let total = 0;
            for (let i = 0; i < parseInt(numDice); i++) {
                total += Math.floor(Math.random() * parseInt(numSides)) + 1;
            }
            return total;
        });
        return rolls;
    }

    async function fight() {
        fightBtn.setAttribute('disabled', true);
        battleResult.style.display = 'none';

        // Decidir aleatoriamente qué personaje ataca primero
        currentPlayerIndex = Math.floor(Math.random() * 2);

        const players = [...selectedCharacters];
        const opponent = players.splice(1 - currentPlayerIndex, 1)[0];

        while (selectedCharacters.every(player => player.vitality > 0)) {
            const attacker = selectedCharacters[currentPlayerIndex];
            const defender = selectedCharacters[1 - currentPlayerIndex];

            const attackDamage = attacker.damage.reduce((totalDamage, dice) => {
                const rolls = rollDice([dice]);
                const total = rolls.reduce((sum, roll) => {
                    if (roll === attacker.critic) {
                        return sum + roll * 2;
                    } else {
                        return sum + roll;
                    }
                }, 0);
                return totalDamage + total;
            }, 0);

            const finalDamage = Math.max(attackDamage - defender.defense, 0);
            defender.vitality -= finalDamage;

            currentPlayerIndex = 1 - currentPlayerIndex;

            await new Promise(resolve => setTimeout(resolve, 1000)); // Esperar 1 segundo
        }

        // Mostrar resultado de la batalla
        battleMessage.textContent = `${opponent.name} ha ganado la batalla con ${opponent.vitality} puntos de vida restantes.`;
        battleResult.style.display = 'block';
    }

    function resetBattle() {
        selectedCharacters = [];
        fightBtn.setAttribute('disabled', true);
        battleResult.style.display = 'none';
        battleMessage.textContent = '';
    }

    fightBtn.addEventListener('click', fight);
    resetBtn.addEventListener('click', resetBattle);
});
