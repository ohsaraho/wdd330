import { getJSON } from './fetchDogBreeds.js';

document.addEventListener('DOMContentLoaded', () => {
function dogArray() {
    // getJSON().then(function (jsonObject) {
    //     const dogData = jsonObject['dogData'];
    //     console.table(dogData);
    //     dogData.forEach(data => { 
    //         let card = document.createElement('div');
    //         // let p = document.createElement('p');
    //         let image1 = document.createElement('img');
    //         let image2 = document.createElement('img');
    
    //     // p.textContent = data.lifeSpan;    
    //     image1.setAttribute('src', `images/${data.image[0].image1}`);
    //     image2.setAttribute('src', `images/${data.image[0].image2}`);
    //     image1.setAttribute('alt', data.dogBreed);
    //     image2.setAttribute('alt', data.dogBreed);
    
    //     // card.appendChild(p);
    //     card.appendChild(image1);
    //     card.appendChild(image2);
        
    
    
    //     document.querySelector('.cards').appendChild(card);
    // })
    // })
    // const array = [];

    getJSON().then(function (jsonObject) {
        const dogData = jsonObject['dogData'];
        dogData.forEach(data => {
            const cardArray = [
                {
                    name: 'berneseDog',
                    img: `images/${data.image[0].image1}`
                },
                {
                    name: 'berneseDog',
                    img: `images/${data.image[0].image1}`
                },
                {
                    name: 'bernesePup',
                    img: `images/${data.image[0].image2}`
                },
                {
                    name: 'bernesePup',
                    img: `images/${data.image[0].image2}`
                }
            ];
            return cardArray;
        })
    })
}


dogArray();
// getJSON();

    const cards = document.querySelector('.cards');

    function createBoard() {
        for (let i=0; i < cardArray.length; i++) {
            var card = document.createElement('img');
            card.setAttribute('src', 'images/front.png');
            card.setAttribute('data-id', i);
            cards.appendChild(card);
        }
    }
    createBoard();
})