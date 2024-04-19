document.addEventListener("DOMContentLoaded", () => {
  let cardArray = [
    {
      id: 1,
      name: "earth",
      img: "public/exercise-1/earth.svg",
    },
    {
      id: 2,
      name: "jupiter",
      img: "public/exercise-1/jupiter.svg",
    },
    {
      id: 3,
      name: "mars",
      img: "public/exercise-1/mars.svg",
    },
    {
      id: 4,
      name: "mercury",
      img: "public/exercise-1/mercury.svg",
    },
    {
      id: 5,
      name: "saturn",
      img: "public/exercise-1/saturn.svg",
    },
    {
      id: 6,
      name: "uranus",
      img: "public/exercise-1/uranus.svg",
    },
    {
      id: 7,
      name: "earth",
      img: "public/exercise-1/earth.svg",
    },
    {
      id: 8,
      name: "jupiter",
      img: "public/exercise-1/jupiter.svg",
    },
    {
      id: 9,
      name: "mars",
      img: "public/exercise-1/mars.svg",
    },
    {
      id: 10,
      name: "mercury",
      img: "public/exercise-1/mercury.svg",
    },
    {
      id: 11,
      name: "saturn",
      img: "public/exercise-1/saturn.svg",
    },
    {
      id: 12,
      name: "uranus",
      img: "public/exercise-1/uranus.svg",
    },
  ];

  const gridContainer = document.querySelector('[data-function="grid"]');
  const scoreElement = document.querySelector('[data-function="score"]');
  const attemptsElement = document.querySelector('[data-function="attempts"]');

  let firstCard = null;
  let secondCard = null;
  let score = 0;
  let attempts = 0;

  function initializeGame() {
    shuffleCards();
    renderGrid();
  }

  function shuffleCards() {
    cardArray = cardArray.sort(() => Math.random() - 0.5);
  }

  function renderGrid() {
    gridContainer.innerHTML = "";
    cardArray.forEach((card) => {
      const cardElement = createCardElement(card);
      gridContainer.appendChild(cardElement);
    });
  }

  function createCardElement(card) {
    const cardElement = document.createElement("div");
    cardElement.classList.add("b-grid__item");
    cardElement.dataset.id = card.id;
    cardElement.dataset.name = card.name;
    cardElement.dataset.clicked = "false";

    const imgElement = document.createElement("img");
    imgElement.src = "public/exercise-1/universe.svg";
    imgElement.alt = card.name;
    imgElement.dataset.id = card.id;
    imgElement.addEventListener("click", handleCardClick);

    cardElement.appendChild(imgElement);
    return cardElement;
  }

  function handleCardClick(event) {
    const clickedCard = event.target;
    if (clickedCard.parentElement.dataset.clicked === "true") return;
    clickedCard.src = cardArray.find(
      (card) => card.id === Number(clickedCard.dataset.id)
    ).img;
    clickedCard.parentElement.dataset.clicked = "true";

    if (!firstCard) {
      firstCard = clickedCard;
    } else {
      secondCard = clickedCard;
      validateCards();
    }
  }

  function validateCards() {
    attempts++;
    attemptsElement.textContent = attempts;
    if (firstCard.dataset.name === secondCard.dataset.name) {
      score++;
      scoreElement.textContent = score;
      firstCard = null;
      secondCard = null;
      checkGameCompletion();
    } else {
      setTimeout(() => {
        firstCard.src = "public/exercise-1/universe.svg";
        secondCard.src = "public/exercise-1/universe.svg";
        firstCard.parentElement.dataset.clicked = "false";
        secondCard.parentElement.dataset.clicked = "false";
        firstCard = null;
        secondCard = null;
      }, 1000);
    }
  }

  function checkGameCompletion() {
    if (score === cardArray.length / 2) {
      alert("¡Felicidades! Has completado el juego.");
    }
  }

  initializeGame();
});
