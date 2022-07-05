import { getJSON } from './fetchDogBreeds.js';

document.addEventListener('DOMContentLoaded', () => {
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
        // for (let i=0; i < cardArray.length; i++) {
        //     for (let j=0; j < cardArray[i].length; j++) {
        //         console.log(cardArray[i][j].img);
        //     }
            
        // }
        
                
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
    
    const cards = document.querySelector('.cards');

    let cardsSelected = [];
    let cardsSelectedId = [];
    let cardsWon = [];

    function createBoard() {
        for (let i=0; i < cardArray.length; i++) {
            var card = document.createElement('img');
            card.setAttribute('src', 'images/front.png');
            card.setAttribute('data-id', i);
            card.classList.add('front-face');
            card.addEventListener('click', flipSelectedCard)
            cards.appendChild(card);
        }
    }

    function checkForCardMatch() {
        const cards = document.querySelectorAll('img');
        cards.forEach(card => {
            card.classList.add('back-face')
        });
        // console.log(cards);
        const selectedCard1Id = cardsSelectedId[0];
        const selectedCard2Id = cardsSelectedId[1];

        if (cardsSelected[0] == cardsSelected[1]) {
            const wonMessage = document.createElement('h2');
            wonMessage.innerHTML = 'You found a match';
            cards[selectedCard1Id].setAttribute('src', 'images/blank.jpg');
            cards[selectedCard2Id].setAttribute('src', 'images/blank.jpg');
            cards
            cardsWon.push(cardsSelected);
        } else {
            cards[selectedCard1Id].setAttribute('src', 'images/front.png');
            cards[selectedCard2Id].setAttribute('src', 'images/front.png');
            const lossMessage = document.createElement('h2');
            lossMessage.innerHTML = 'Sorry no match. Try again!';
        }
        cardsSelected = []
        cardsSelectedId = []
    }
    const cardsdiv = document.querySelectorAll('.cards');
    function flipSelectedCard() {
        // for (let i=0; i < cardArray.length; i++) {
        //     for (let j=0; j < cardArray[i].length; j++) {
        //         console.log(cardArray[i][j].img);
        //         const cardId = this.getAttribute('data-id');
        //         console.log(cardId);
        //         cardsSelected.push(cardArray[cardId][i].name);
        //         cardsSelectedId.push(cardId);
        //         this.setAttribute('src', cardArray[cardId][i].img);
        //         if (cardsSelected.length == 2) {
        //             setTimeout(checkForCardMatch, 500);
        //         }
        //     }
            
        // }
        // for (let i=0; i < cardArray.length; i++) {
        //     let card = cardArray[i];
        //     console.log(card);
        //     const cardId = this.getAttribute('data-id');
        //     console.log(cardId);
        // cardsSelected.push(cardArray[cardId][i].name);
        // cardsSelectedId.push(cardId);
        // this.setAttribute('src', cardArray[cardId][i].img);
        // if (cardsSelected.length == 2) {
        //     setTimeout(checkForCardMatch, 500);
        // }
        // }
    
        
        this.classList.toggle('flip-card');
        console.log('I was clicked');
        console.log(this);
    }

   
    createBoard();
   
    
    cardsdiv.forEach(card => card.addEventListener('click', flipSelectedCard));
// })
})
})