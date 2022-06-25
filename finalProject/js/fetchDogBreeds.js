// const dogDatajson = 'json/dogBreedsData.json';


export function getJSON(dogDatajson = 'json/dogBreedsData.json') {
    console.log(dogDatajson);
    return fetch(dogDatajson)
        .then((response) => {
            if (!response.ok) {
                throw Error(response.statusText);
            } else {
                return response.json();
            }
        })
        .then(function (jsonObject) {
            const dogData = jsonObject['dogData'];
            console.table(dogData);
            dogData.forEach(data => { 
                let card = document.createElement('section');
                // let p = document.createElement('p');
                let image1 = document.createElement('img');
                let image2 = document.createElement('img');
        
            // p.textContent = data.lifeSpan;    
            image1.setAttribute('src', `images/${data.image[0].image1}`);
            image2.setAttribute('src', `images/${data.image[0].image2}`);
            image1.setAttribute('alt', data.dogBreed);
            image2.setAttribute('alt', data.dogBreed);

            // card.appendChild(p);
            card.appendChild(image1);
            card.appendChild(image2);
            


            document.querySelector('.cards').appendChild(card);
        })
    })
}