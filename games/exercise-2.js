document.addEventListener('DOMContentLoaded', function () {
    const scoreDisplay = document.querySelector('[data-function="score"]');
    const timeLeftDisplay = document.querySelector('[data-function="time-left"]');
    const squares = document.querySelectorAll('[data-function="square"]');
    const moleImg = 'public/exercise-2/mole.png';
    const bgImg = 'public/exercise-2/bg.jpg';
    let score = 0;
    let timeLeft = parseInt(timeLeftDisplay.textContent);
    let molePosition;

    function randomSquare() {
        squares.forEach(square => {
            square.classList.remove('b-mole');
            square.style.backgroundImage = `url(${bgImg})`;
        });

        const randomSquareIndex = Math.floor(Math.random() * squares.length);
        squares[randomSquareIndex].classList.add('b-mole');
        squares[randomSquareIndex].style.backgroundImage = `url(${moleImg})`;
        molePosition = randomSquareIndex;
    }

    function moveMole() {
        const moveInterval = setInterval(randomSquare, 500);
        setTimeout(() => {
            clearInterval(moveInterval);
            squares.forEach(square => square.removeEventListener('click', whack));
            alert('Game Over! Your score: ' + score);
        }, timeLeft * 1000);
    }

    function whack() {
        if (this.classList.contains('b-mole')) {
            this.classList.remove('b-mole');
            this.style.backgroundImage = `url(${bgImg})`;
            score++;
            scoreDisplay.textContent = score;
        }
    }

    squares.forEach(square => square.addEventListener('click', whack));

    moveMole();

    setInterval(() => {
        timeLeft--;
        timeLeftDisplay.textContent = timeLeft;
    }, 1000);
});
