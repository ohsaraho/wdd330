import { getJSON } from './fetchDogBreeds.js';

getJSON().then((data) => {
    // const dogData = jsonObject['dogData'];
    console.log(data);
    const dogData = data.dogData[0].images[0].image;
    console.log(dogData);
    // dogData.forEach(data => {
                    // const cardArray = [
                    //     {
                    //         name: `${data.dogData[0].images[0].imageName}`,
                    //         img: `images/${data.dogData[0].images[0].image}`
                    //     },
                    //     {
                    //         name: `${data.dogData[0].images[0].imageName}`,
                    //         img: `images/${data.dogData[0].images[0].image}`
                    //     },
                    //     {
                    //         name: `${data.dogData[0].images[1].imageName}`,
                    //         img: `images/${data.dogData[0].images[1].image}`
                    //     },
                    //     {
                    //         name: `${data.dogData[0].images[1].imageName}`,
                    //         img: `images/${data.dogData[0].images[1].image}`
                    //     },
                    //     {
                    //         name: `${data.dogData[1].images[0].imageName}`,
                    //         img: `images/${data.dogData[1].images[0].image}`
                    //     },
                    //     {
                    //         name: `${data.dogData[1].images[0].imageName}`,
                    //         img: `images/${data.dogData[1].images[0].image}`
                    //     },
                    //     {
                    //         name: `${data.dogData[1].images[1].imageName}`,
                    //         img: `images/${data.dogData[1].images[1].image}`
                    //     },
                    //     {
                    //         name: `${data.dogData[1].images[1].imageName}`,
                    //         img: `images/${data.dogData[1].images[1].image}`
                    //     },
                    //     {
                    //         name: `${data.dogData[2].images[0].imageName}`,
                    //         img: `images/${data.dogData[2].images[0].image}`
                    //     },
                    //     {
                    //         name: `${data.dogData[2].images[0].imageName}`,
                    //         img: `images/${data.dogData[2].images[0].image}`
                    //     },
                    //     {
                    //         name: `${data.dogData[2].images[1].imageName}`,
                    //         img: `images/${data.dogData[2].images[1].image}`
                    //     },
                    //     {
                    //         name: `${data.dogData[2].images[1].imageName}`,
                    //         img: `images/${data.dogData[2].images[1].image}`
                    //     },{
                    //         name: `${data.dogData[3].images[0].imageName}`,
                    //         img: `images/${data.dogData[3].images[0].image}`
                    //     },
                    //     {
                    //         name: `${data.dogData[3].images[0].imageName}`,
                    //         img: `images/${data.dogData[3].images[0].image}`
                    //     },
                    //     {
                    //         name: `${data.dogData[3].images[1].imageName}`,
                    //         img: `images/${data.dogData[3].images[1].image}`
                    //     },
                    //     {
                    //         name: `${data.dogData[3].images[1].imageName}`,
                    //         img: `images/${data.dogData[3].images[1].image}`
                    //     },
                    //     {
                    //         name: `${data.dogData[4].images[0].imageName}`,
                    //         img: `images/${data.dogData[4].images[0].image}`
                    //     },
                    //     {
                    //         name: `${data.dogData[4].images[0].imageName}`,
                    //         img: `images/${data.dogData[4].images[0].image}`
                    //     },
                    //     {
                    //         name: `${data.dogData[4].images[1].imageName}`,
                    //         img: `images/${data.dogData[4].images[1].image}`
                    //     },
                    //     {
                    //         name: `${data.dogData[4].images[1].imageName}`,
                    //         img: `images/${data.dogData[4].images[1].image}`
                    //     },
                    //     {
                    //         name: `${data.dogData[5].images[0].imageName}`,
                    //         img: `images/${data.dogData[5].images[0].image}`
                    //     },
                    //     {
                    //         name: `${data.dogData[5].images[0].imageName}`,
                    //         img: `images/${data.dogData[5].images[0].image}`
                    //     },
                    //     {
                    //         name: `${data.dogData[5].images[1].imageName}`,
                    //         img: `images/${data.dogData[5].images[1].image}`
                    //     },
                    //     {
                    //         name: `${data.dogData[5].images[1].imageName}`,
                    //         img: `images/${data.dogData[5].images[1].image}`
                    //     },
                    //     {
                    //         name: `${data.dogData[6].images[0].imageName}`,
                    //         img: `images/${data.dogData[6].images[0].image}`
                    //     },
                    //     {
                    //         name: `${data.dogData[6].images[0].imageName}`,
                    //         img: `images/${data.dogData[6].images[0].image}`
                    //     },
                    //     {
                    //         name: `${data.dogData[6].images[1].imageName}`,
                    //         img: `images/${data.dogData[6].images[1].image}`
                    //     },
                    //     {
                    //         name: `${data.dogData[6].images[1].imageName}`,
                    //         img: `images/${data.dogData[6].images[1].image}`
                    //     },{
                    //         name: `${data.dogData[7].images[0].imageName}`,
                    //         img: `images/${data.dogData[7].images[0].image}`
                    //     },
                    //     {
                    //         name: `${data.dogData[7].images[0].imageName}`,
                    //         img: `images/${data.dogData[7].images[0].image}`
                    //     },
                    //     {
                    //         name: `${data.dogData[7].images[1].imageName}`,
                    //         img: `images/${data.dogData[7].images[1].image}`
                    //     },
                    //     {
                    //         name: `${data.dogData[7].images[1].imageName}`,
                    //         img: `images/${data.dogData[7].images[1].image}`
                    //     },
                    //     {
                    //         name: `${data.dogData[8].images[0].imageName}`,
                    //         img: `images/${data.dogData[8].images[0].image}`
                    //     },
                    //     {
                    //         name: `${data.dogData[8].images[0].imageName}`,
                    //         img: `images/${data.dogData[8].images[0].image}`
                    //     },
                    //     {
                    //         name: `${data.dogData[8].images[1].imageName}`,
                    //         img: `images/${data.dogData[8].images[1].image}`
                    //     },
                    //     {
                    //         name: `${data.dogData[8].images[1].imageName}`,
                    //         img: `images/${data.dogData[8].images[1].image}`
                    //     },
                    //     {
                    //         name: `${data.dogData[9].images[0].imageName}`,
                    //         img: `images/${data.dogData[9].images[0].image}`
                    //     },
                    //     {
                    //         name: `${data.dogData[9].images[0].imageName}`,
                    //         img: `images/${data.dogData[9].images[0].image}`
                    //     },
                    //     {
                    //         name: `${data.dogData[9].images[1].imageName}`,
                    //         img: `images/${data.dogData[9].images[1].image}`
                    //     },
                    //     {
                    //         name: `${data.dogData[9].images[1].imageName}`,
                    //         img: `images/${data.dogData[9].images[1].image}`
                    //     }
                    // ];
                    const allCardsArray = [
                        [
                            {
                                name: `${data.dogData[0].images[0].imageName}`,
                                img: `images/${data.dogData[0].images[0].image}`
                            },
                            {
                                name: `${data.dogData[0].images[0].imageName}`,
                                img: `images/${data.dogData[0].images[0].image}`
                            }
                        ],
                        [
                            {
                                name: `${data.dogData[0].images[1].imageName}`,
                                img: `images/${data.dogData[0].images[1].image}`
                            },
                            {
                                name: `${data.dogData[0].images[1].imageName}`,
                                img: `images/${data.dogData[0].images[1].image}`
                            }
                        ],
                        [
                            {
                                name: `${data.dogData[1].images[0].imageName}`,
                                img: `images/${data.dogData[1].images[0].image}`
                            },
                            {
                                name: `${data.dogData[1].images[0].imageName}`,
                                img: `images/${data.dogData[1].images[0].image}`
                            }
                        ],
                        [
                            {
                                name: `${data.dogData[1].images[1].imageName}`,
                                img: `images/${data.dogData[1].images[1].image}`
                            },
                            {
                                name: `${data.dogData[1].images[1].imageName}`,
                                img: `images/${data.dogData[1].images[1].image}`
                            }
                        ],
                        [
                            {
                                name: `${data.dogData[2].images[0].imageName}`,
                                img: `images/${data.dogData[2].images[0].image}`
                            },
                            {
                                name: `${data.dogData[2].images[0].imageName}`,
                                img: `images/${data.dogData[2].images[0].image}`
                            }
                        ],
                        [
                            {
                                name: `${data.dogData[2].images[1].imageName}`,
                                img: `images/${data.dogData[2].images[1].image}`
                            },
                            {
                                name: `${data.dogData[2].images[1].imageName}`,
                                img: `images/${data.dogData[2].images[1].image}`
                            }
                        ],
                        [    
                            {
                                name: `${data.dogData[3].images[0].imageName}`,
                                img: `images/${data.dogData[3].images[0].image}`
                            },
                            {
                                name: `${data.dogData[3].images[0].imageName}`,
                                img: `images/${data.dogData[3].images[0].image}`
                            }
                        ],
                        [
                            {
                                name: `${data.dogData[3].images[1].imageName}`,
                                img: `images/${data.dogData[3].images[1].image}`
                            },
                            {
                                name: `${data.dogData[3].images[1].imageName}`,
                                img: `images/${data.dogData[3].images[1].image}`
                            }
                        ],
                        [    
                            {
                                name: `${data.dogData[4].images[0].imageName}`,
                                img: `images/${data.dogData[4].images[0].image}`
                            },
                            {
                                name: `${data.dogData[4].images[0].imageName}`,
                                img: `images/${data.dogData[4].images[0].image}`
                            }
                        ],
                        [
                            {
                                name: `${data.dogData[4].images[1].imageName}`,
                                img: `images/${data.dogData[4].images[1].image}`
                            },
                            {
                                name: `${data.dogData[4].images[1].imageName}`,
                                img: `images/${data.dogData[4].images[1].image}`
                            }
                        ],
                        [
                            {
                                name: `${data.dogData[5].images[0].imageName}`,
                                img: `images/${data.dogData[5].images[0].image}`
                            },
                            {
                                name: `${data.dogData[5].images[0].imageName}`,
                                img: `images/${data.dogData[5].images[0].image}`
                            }
                        ],
                        [
                            {
                                name: `${data.dogData[5].images[1].imageName}`,
                                img: `images/${data.dogData[5].images[1].image}`
                            },
                            {
                                name: `${data.dogData[5].images[1].imageName}`,
                                img: `images/${data.dogData[5].images[1].image}`
                            }
                        ],
                        [                
                            {
                                name: `${data.dogData[6].images[0].imageName}`,
                                img: `images/${data.dogData[6].images[0].image}`
                            },
                            {
                                name: `${data.dogData[6].images[0].imageName}`,
                                img: `images/${data.dogData[6].images[0].image}`
                            }
                        ],
                        [
                            {
                                name: `${data.dogData[6].images[1].imageName}`,
                                img: `images/${data.dogData[6].images[1].image}`
                            },
                            {
                                name: `${data.dogData[6].images[1].imageName}`,
                                img: `images/${data.dogData[6].images[1].image}`
                            }
                        ],
                        [
                            {
                                name: `${data.dogData[7].images[0].imageName}`,
                                img: `images/${data.dogData[7].images[0].image}`
                            },
                            {
                                name: `${data.dogData[7].images[0].imageName}`,
                                img: `images/${data.dogData[7].images[0].image}`
                            }
                        ],
                        [                {
                                name: `${data.dogData[7].images[1].imageName}`,
                                img: `images/${data.dogData[7].images[1].image}`
                            },
                            {
                                name: `${data.dogData[7].images[1].imageName}`,
                                img: `images/${data.dogData[7].images[1].image}`
                            }
                        ],
                        [    
                            {
                                name: `${data.dogData[8].images[0].imageName}`,
                                img: `images/${data.dogData[8].images[0].image}`
                            },
                            {
                                name: `${data.dogData[8].images[0].imageName}`,
                                img: `images/${data.dogData[8].images[0].image}`
                            }
                        ],
                        [
                            {
                                name: `${data.dogData[8].images[1].imageName}`,
                                img: `images/${data.dogData[8].images[1].image}`
                            },
                            {
                                name: `${data.dogData[8].images[1].imageName}`,
                                img: `images/${data.dogData[8].images[1].image}`
                            }
                        ],
                        [
                            {
                                name: `${data.dogData[9].images[0].imageName}`,
                                img: `images/${data.dogData[9].images[0].image}`
                            },
                            {
                                name: `${data.dogData[9].images[0].imageName}`,
                                img: `images/${data.dogData[9].images[0].image}`
                            }
                        ],
                        [
                            {
                                name: `${data.dogData[9].images[1].imageName}`,
                                img: `images/${data.dogData[9].images[1].image}`
                            },
                            {
                                name: `${data.dogData[9].images[1].imageName}`,
                                img: `images/${data.dogData[9].images[1].image}`
                            }
                        ]
                    ];
        console.log(allCardsArray);
    const mainDiv = document.querySelector('.mainDiv');
    const cards = document.querySelector('.memoryGameDiv');
    const score = document.querySelector('.score');
    const startGame = document.querySelector('.startGame');
    const startCenter = document.querySelector('.centerDivStart');
    const startGameBtn = document.createElement('button');
    startGameBtn.classList.add('.startGameBtn');
    const startGameBtnAgain = document.createElement('button');
    startGameBtnAgain.classList.add('.playGameBtnAgain');
    const startMemoryGame = startGameBtn.addEventListener('click', showCards);
    const startMemoryGameAgain = startGameBtnAgain.addEventListener('click', showCards);
    const displayResult = document.querySelector('.displayResult');
    const displayCenter = document.querySelector('.centerDivResults');
    const background = document.querySelector('.bodyContainer');

    const startGameViewTitle = document.querySelector('.startGameViewTitle');
    const gameTitle = document.querySelector('.gameViewTitle');
    const displayResultViewTitle = document.querySelector('.displayResultViewTitle');
    const title = document.createElement('h1');

    let cardArray = [];
    
    console.log(cardArray);

    let cardArray1 = [];
    
    console.log(cardArray1);

    // let cardArray2 = [];
    
    // console.log(cardArray2);
    

    let flippedCard = false;
    let firstCard, secondCard;
    let lockBoardGame = false;
    let cardsWon = [];
    let countCardsWon = cardsWon.length/2;
    
    const timeSpanH3 = document.querySelector('.timeh3');
    const timeSpan = document.querySelector('.countDownSpan');
    
    // let timeSpan = document.createElement('span');
    // timeSpan.classList.add('countDownSpan');
    timeSpanH3.appendChild(timeSpan);
    
    let timeSecond = 150;
    
    
    function countDownTimer() {
        let countDown = setInterval (() => {
            timeSecond--;
            displayTime(timeSecond);
            // console.log(displayTime(timeSecond));
    
            if(timeSecond <= 0 || timeSecond<1 || (cardsWon.length == cardArray.length)) {
                gameTitle.innerHTML = '';
                // cards.innerHTML ='';
                timeSpanH3.innerHTML = '';
                startGame.innerHTML = '';
                // displayResultViewTitle.innerHTML = 'Match the Dog';
                displayResults();
                // score.innerHTML = `Score: ${cardsWon.length/2}`;
                clearInterval(countDown);
            }
            // console.log(countDown);
            // console.log(timeSecond);
        }, 1000)
    }

    // const countDown = setInterval (() => {
    //     timeSecond--;
    //     displayTime(timeSecond);

    //     if(timeSecond <= 0 || timeSecond<1) {
    //         cards.innerHTML = '';
    //         displayResults();
    //         clearInterval(countDown);
    //     }
    // }, 1000)

    function displayTime(second) {
        const min = Math.floor(second/60);
        const sec = Math.floor(second%60);

        timeSpanH3.innerHTML = `${min<10 ? '0': ''}${min}:${sec<10 ? '0': ''}${sec}`;
    }

    // function endCountDown() {
    //     timeSpan.innerHTML = 'time out';
    // }
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
        startGameViewTitle.innerHTML = 'Match the Dog';
        const gameInfo = document.createElement('p');
        const clickPlay = document.createElement('h3');
        startGameBtn.innerHTML = 'Play';
        clickPlay.innerHTML = 'Click play to start!';
        gameInfo.innerHTML = 'Match the dog to the correct match';
        background.classList.add('backgroundImage');

        // startGame.appendChild(title);
        startGame.appendChild(gameInfo);
        startGame.appendChild(clickPlay);
        startGame.appendChild(startGameBtn);

    }

    function randomizeCardsArray() {
        for (let i=0; i<allCardsArray.length; i++) {
            let randomIndex = Math.floor(Math.random() * allCardsArray.length);
        // console.log(randomIndex);
            // console.log(allCardsArray[randomIndex]);
            cardArray1.push(allCardsArray[randomIndex])
            // console.log(allCardsArray.indexOf(allCardsArray[randomIndex]));
            // console.log(i);
            
            
        }

        // allCardsArray.forEach(() => {
        //     let randomIndex = Math.floor(Math.random() * allCardsArray.length);
        //     console.log(randomIndex);
        //         console.log(allCardsArray[randomIndex]);

        //     randomIndex = Number(randomIndex);
        //     console.log(randomIndex)

        //     if(!cardArray.includes(randomIndex)) {
        //         cardArray.push(randomIndex);
        //         return randomIndex;
        //     }
        // })

    }

    randomizeCardsArray();

    function filterRandomizedArray() {
        let filteredArray = cardArray1.filter((element, index) => {
            return cardArray1.indexOf(element) === index;
            })

            // cardArray2.push(filteredArray);
            console.log(filteredArray);


            for (let i=0; i < 8; i++) {
                for (let j=0; j < filteredArray[i].length; j++) {
                    // console.log(cardArray1[i][j]);
    
                    cardArray.push(filteredArray[i][j]);
                }
            }
        // for (let i=0; i < cardArray1.length; i++) {
        //     for (let j=0; j < cardArray1[i].length; j++) {

                // let new_array = cardArray1.filter((element, index) => {
                //     return cardArray1.indexOf(element) === index;
                //     })
                //     console.log(new_array);

                // let json_array = cardArray1.map(JSON.stringify);
                // let set = new Set(json_array);
                // let new_array = Array.from(set);
                // console.log(json_array);
                // console.log(set);
                // console.log(new_array);

                // const unique = cardArray1.filter(element => {
                //     const isDuplicate = cardArray1.includes(element.cardArray1[i][j].name);
                //     console.log(cardArray1[i][j]);

                //     if (!isDuplicate) {
                //         cardArray1.push(element.cardArray1[i][j].name);

                //         return true;
                //     }

                //     return false;
                // })
                // console.log(unique);
                // console.log(cardArray1[i][j].name);
                // if (cardArray1[i][j].name > 2) {
                //     cardArray2.push(cardArray1[i][j]);
                // }
                
        //     }
        // }
    }

    filterRandomizedArray();

    // function uniqByKeepLast(data, key) {
    //     return [
    //         ...new Map(
    //             data.map(x => [key(x), x])
    //         ).values()
    //     ]
    // }
    // console.log(uniqByKeepLast(cardArray1, it => it.name));
    // console.log(JSON.stringify(uniqByKeepLast(cardArray1, it => it.name)));

    // filterRandomizedArray();

    // function getCardsArray() {
    //     for (let i=0; i < 8; i++) {
    //         for (let j=0; j < cardArray1[i].length; j++) {
    //             console.log(cardArray1[i][j]);

    //             cardArray.push(cardArray1[i][j]);
    //         }
    //     }
        
        
        
    // }
    // getCardsArray();

    function createBoard() {
        background.classList.remove('backgroundImage');
        background.classList.add('backgroundColor');
        
        mainDiv.classList.remove('hidden');
        startCenter.classList.add('hidden');
        
        gameTitle.innerHTML = 'Match the Dog';
        // mainDiv.appendChild(gameTitle);
        
        // cards.appendChild(timeSpanH3);
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
    //     this.parentElement.classList.toggle('flipCard');
    //     console.log('I was clicked');
    //     console.log(this.parentElement);
    // }
    function flipSelectedCard() {
        // this.classList.add('front-face');
        if (lockBoardGame) return;

        if (this == firstCard) return;

        this.parentElement.classList.toggle('flipCard');

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
            // if(startMemoryGameAgain) {
            //     cardsWon = [];
            //     cardsWon.push(firstcard, secondcard);
            // } else if (startGameBtn) {
            //     cardsWon.push(firstcard, secondcard);
            // }
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

        // if (cardsWon.length === cardArray.length) { 
            
        //     setTimeout(() => {
        //         timeSpanH3.innerHTML = '';
        //         cards.innerHTML = '';
        //         displayResults();
                
        //     }, 1500);
        // } 
        
        // else if (cardsWon.length/2 === cardArray.length && !startMemoryGameAgain) { 
            
        //     setTimeout(() => {
        //         displayResults();
        //         score.innerHTML = `Score: ${cardsWon.length/2}`;
        //     }, 1500);
        // }

        
        
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
            firstCard.parentNode.classList.remove('flipCard');
        secondCard.parentNode.classList.remove('flipCard');

        resetBoard();
        }, 1500);
    }

    function resetBoard() {
        flippedCard = false;
        lockBoardGame = false;

        firstCard = null;
        secondCard = null;
    }
    function shuffle() {
        // cardsdiv.forEach(card => {
        //   let randomPos = Math.floor(Math.random() * 12);
        //   card.style.order = randomPos;
        // });
        cardArray.sort(() => 0.5 - Math.random());
        // const shuffled = cardArray.sort(() => 0.5 - Math.random());
        // return shuffled.slice(0, num);

        
    }

    function displayResults() {
        background.classList.add('backgroundImage');
        displayResult.innerHTML = '';
        displayCenter.classList.remove('hidden');

        
            title.innerHTML = 'Match the Dog';
            cards.innerHTML = '';
            const congratsh2 = document.createElement('h2');
            // const score = document.querySelector('h3');
            if (cardsWon.length == cardArray.length) {
                // alert('all cards found')
                congratsh2.innerHTML = `Congrats! You found all ${cardsWon.length/2} matches!!`;
                score.innerHTML = `Score: ${cardsWon.length/2}`;
            } else if (cardsWon.length >= 1) {
                // alert('More than 1')
                congratsh2.innerHTML = `Congrats! You found ${cardsWon.length/2} matches!!`;
                score.innerHTML = `Score: ${cardsWon.length/2}`;
            } else if (cardsWon.length == 0) {
                // alert('error')
                congratsh2.innerHTML = 'Oops, you found 0 matches. Try Again!!';
                score.innerHTML = `Score: ${cardsWon.length/2}`;
            }
            
            startGameBtnAgain.innerHTML = 'Play Again!';
            // score.innerHTML = `Score: ${countCardsWon}`;
            // displayResult.innerHTML = `<h2>Congrats! You found all the matches!!</h2><h3>Score: ${cardsWon.length/2}</h3>`;

            displayResult.appendChild(title);
            displayResult.appendChild(congratsh2);
            displayResult.appendChild(score);
            displayResult.appendChild(startGameBtnAgain);
            
            // displayResult.appendChild(score);
            // debugger
            console.log(cardsWon.length/2);

        //  else if (cardsWon.length === cardArray.length && startMemoryGameAgain) {
        //     displayResult.innerHTML = '';
        //     createBoard();
        // }

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
            displayResult.innerHTML = '';
            // displayResult.innerHTML = '';
            // displayTime(timeSecond);
            background.classList.remove('backgroundImage');
            createBoard();
        } 
        // else if (startMemoryGameAgain) {
        //     displayResult.innerHTML = '';
        //     cardsWon = [];
        //     createBoard();
        // }
        
    }
    startGameBtn.addEventListener("click", () => {
        // alert('Start button was clicked');
        
        countDownTimer();
        // randomizeCardsArray();
        // filterRandomizedArray();
        // shuffle();
    });
    

    startGameBtnAgain.addEventListener("click", () => {
        // alert('has been clicked')
        // alert('Play again button was clicked');
        // startGame.innerHTML = '';
        displayCenter.classList.add('hidden');
        cardArray1 = [];
        console.log(cardArray1)
        cardArray = [];
        console.log(cardArray)
        randomizeCardsArray();
        filterRandomizedArray();
        shuffle();
        
        cardsWon = [];
        timeSecond = 150;
        countDownTimer();
        
    });

    startGameView();
    // showCards();
    shuffle();
    // shuffle(cardArray, 8);
    // console.log(shuffle(cardArray, 8));
    
    cardsdiv.forEach(card => card.addEventListener('click', flipSelectedCard));
// })
})
// })