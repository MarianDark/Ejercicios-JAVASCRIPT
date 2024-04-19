document.addEventListener('DOMContentLoaded', () => {
    const questionsNumberInput = document.querySelector('[data-function="questions-number"]');
    const startGameButton = document.querySelector('[data-function="start-game"]');
    const gameBoard = document.querySelector('[data-function="gameboard"]');
    const checkGameButton = document.querySelector('[data-function="check-game"]');

    let questions = [];

    startGameButton.addEventListener('click', async () => {
        const questionsNumber = parseInt(questionsNumberInput.value);
        if (isNaN(questionsNumber) || questionsNumber <= 0) {
            alert('Please enter a valid number of questions.');
            return;
        }

        try {
            // Fetch questions from API
            const response = await fetch(`https://opentdb.com/api.php?amount=${questionsNumber}&type=multiple`);
            const data = await response.json();
            questions = data.results;

            // Generate game board
            generateGameBoard();
        } catch (error) {
            console.error('Error fetching questions:', error);
            alert('An error occurred while fetching questions. Please try again later.');
        }
    });

    const generateGameBoard = () => {
        gameBoard.innerHTML = '';
        questions.forEach((question, index) => {
            const questionElement = document.createElement('div');
            questionElement.classList.add('question');
            questionElement.innerHTML = `
                <p>${index + 1}. ${question.question}</p>
                <ul>
                    ${question.incorrect_answers.map(answer => `<li class="answer">${answer}</li>`).join('')}
                    <li class="answer marked">${question.correct_answer}</li>
                </ul>
            `;
            gameBoard.appendChild(questionElement);
        });
    };

    checkGameButton.addEventListener('click', () => {
        const userAnswers = Array.from(document.querySelectorAll('.question')).map(questionElement => {
            const selectedAnswer = questionElement.querySelector('.marked');
            if (selectedAnswer) {
                return selectedAnswer.textContent;
            } else {
                return null;
            }
        });

        if (userAnswers.includes(null)) {
            alert('Please answer all questions before checking the game.');
            return;
        }

        const correctAnswers = questions.map(question => question.correct_answer);

        let correctCount = 0;
        userAnswers.forEach((answer, index) => {
            if (answer === correctAnswers[index]) {
                correctCount++;
            }
        });

        alert(`You answered ${correctCount} out of ${questions.length} questions correctly.`);
    });
});
