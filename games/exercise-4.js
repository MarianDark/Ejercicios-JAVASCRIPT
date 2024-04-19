document.addEventListener('DOMContentLoaded', function () {
    const board = document.getElementById('board');
    const attemptsDisplay = document.getElementById('attempts');
    const resetButton = document.getElementById('resetButton');
    const imgXUrl = './public/exercise-4/x.png';
    const imgChestUrl = './public/exercise-4/chest.png';
    const imgSkullUrl = './public/exercise-4/skull.png';
    let rows, cols, treasureRow, treasureCol;
    let attempts = 0;

    initGame();

  
    resetButton.addEventListener('click', function () {
        attempts = 0;
        attemptsDisplay.textContent = attempts;
        clearBoard();
        initGame();
    });

    function initGame() {
        getBoardSize();
        generateTreasure();
        createBoard();
    }


    function getBoardSize() {
        rows = parseInt(prompt('Enter number of rows:'));
        cols = parseInt(prompt('Enter number of columns:'));
    }

    // Function to generate random treasure position
    function generateTreasure() {
        treasureRow = Math.floor(Math.random() * rows);
        treasureCol = Math.floor(Math.random() * cols);
    }

    function createBoard() {
        for (let i = 0; i < rows; i++) {
            const row = document.createElement('tr');
            for (let j = 0; j < cols; j++) {
                const cell = document.createElement('td');
                const img = document.createElement('img');
                img.src = imgXUrl;
                img.alt = 'Cell';
                img.addEventListener('click', handleClick);
                cell.appendChild(img);
                row.appendChild(cell);
            }
            board.appendChild(row);
        }
    }

    function handleClick() {
        attempts++;
        attemptsDisplay.textContent = attempts;
        const row = this.parentNode.rowIndex;
        const col = this.cellIndex;
        if (row === treasureRow && col === treasureCol) {
            this.firstChild.src = imgChestUrl;
            alert(`Congratulations! You found the treasure in ${attempts} attempts.`);
            disableBoard();
        } else {
            this.firstChild.src = imgSkullUrl;
        }
    }

    function disableBoard() {
        const cells = document.querySelectorAll('td');
        cells.forEach(cell => {
            cell.firstChild.removeEventListener('click', handleClick);
        });
    }

    function clearBoard() {
        board.innerHTML = '';
    }
});
