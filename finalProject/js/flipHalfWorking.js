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

    let cardsSelected = [];
    let cardsSelectedId = [];
    let cardsWon = [];

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

    function createBoard() {
        for (let i=0; i < cardArray.length; i++) {
            var cardDiv = document.createElement('div');
            var cardimg = document.createElement('img');
            cardimg.setAttribute('src', 'images/front.png');
            cardimg.setAttribute('data-id', i);
            cardimg.addEventListener('click', flipSelectedCard);
            cardDiv.classList.add('memory-card');
            cardimg.classList.add('back-face');
            cardDiv.appendChild(cardimg);
            cards.appendChild(cardDiv);
        }
    }

    function checkForCardMatch() {
        const cards = document.querySelectorAll('img');
        const selectedCard1Id = cardsSelectedId[0];
        const selectedCard2Id = cardsSelectedId[1];

        if (cardsSelected[0] == cardsSelected[1]) {
            const wonMessage = document.createElement('h2');
            wonMessage.innerHTML = 'You found a match';
            cards[selectedCard1Id].setAttribute('src', 'images/blank.jpg');
            cards[selectedCard2Id].setAttribute('src', 'images/blank.jpg');
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
    const cardsdiv = document.querySelectorAll('.memory-card');
    function flipSelectedCard() {
        const cardId = this.getAttribute('data-id');
        cardsSelected.push(cardArray[cardId].name);
        cardsSelectedId.push(cardId);
        this.setAttribute('src', cardArray[cardId].img);
        if (cardsSelected.length == 2) {
            setTimeout(checkForCardMatch, 500);
        }
        
        this.classList.add('front-face');
        this.parentElement.classList.toggle('flip-card');
        console.log('I was clicked');
        console.log(this.parentElement);
        // cardsdiv.forEach(card => {
        //     card.parentElement.classList.toggle('flip-card');
        // });
    }


    createBoard();
    cardsdiv.forEach(card => card.addEventListener('click', flipSelectedCard));
// })
})
})