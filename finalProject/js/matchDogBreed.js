import { getJSON } from "./fetchDogBreeds.js";

getJSON().then((data) => {
  // const dogData = jsonObject['dogData'];
  // console.log(data);
  // const dogData = data.dogData[0].images[0].image;
  // console.log(dogData);
  const allCardsArray = [
    [
      {
        name: `${data.dogData[0].images[0].imageName}`,
        img: `images/${data.dogData[0].images[0].image}`,
      },
      {
        name: `${data.dogData[0].images[0].imageName}`,
        img: `images/${data.dogData[0].images[0].image}`,
      },
    ],
    [
      {
        name: `${data.dogData[0].images[1].imageName}`,
        img: `images/${data.dogData[0].images[1].image}`,
      },
      {
        name: `${data.dogData[0].images[1].imageName}`,
        img: `images/${data.dogData[0].images[1].image}`,
      },
    ],
    [
      {
        name: `${data.dogData[1].images[0].imageName}`,
        img: `images/${data.dogData[1].images[0].image}`,
      },
      {
        name: `${data.dogData[1].images[0].imageName}`,
        img: `images/${data.dogData[1].images[0].image}`,
      },
    ],
    [
      {
        name: `${data.dogData[1].images[1].imageName}`,
        img: `images/${data.dogData[1].images[1].image}`,
      },
      {
        name: `${data.dogData[1].images[1].imageName}`,
        img: `images/${data.dogData[1].images[1].image}`,
      },
    ],
    [
      {
        name: `${data.dogData[2].images[0].imageName}`,
        img: `images/${data.dogData[2].images[0].image}`,
      },
      {
        name: `${data.dogData[2].images[0].imageName}`,
        img: `images/${data.dogData[2].images[0].image}`,
      },
    ],
    [
      {
        name: `${data.dogData[2].images[1].imageName}`,
        img: `images/${data.dogData[2].images[1].image}`,
      },
      {
        name: `${data.dogData[2].images[1].imageName}`,
        img: `images/${data.dogData[2].images[1].image}`,
      },
    ],
    [
      {
        name: `${data.dogData[3].images[0].imageName}`,
        img: `images/${data.dogData[3].images[0].image}`,
      },
      {
        name: `${data.dogData[3].images[0].imageName}`,
        img: `images/${data.dogData[3].images[0].image}`,
      },
    ],
    [
      {
        name: `${data.dogData[3].images[1].imageName}`,
        img: `images/${data.dogData[3].images[1].image}`,
      },
      {
        name: `${data.dogData[3].images[1].imageName}`,
        img: `images/${data.dogData[3].images[1].image}`,
      },
    ],
    [
      {
        name: `${data.dogData[4].images[0].imageName}`,
        img: `images/${data.dogData[4].images[0].image}`,
      },
      {
        name: `${data.dogData[4].images[0].imageName}`,
        img: `images/${data.dogData[4].images[0].image}`,
      },
    ],
    [
      {
        name: `${data.dogData[4].images[1].imageName}`,
        img: `images/${data.dogData[4].images[1].image}`,
      },
      {
        name: `${data.dogData[4].images[1].imageName}`,
        img: `images/${data.dogData[4].images[1].image}`,
      },
    ],
    [
      {
        name: `${data.dogData[5].images[0].imageName}`,
        img: `images/${data.dogData[5].images[0].image}`,
      },
      {
        name: `${data.dogData[5].images[0].imageName}`,
        img: `images/${data.dogData[5].images[0].image}`,
      },
    ],
    [
      {
        name: `${data.dogData[5].images[1].imageName}`,
        img: `images/${data.dogData[5].images[1].image}`,
      },
      {
        name: `${data.dogData[5].images[1].imageName}`,
        img: `images/${data.dogData[5].images[1].image}`,
      },
    ],
    [
      {
        name: `${data.dogData[6].images[0].imageName}`,
        img: `images/${data.dogData[6].images[0].image}`,
      },
      {
        name: `${data.dogData[6].images[0].imageName}`,
        img: `images/${data.dogData[6].images[0].image}`,
      },
    ],
    [
      {
        name: `${data.dogData[6].images[1].imageName}`,
        img: `images/${data.dogData[6].images[1].image}`,
      },
      {
        name: `${data.dogData[6].images[1].imageName}`,
        img: `images/${data.dogData[6].images[1].image}`,
      },
    ],
    [
      {
        name: `${data.dogData[7].images[0].imageName}`,
        img: `images/${data.dogData[7].images[0].image}`,
      },
      {
        name: `${data.dogData[7].images[0].imageName}`,
        img: `images/${data.dogData[7].images[0].image}`,
      },
    ],
    [
      {
        name: `${data.dogData[7].images[1].imageName}`,
        img: `images/${data.dogData[7].images[1].image}`,
      },
      {
        name: `${data.dogData[7].images[1].imageName}`,
        img: `images/${data.dogData[7].images[1].image}`,
      },
    ],
    [
      {
        name: `${data.dogData[8].images[0].imageName}`,
        img: `images/${data.dogData[8].images[0].image}`,
      },
      {
        name: `${data.dogData[8].images[0].imageName}`,
        img: `images/${data.dogData[8].images[0].image}`,
      },
    ],
    [
      {
        name: `${data.dogData[8].images[1].imageName}`,
        img: `images/${data.dogData[8].images[1].image}`,
      },
      {
        name: `${data.dogData[8].images[1].imageName}`,
        img: `images/${data.dogData[8].images[1].image}`,
      },
    ],
    [
      {
        name: `${data.dogData[9].images[0].imageName}`,
        img: `images/${data.dogData[9].images[0].image}`,
      },
      {
        name: `${data.dogData[9].images[0].imageName}`,
        img: `images/${data.dogData[9].images[0].image}`,
      },
    ],
    [
      {
        name: `${data.dogData[9].images[1].imageName}`,
        img: `images/${data.dogData[9].images[1].image}`,
      },
      {
        name: `${data.dogData[9].images[1].imageName}`,
        img: `images/${data.dogData[9].images[1].image}`,
      },
    ],
  ];
  // console.log(allCardsArray);

  const background = document.querySelector(".bodyContainer");

  const mainDiv = document.querySelector(".mainDiv");
  const cards = document.querySelector(".memoryGameDiv");

  const score = document.querySelector(".score");

  const startCenter = document.querySelector(".centerDivStart");
  const startGame = document.querySelector(".startGame");
  const startGameBtn = document.createElement("button");
  startGameBtn.classList.add(".startGameBtn");
  const startGameBtnAgain = document.createElement("button");
  startGameBtnAgain.classList.add(".playGameBtnAgain");
  startGameBtn.addEventListener("click", showCards);

  const displayResult = document.querySelector(".displayResult");
  const displayCenter = document.querySelector(".centerDivResults");

  const startGameViewTitle = document.querySelector(".startGameViewTitle");
  const gameTitle = document.querySelector(".gameViewTitle");
  const displayResultTitle = document.querySelector(".displayResultViewTitle");

  let randomArray = [];
  // console.log(randomArray);

  let cardArray = [];
  // console.log(cardArray);

  let flippedCard = false;
  let firstCard, secondCard;
  let lockBoardGame = false;
  let cardsWon = [];

  const timeSpanH3 = document.querySelector(".timeh3");
  const timeSpan = document.querySelector(".countDownSpan");

  timeSpanH3.appendChild(timeSpan);

  // 2/24 Changed the time in seconds to 300 instead of 60 seconds so it gives Jayden 5 minutes to complete the matches
  let timeSecond = 180;

  // Counts down the time in seconds
  function countDownTimer() {
    let countDown = setInterval(() => {
      timeSecond--;
      displayTime(timeSecond);
      // console.log(displayTime(timeSecond));

      if (
        timeSecond <= 0 ||
        timeSecond < 1 ||
        cardsWon.length == cardArray.length
      ) {
        // Commented out these four lines so that it gives you more time to look at your matches after you match all your cards or the time is up
        // gameTitle.innerHTML = "";
        // timeSpanH3.innerHTML = "";
        // startGame.innerHTML = "";

        // displayResults();

        // This freezes the time that you did your last match on
        clearInterval(countDown);
        // Uncommented this function so that it gives you more time to look at all your matches when the time is up or you have matched all the matches
        setTimeout(() => {
          gameTitle.innerHTML = "";
          timeSpanH3.innerHTML = "";
          startGame.innerHTML = "";

          displayResults();
          // clearInterval(countDown);
        }, 10000);
      }
      // console.log(countDown);
      // console.log(timeSecond);
    }, 1000);
  }

  // Displays the time in a h3 tag
  function displayTime(second) {
    const min = Math.floor(second / 60);
    const sec = Math.floor(second % 60);

    timeSpanH3.innerHTML = `${min < 10 ? "0" : ""}${min}:${
      sec < 10 ? "0" : ""
    }${sec}`;
  }

  // Displays the start game view
  function startGameView() {
    startGameViewTitle.innerHTML = "Match the Dog";
    const gameInfo = document.createElement("p");
    const clickPlay = document.createElement("h3");
    startGameBtn.innerHTML = "Play";
    clickPlay.innerHTML = "Click play to start!";
    gameInfo.innerHTML =
      "Match the dog to the correct match by clicking a card.";
    background.classList.add("backgroundImage");

    startGame.appendChild(gameInfo);
    startGame.appendChild(clickPlay);
    startGame.appendChild(startGameBtn);
  }

  // Randomizes the allCardsArray by it's index then pushes all the random cards to the randomArray
  function randomizeCardsArray() {
    for (let i = 0; i < allCardsArray.length; i++) {
      let randomIndex = Math.floor(Math.random() * allCardsArray.length);
      // console.log(randomIndex);
      // console.log(allCardsArray[randomIndex]);
      randomArray.push(allCardsArray[randomIndex]);
      // console.log(allCardsArray.indexOf(allCardsArray[randomIndex]));
      // console.log(i);
    }
  }

  // Filters randomArray to find duplicates and pushes the nonduplicates to the cardArray, allowing only 8 cards (16 cards) to be pushed to the array
  function filterRandomizedArray() {
    let filteredArray = randomArray.filter((element, index) => {
      return randomArray.indexOf(element) === index;
    });

    // console.log(filteredArray);

    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < filteredArray[i].length; j++) {
        // console.log(randomArray[i][j]);

        cardArray.push(filteredArray[i][j]);
      }
    }
  }

  // Creates board to display all 16 cards stored in a div
  function createBoard() {
    background.classList.remove("backgroundImage");
    background.classList.add("backgroundColor");

    mainDiv.classList.remove("hidden");
    startCenter.classList.add("hidden");

    gameTitle.innerHTML = "Match the Dog";

    cardArray.forEach((item) => {
      const cardDiv = document.createElement("div");
      const cardBackimg = document.createElement("img");
      const cardFrontimg = document.createElement("img");
      cardFrontimg.setAttribute("src", `${item.img}`);
      cardBackimg.setAttribute("src", "images/front.png");
      cardDiv.dataset.name = item.name;
      cardBackimg.addEventListener("click", flipSelectedCard);
      cardDiv.classList.add("memory-card");
      cardFrontimg.classList.add("front-face");
      cardBackimg.classList.add("back-face");
      cardDiv.appendChild(cardFrontimg);
      cardDiv.appendChild(cardBackimg);
      cards.appendChild(cardDiv);
    });
  }

  const cardsdiv = document.querySelectorAll(".memory-card");

  // Checks if lockBoardGame is true, then if so check if firstcard equals this, sets this.parentElement.classList.toggle to flipCard. Then if flippedCard equals false, check if cards match
  function flipSelectedCard() {
    if (lockBoardGame) return;

    if (this == firstCard) return;

    this.parentElement.classList.toggle("flipCard");

    if (!flippedCard) {
      // First card clicked
      flippedCard = true;
      firstCard = this;
    } else {
      // Second card clicked
      flippedCard = false;
      secondCard = this;
      checkForCardMatch();
    }
  }

  // Checks for card match by dataset.name then calls the disableCards function if match and pushes those cards into the cardsWon array or if not then it calls the function cardsUnflipped
  function checkForCardMatch() {
    let firstcard = firstCard.parentNode.dataset.name;
    let secondcard = secondCard.parentNode.dataset.name;

    if (firstcard === secondcard) {
      disableCards();
      cardsWon.push(firstcard, secondcard);

      // console.log(cardsWon);

      // console.log(cardsWon.length/2);
      console.log(firstcard, secondcard);
      console.log(firstcard.length, secondcard.length);
    } else {
      cardsUnflipped();

      // console.log(firstCard.parentNode.dataset.name);
      // console.log(secondCard.parentNode.dataset.name);
    }
  }

  // Removes the event listener if the cards match, so the cards are no longer click able and resets the board
  function disableCards() {
    firstCard.removeEventListener("click", flipSelectedCard);
    secondCard.removeEventListener("click", flipSelectedCard);

    resetBoard();
  }

  // If the cards don't match then it removes the flipCard classlist to flip it back to the back-face card and resets the board
  function cardsUnflipped() {
    lockBoardGame = true;
    setTimeout(() => {
      firstCard.parentNode.classList.remove("flipCard");
      secondCard.parentNode.classList.remove("flipCard");

      resetBoard();
    }, 1500);
  }

  // Resets the board back to it's orginal state after flipping cards
  function resetBoard() {
    flippedCard = false;
    lockBoardGame = false;

    firstCard = null;
    secondCard = null;
  }

  // Shuffles final card array to display the cards randomly on the board
  function shuffle() {
    cardArray.sort(() => 0.5 - Math.random());
  }

  // Displays result view with a message and a score depending on what score you get
  function displayResults() {
    background.classList.add("backgroundImage");
    displayResult.innerHTML = "";
    displayCenter.classList.remove("hidden");

    displayResultTitle.innerHTML = "Match the Dog";
    cards.innerHTML = "";
    const congratsh2 = document.createElement("h2");

    if (cardsWon.length == cardArray.length) {
      congratsh2.innerHTML = `Congrats! You found all ${
        cardsWon.length / 2
      } matches!!`;
      score.innerHTML = `Score: ${cardsWon.length / 2}`;
    } else if (cardsWon.length >= 1) {
      congratsh2.innerHTML = `Congrats! You found ${
        cardsWon.length / 2
      } matches!!`;
      score.innerHTML = `Score: ${cardsWon.length / 2}`;
    } else if (cardsWon.length == 0) {
      congratsh2.innerHTML = "You found 0 matches. Try Again!!";
      score.innerHTML = `Score: ${cardsWon.length / 2}`;
    }

    startGameBtnAgain.innerHTML = "Play Again!";

    displayResult.appendChild(displayResultTitle);
    displayResult.appendChild(congratsh2);
    displayResult.appendChild(score);
    displayResult.appendChild(startGameBtnAgain);

    console.log(cardsWon.length / 2);
  }

  // Shows the game view, clears the start game view
  function showCards() {
    startGame.innerHTML = "";
    displayResult.innerHTML = "";
    background.classList.remove("backgroundImage");
    countDownTimer();
    shuffle();
    createBoard();
  }

  startGameBtnAgain.addEventListener("click", () => {
    cards.innerHTML = "";
    displayCenter.classList.add("hidden");

    randomArray = [];
    console.log(randomArray);
    cardArray = [];
    console.log(cardArray);

    randomizeCardsArray();
    filterRandomizedArray();
    shuffle();
    createBoard();

    cardsWon = [];
    timeSecond = 180;
    countDownTimer();
  });

  cardsdiv.forEach((card) => card.addEventListener("click", flipSelectedCard));

  randomizeCardsArray();
  filterRandomizedArray();
  startGameView();
});
