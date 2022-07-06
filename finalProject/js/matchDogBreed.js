import { getJSON } from './fetchDogBreeds.js';

// document.addEventListener('DOMContentLoaded', () => {
// function dogArray() {
//     getJSON().then(function (jsonObject) {
//         const dogData = jsonObject['dogData'];
//         console.table(dogData);
//         dogData.forEach(data => { 
//             let card = document.createElement('div');
//             // let p = document.createElement('p');
//             let image1 = document.createElement('img');
//             let image2 = document.createElement('img');
    
//         // p.textContent = data.lifeSpan;    
//         image1.setAttribute('src', `images/${data.image[0].image1}`);
//         image2.setAttribute('src', `images/${data.image[0].image2}`);
//         image1.setAttribute('alt', data.dogBreed);
//         image2.setAttribute('alt', data.dogBreed);
    
//         // card.appendChild(p);
//         card.appendChild(image1);
//         card.appendChild(image2);
        
    
    
//         document.querySelector('.cards').appendChild(card);
//     })
//     })
//     const array = [];

//     getJSON().then(function (jsonObject) {
//         const dogData = jsonObject['dogData'];
//         console.log(dogData);
//         dogData.forEach(data => {
//             const cardArray = [
//                 {
//                     name: 'berneseDog',
//                     img: `images/${data.image[0].image1}`
//                 },
//                 {
//                     name: 'berneseDog',
//                     img: `images/${data.image[0].image1}`
//                 },
//                 {
//                     name: 'bernesePup',
//                     img: `images/${data.image[0].image2}`
//                 },
//                 {
//                     name: 'bernesePup',
//                     img: `images/${data.image[0].image2}`
//                 }
//             ];
//             return cardArray;
//         })
//     })
// }

getJSON().then((data) => {
    // const dogData = jsonObject['dogData'];
    console.log(data);
    const dogData = data.dogData[0].images[0].image;
    console.log(dogData);
    // dogData.forEach(data => {
                    const cardArray = [
                        {
                            name: `${data.dogData[0].images[0].imageName}`,
                            img: `images/${data.dogData[0].images[0].image}`
                        },
                        {
                            name: `${data.dogData[0].images[0].imageName}`,
                            img: `images/${data.dogData[0].images[0].image}`
                        },
                        {
                            name: `${data.dogData[0].images[1].imageName}`,
                            img: `images/${data.dogData[0].images[1].image}`
                        },
                        {
                            name: `${data.dogData[0].images[1].imageName}`,
                            img: `images/${data.dogData[0].images[1].image}`
                        },
                        {
                            name: `${data.dogData[1].images[0].imageName}`,
                            img: `images/${data.dogData[1].images[0].image}`
                        },
                        {
                            name: `${data.dogData[1].images[0].imageName}`,
                            img: `images/${data.dogData[1].images[0].image}`
                        },
                        {
                            name: `${data.dogData[1].images[1].imageName}`,
                            img: `images/${data.dogData[1].images[1].image}`
                        },
                        {
                            name: `${data.dogData[1].images[1].imageName}`,
                            img: `images/${data.dogData[1].images[1].image}`
                        },
                        {
                            name: `${data.dogData[2].images[0].imageName}`,
                            img: `images/${data.dogData[2].images[0].image}`
                        },
                        {
                            name: `${data.dogData[2].images[0].imageName}`,
                            img: `images/${data.dogData[2].images[0].image}`
                        },
                        {
                            name: `${data.dogData[2].images[1].imageName}`,
                            img: `images/${data.dogData[2].images[1].image}`
                        },
                        {
                            name: `${data.dogData[2].images[1].imageName}`,
                            img: `images/${data.dogData[2].images[1].image}`
                        },{
                            name: `${data.dogData[3].images[0].imageName}`,
                            img: `images/${data.dogData[3].images[0].image}`
                        },
                        {
                            name: `${data.dogData[3].images[0].imageName}`,
                            img: `images/${data.dogData[3].images[0].image}`
                        },
                        {
                            name: `${data.dogData[3].images[1].imageName}`,
                            img: `images/${data.dogData[3].images[1].image}`
                        },
                        {
                            name: `${data.dogData[3].images[1].imageName}`,
                            img: `images/${data.dogData[3].images[1].image}`
                        },
                        {
                            name: `${data.dogData[4].images[0].imageName}`,
                            img: `images/${data.dogData[4].images[0].image}`
                        },
                        {
                            name: `${data.dogData[4].images[0].imageName}`,
                            img: `images/${data.dogData[4].images[0].image}`
                        },
                        {
                            name: `${data.dogData[4].images[1].imageName}`,
                            img: `images/${data.dogData[4].images[1].image}`
                        },
                        {
                            name: `${data.dogData[4].images[1].imageName}`,
                            img: `images/${data.dogData[4].images[1].image}`
                        },
                        {
                            name: `${data.dogData[5].images[0].imageName}`,
                            img: `images/${data.dogData[5].images[0].image}`
                        },
                        {
                            name: `${data.dogData[5].images[0].imageName}`,
                            img: `images/${data.dogData[5].images[0].image}`
                        },
                        {
                            name: `${data.dogData[5].images[1].imageName}`,
                            img: `images/${data.dogData[5].images[1].image}`
                        },
                        {
                            name: `${data.dogData[5].images[1].imageName}`,
                            img: `images/${data.dogData[5].images[1].image}`
                        },
                        {
                            name: `${data.dogData[6].images[0].imageName}`,
                            img: `images/${data.dogData[6].images[0].image}`
                        },
                        {
                            name: `${data.dogData[6].images[0].imageName}`,
                            img: `images/${data.dogData[6].images[0].image}`
                        },
                        {
                            name: `${data.dogData[6].images[1].imageName}`,
                            img: `images/${data.dogData[6].images[1].image}`
                        },
                        {
                            name: `${data.dogData[6].images[1].imageName}`,
                            img: `images/${data.dogData[6].images[1].image}`
                        },{
                            name: `${data.dogData[7].images[0].imageName}`,
                            img: `images/${data.dogData[7].images[0].image}`
                        },
                        {
                            name: `${data.dogData[7].images[0].imageName}`,
                            img: `images/${data.dogData[7].images[0].image}`
                        },
                        {
                            name: `${data.dogData[7].images[1].imageName}`,
                            img: `images/${data.dogData[7].images[1].image}`
                        },
                        {
                            name: `${data.dogData[7].images[1].imageName}`,
                            img: `images/${data.dogData[7].images[1].image}`
                        },
                        {
                            name: `${data.dogData[8].images[0].imageName}`,
                            img: `images/${data.dogData[8].images[0].image}`
                        },
                        {
                            name: `${data.dogData[8].images[0].imageName}`,
                            img: `images/${data.dogData[8].images[0].image}`
                        },
                        {
                            name: `${data.dogData[8].images[1].imageName}`,
                            img: `images/${data.dogData[8].images[1].image}`
                        },
                        {
                            name: `${data.dogData[8].images[1].imageName}`,
                            img: `images/${data.dogData[8].images[1].image}`
                        },
                        {
                            name: `${data.dogData[9].images[0].imageName}`,
                            img: `images/${data.dogData[9].images[0].image}`
                        },
                        {
                            name: `${data.dogData[9].images[0].imageName}`,
                            img: `images/${data.dogData[9].images[0].image}`
                        },
                        {
                            name: `${data.dogData[9].images[1].imageName}`,
                            img: `images/${data.dogData[9].images[1].image}`
                        },
                        {
                            name: `${data.dogData[9].images[1].imageName}`,
                            img: `images/${data.dogData[9].images[1].image}`
                        }
                    ];
                    // const cardArray = [
                    //     [
                    //         {
                    //             name: `${data.dogData[0].images[0].imageName}`,
                    //             img: `images/${data.dogData[0].images[0].image}`
                    //         },
                    //         {
                    //             name: `${data.dogData[0].images[0].imageName}`,
                    //             img: `images/${data.dogData[0].images[0].image}`
                    //         }
                    //     ],
                    //     [
                    //         {
                    //             name: `${data.dogData[0].images[1].imageName}`,
                    //             img: `images/${data.dogData[0].images[1].image}`
                    //         },
                    //         {
                    //             name: `${data.dogData[0].images[1].imageName}`,
                    //             img: `images/${data.dogData[0].images[1].image}`
                    //         }
                    //     ],
                    //     [
                    //         {
                    //             name: `${data.dogData[1].images[0].imageName}`,
                    //             img: `images/${data.dogData[1].images[0].image}`
                    //         },
                    //         {
                    //             name: `${data.dogData[1].images[0].imageName}`,
                    //             img: `images/${data.dogData[1].images[0].image}`
                    //         }
                    //     ],
                    //     [
                    //         {
                    //             name: `${data.dogData[1].images[1].imageName}`,
                    //             img: `images/${data.dogData[1].images[1].image}`
                    //         },
                    //         {
                    //             name: `${data.dogData[1].images[1].imageName}`,
                    //             img: `images/${data.dogData[1].images[1].image}`
                    //         }
                    //     ],
                    //     [
                    //         {
                    //             name: `${data.dogData[2].images[0].imageName}`,
                    //             img: `images/${data.dogData[2].images[0].image}`
                    //         },
                    //         {
                    //             name: `${data.dogData[2].images[0].imageName}`,
                    //             img: `images/${data.dogData[2].images[0].image}`
                    //         }
                    //     ],
                    //     [
                    //         {
                    //             name: `${data.dogData[2].images[1].imageName}`,
                    //             img: `images/${data.dogData[2].images[1].image}`
                    //         },
                    //         {
                    //             name: `${data.dogData[2].images[1].imageName}`,
                    //             img: `images/${data.dogData[2].images[1].image}`
                    //         }
                    //     ],
                    //     [    
                    //         {
                    //             name: `${data.dogData[3].images[0].imageName}`,
                    //             img: `images/${data.dogData[3].images[0].image}`
                    //         },
                    //         {
                    //             name: `${data.dogData[3].images[0].imageName}`,
                    //             img: `images/${data.dogData[3].images[0].image}`
                    //         }
                    //     ],
                    //     [
                    //         {
                    //             name: `${data.dogData[3].images[1].imageName}`,
                    //             img: `images/${data.dogData[3].images[1].image}`
                    //         },
                    //         {
                    //             name: `${data.dogData[3].images[1].imageName}`,
                    //             img: `images/${data.dogData[3].images[1].image}`
                    //         }
                    //     ],
                    //     [    
                    //         {
                    //             name: `${data.dogData[4].images[0].imageName}`,
                    //             img: `images/${data.dogData[4].images[0].image}`
                    //         },
                    //         {
                    //             name: `${data.dogData[4].images[0].imageName}`,
                    //             img: `images/${data.dogData[4].images[0].image}`
                    //         }
                    //     ],
                    //     [
                    //         {
                    //             name: `${data.dogData[4].images[1].imageName}`,
                    //             img: `images/${data.dogData[4].images[1].image}`
                    //         },
                    //         {
                    //             name: `${data.dogData[4].images[1].imageName}`,
                    //             img: `images/${data.dogData[4].images[1].image}`
                    //         }
                    //     ],
                    //     [
                    //         {
                    //             name: `${data.dogData[5].images[0].imageName}`,
                    //             img: `images/${data.dogData[5].images[0].image}`
                    //         },
                    //         {
                    //             name: `${data.dogData[5].images[0].imageName}`,
                    //             img: `images/${data.dogData[5].images[0].image}`
                    //         }
                    //     ],
                    //     [
                    //         {
                    //             name: `${data.dogData[5].images[1].imageName}`,
                    //             img: `images/${data.dogData[5].images[1].image}`
                    //         },
                    //         {
                    //             name: `${data.dogData[5].images[1].imageName}`,
                    //             img: `images/${data.dogData[5].images[1].image}`
                    //         }
                    //     ],
                    //     [                
                    //         {
                    //             name: `${data.dogData[6].images[0].imageName}`,
                    //             img: `images/${data.dogData[6].images[0].image}`
                    //         },
                    //         {
                    //             name: `${data.dogData[6].images[0].imageName}`,
                    //             img: `images/${data.dogData[6].images[0].image}`
                    //         }
                    //     ],
                    //     [
                    //         {
                    //             name: `${data.dogData[6].images[1].imageName}`,
                    //             img: `images/${data.dogData[6].images[1].image}`
                    //         },
                    //         {
                    //             name: `${data.dogData[6].images[1].imageName}`,
                    //             img: `images/${data.dogData[6].images[1].image}`
                    //         }
                    //     ],
                    //     [
                    //         {
                    //             name: `${data.dogData[7].images[0].imageName}`,
                    //             img: `images/${data.dogData[7].images[0].image}`
                    //         },
                    //         {
                    //             name: `${data.dogData[7].images[0].imageName}`,
                    //             img: `images/${data.dogData[7].images[0].image}`
                    //         }
                    //     ],
                    //     [                {
                    //             name: `${data.dogData[7].images[1].imageName}`,
                    //             img: `images/${data.dogData[7].images[1].image}`
                    //         },
                    //         {
                    //             name: `${data.dogData[7].images[1].imageName}`,
                    //             img: `images/${data.dogData[7].images[1].image}`
                    //         }
                    //     ],
                    //     [    
                    //         {
                    //             name: `${data.dogData[8].images[0].imageName}`,
                    //             img: `images/${data.dogData[8].images[0].image}`
                    //         },
                    //         {
                    //             name: `${data.dogData[8].images[0].imageName}`,
                    //             img: `images/${data.dogData[8].images[0].image}`
                    //         }
                    //     ],
                    //     [
                    //         {
                    //             name: `${data.dogData[8].images[1].imageName}`,
                    //             img: `images/${data.dogData[8].images[1].image}`
                    //         },
                    //         {
                    //             name: `${data.dogData[8].images[1].imageName}`,
                    //             img: `images/${data.dogData[8].images[1].image}`
                    //         }
                    //     ],
                    //     [
                    //         {
                    //             name: `${data.dogData[9].images[0].imageName}`,
                    //             img: `images/${data.dogData[9].images[0].image}`
                    //         },
                    //         {
                    //             name: `${data.dogData[9].images[0].imageName}`,
                    //             img: `images/${data.dogData[9].images[0].image}`
                    //         }
                    //     ],
                    //     [
                    //         {
                    //             name: `${data.dogData[9].images[1].imageName}`,
                    //             img: `images/${data.dogData[9].images[1].image}`
                    //         },
                    //         {
                    //             name: `${data.dogData[9].images[1].imageName}`,
                    //             img: `images/${data.dogData[9].images[1].image}`
                    //         }
                    //     ]
                    // ];
        console.log(cardArray);
                
// dogArray();
// getJSON();
// const cardArray = [
//     {
//         name: 'berneseDog',
//         img: 'images/bernese-mountain-dog.jpg'
//     },
//     {
//         name: 'berneseDog',
//         img: 'images/bernese-mountain-dog.jpg'
//     },
//     {
//         name: 'bernesePup',
//         img: 'images/bernese-mountain-puppy.jpg'
//     },
//     {
//         name: 'bernesePup',
//         img: 'images/bernese-mountain-puppy.jpg'
//     }
// ];

    // cardArray.sort(() => 0.5 - Math.random());
    const cards = document.querySelector('.memoryGameDiv');
    const score = document.querySelector('.score');
    const startGame = document.querySelector('.startGame');
    const startGameBtn = document.createElement('button');
    startGameBtn.classList.add('.startGame');
    const startGameBtnAgain = document.createElement('button');
    startGameBtnAgain.classList.add('.playGameAgain');
    const startMemoryGame = startGameBtn.addEventListener('click', showCards);
    const startMemoryGameAgain = startGameBtnAgain.addEventListener('click', showCards);
    const displayResult = document.querySelector('.displayResult');
    
    startGameBtn.addEventListener("click", () => {
        alert('Start button was clicked');
    });
    startGameBtnAgain.addEventListener("click", () => {
        alert('Play again button was clicked');
    });
    // let cardsSelected = [];
    // let cardsSelectedId = [];
    

    let flippedCard = false;
    let firstCard, secondCard;
    let lockBoardGame = false;
    let cardsWon = [];
    let countCardsWon = cardsWon.length/2;
    

    // function createBoard() {
    //     var cardDiv = document.createElement('div');
    //     var cardimgBack = document.createElement('img');
    //         cardArray.forEach(img => {
    //             cardimgBack.setAttribute('src', `${img.img}`);
    //             cardDiv.appendChild(cardimgBack);
    //             console.log(img.img);
    //         })
    //     for (let i=0; i < cardArray.length; i++) {
            
    //         var cardimgFront = document.createElement('img');
    //         cardimgFront.setAttribute('src', 'images/front.png');
    //         cardimgFront.setAttribute('data-id', i);
    //         cardimgFront.addEventListener('click', flipSelectedCard);
    //         cardDiv.classList.add('memory-card');
    //         cardimgFront.classList.add('back-face');
    //         cardDiv.appendChild(cardimgFront);
    //         cards.appendChild(cardDiv);
    //     }
    // }
    function startGameView() {
        const gameInfo = document.createElement('p');
        const clickPlay = document.createElement('h3');
        startGameBtn.innerHTML = 'Play';
        clickPlay.innerHTML = 'Click play to start!';
        gameInfo.innerHTML = 'Match the dog to the correct match';

        startGame.appendChild(gameInfo);
        startGame.appendChild(clickPlay);
        startGame.appendChild(startGameBtn);

    }

    function createBoard() {
        cards.innerHTML = '';
        cards.classList.remove('hidden');
        
        // for (let i=0; i < cardArray.length; i++) {
        //     for (let j=0; j < cardArray[i].length; j++) {
        //         console.log(cardArray[i][j].img);

        //         const cardDiv = document.createElement('div');
        //                 const cardBackimg = document.createElement('img');
        //                 const cardFrontimg = document.createElement('img');
        //                 cardFrontimg.setAttribute('src', `${cardArray[i][j].img}`);
        //             cardBackimg.setAttribute('src', 'images/front.png');
        //                 cardDiv.dataset.name = cardArray[i][j].name;
        //             cardBackimg.addEventListener('click', flipSelectedCard);
        //                 cardDiv.classList.add('memory-card');
        //                 cardFrontimg.classList.add('front-face');
        //                 cardBackimg.classList.add('back-face');
        //                 cardDiv.appendChild(cardFrontimg);
        //                 cardDiv.appendChild(cardBackimg);
        //                 cards.appendChild(cardDiv);
        //     }
        // }
    
                cardArray.forEach((item) => {
                    const cardDiv = document.createElement('div');
                    const cardBackimg = document.createElement('img');
                    const cardFrontimg = document.createElement('img');
                    cardFrontimg.setAttribute('src', `${item.img}`);
                cardBackimg.setAttribute('src', 'images/front.png');
                    cardDiv.dataset.name = item.name;
                cardBackimg.addEventListener('click', flipSelectedCard);
                    cardDiv.classList.add('memory-card');
                    cardFrontimg.classList.add('front-face');
                    cardBackimg.classList.add('back-face');
                    cardDiv.appendChild(cardFrontimg);
                    cardDiv.appendChild(cardBackimg);
                    cards.appendChild(cardDiv);
                })
    }
    // function createBoard() {
    //     for (let i=0; i < cardArray.length; i++) {
    //         var cardDiv = document.createElement('div');
    //         var cardimg = document.createElement('img');
    //         cardimg.setAttribute('src', 'images/front.png');
    //         cardimg.setAttribute('data-id', i);
    //         cardimg.addEventListener('click', flipSelectedCard);
    //         cardDiv.classList.add('memory-card');
    //         cardimg.classList.add('back-face');
    //         cardDiv.appendChild(cardimg);
    //         cards.appendChild(cardDiv);
    //     }
    // }

    // function checkForCardMatch() {
    //     const cards = document.querySelectorAll('img');
    //     const selectedCard1Id = cardsSelectedId[0];
    //     const selectedCard2Id = cardsSelectedId[1];

    //     if (cardsSelected[0] == cardsSelected[1]) {
    //         const wonMessage = document.createElement('h2');
    //         wonMessage.innerHTML = 'You found a match';
    //         cards[selectedCard1Id].setAttribute('src', 'images/blank.jpg');
    //         cards[selectedCard2Id].setAttribute('src', 'images/blank.jpg');
    //         cardsWon.push(cardsSelected);
    //     } else {
    //         cards[selectedCard1Id].setAttribute('src', 'images/front.png');
    //         cards[selectedCard2Id].setAttribute('src', 'images/front.png');
    //         const lossMessage = document.createElement('h2');
    //         lossMessage.innerHTML = 'Sorry no match. Try again!';
    //     }
    //     cardsSelected = []
    //     cardsSelectedId = []
    // }
    const cardsdiv = document.querySelectorAll('.memory-card');
    // function flipSelectedCard() {
    //     const cardId = this.getAttribute('data-id');
    //     cardsSelected.push(cardArray[cardId].name);
    //     cardsSelectedId.push(cardId);
    //     this.setAttribute('src', cardArray[cardId].img);
    //     if (cardsSelected.length == 2) {
    //         setTimeout(checkForCardMatch, 500);
    //     }
        
    //     this.classList.add('front-face');
    //     this.parentElement.classList.toggle('flip-card');
    //     console.log('I was clicked');
    //     console.log(this.parentElement);
    // }
    function flipSelectedCard() {
        // this.classList.add('front-face');
        if (lockBoardGame) return;

        if (this == firstCard) return;

        this.parentElement.classList.toggle('flip-card');

        if (!flippedCard) {
            flippedCard = true;
            firstCard = this;
        } else {
            flippedCard = false;
            secondCard = this;
            checkForCardMatch();
        }
        // var element = document.querySelector('.memory-card');
        // var dataAttribute = element.getAttribute('data-name');
        // console.log(dataAttribute);
        
        
    }

    function checkForCardMatch() {
        let firstcard = firstCard.parentNode.dataset.name;
        let secondcard = secondCard.parentNode.dataset.name;

        if (firstcard === secondcard) {
            disableCards();
            // console.log('function was executed!')
            cardsWon.push(firstcard, secondcard);
            // console.log(cardsWon);
            
            
            console.log(cardsWon.length/2);
        
        } else {
            cardsUnflipped();
            
            // console.log(firstCard.parentNode.dataset.name);
            // console.log(secondCard.parentNode.dataset.name);
        }

        displayResults();
            // setTimeout(() => {
                score.innerHTML = `Score: ${cardsWon.length/2}`;
            // }, 1500);
        
        // if (!startMemoryGameAgain) {
        //     displayResults();
        //     setTimeout(() => {
        //         score.innerHTML = `Score: ${cardsWon.length/2}`;
        //     }, 1500);
            
        // }
        // else if (startMemoryGameAgain) {
        //     displayResult.innerHTML = '';
        //     createBoard();
            
        // }
        
    }

    function disableCards() {
        firstCard.removeEventListener('click', flipSelectedCard);
        secondCard.removeEventListener('click', flipSelectedCard);

        resetBoard();
    }

    function cardsUnflipped() {
        lockBoardGame = true;
        setTimeout(() => {
            firstCard.parentNode.classList.remove('flip-card');
        secondCard.parentNode.classList.remove('flip-card');

        resetBoard();
        }, 1500);
    }

    function resetBoard() {
        flippedCard = false;
        lockBoardGame = false;

        firstCard = null;
        secondCard = null;
    }

    // function shuffle(cardArray, num) {
    //     cardsdiv.forEach(card => {
    //       let randomPos = Math.floor(Math.random() * 12);
    //       card.style.order = randomPos;
    //     });
    //     const shuffled = cardArray.sort(() => 0.5 - Math.random());
    //     return shuffled.slice(0, num);
    // }

    function displayResults() {
        displayResult.innerHTML = '';
        displayResult.classList.remove('hidden');
        if (cardsWon.length === cardArray.length && !startMemoryGameAgain) {
            cards.innerHTML = '';
            const congratsh2 = document.createElement('h2');
            // const score = document.querySelector('h3');

            congratsh2.innerHTML = 'Congrats! You found all the matches!!';
            startGameBtnAgain.innerHTML = 'Play Again!';
            // score.innerHTML = `Score: ${countCardsWon}`;
            // displayResult.innerHTML = `<h2>Congrats! You found all the matches!!</h2><h3>Score: ${cardsWon.length/2}</h3>`;


            displayResult.appendChild(congratsh2);
            displayResult.appendChild(score);
            displayResult.appendChild(startGameBtnAgain);
            
            // displayResult.appendChild(score);
            console.log(cardsWon.length/2);
        } else if (cardsWon.length === cardArray.length && startMemoryGameAgain) {
            displayResult.innerHTML = '';
            // createBoard();
        }

        // displayResult.innerHTML = '';
        // displayResult.classList.remove('hidden');
        // if (cardsWon.length/2 === cardArray.length && !startMemoryGameAgain) {
        //     cards.innerHTML = '';
        //     const congratsh2 = document.createElement('h2');

        //     congratsh2.innerHTML = 'Congrats! You found all the matches!!';
        //     startGameBtnAgain.innerHTML = 'Play Again!';


        //     displayResult.appendChild(congratsh2);
        //     displayResult.appendChild(score);
        //     displayResult.appendChild(startGameBtnAgain);
            
        //     console.log(cardsWon.length/2);
        // } else if (cardsWon.length/2 === cardArray.length && startMemoryGameAgain) {
        //     displayResult.innerHTML = '';
        //     createBoard();
        // }
    }

    function showCards() {
        
        
        if (!startMemoryGame) {
            startGame.innerHTML = '';
            // displayResult.innerHTML = '';
            // displayResult.innerHTML = '';
            createBoard();
        } 
        else if (!startMemoryGameAgain) {
            displayResult.innerHTML = '';
            createBoard();
        }
        
    }

    startGameView();
    // showCards();
    
    // shuffle(cardArray, 8);
    // console.log(shuffle(cardArray, 8));
    
    cardsdiv.forEach(card => card.addEventListener('click', flipSelectedCard));
// })
})
// })