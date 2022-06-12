function getAPI(url = "https://swapi.dev/api/starships/") {
  console.log(url);
    return fetch(url)
      .then(function (response) {
        if (!response.ok) {
          throw Error(response.statusText);
        } else {
          return response.json();
        }
      })
      .catch(function (error) {
        console.log(error);
      });
}

  function renderShipArray(ships) {
    const array = document.querySelector('.tbody');
    array.innerHTML = '';
  
    ships.forEach(ship => {
      let listItem = document.createElement('tr');
      listItem.innerHTML = `<td><a href="${ship.url}">${ship.name}</a></td>
                            <td>${ship.model}</td>
                            <td>${ship.manufacturer}</td>`;
      
        listItem.addEventListener("click", function (event) {
        //when clicked the default link behavior should be stopped, and the ship details function should be called...passing the value of the href attribute in
            event.preventDefault();
            getShipDetails(ship.url);
        });
      array.appendChild(listItem);
    });
  }
  
  function renderShipDetails(shipData) {
    console.log(shipData);
    const array = document.querySelector('#detailsBox');
    array.innerHTML = '';
    array.classList.remove('hidden');
    
      let listItem = document.createElement('div');
      listItem.innerHTML = `<div><dt>Name:</dt>
      <dd class="name">${shipData.name}</dd></div>
      <div><dt>Model:</dt>
      <dd class="model">${shipData.model}</dd></div>
      <div><dt>Length:</dt>
      <dd class="class">${shipData.length}</dd></div>
      <div><dt>Manufacturer:</dt>
      <dd class="movies">${shipData.crew}</dd></div>`;
      
      array.appendChild(listItem);
  }
  
  function showShips(url) {
  getAPI(url).then((data) => {
    const results = data.results;
    console.log(results);
    console.log(data);


    renderShipArray(results);
    renderShipDetails(results);

    if (data.next) {
      const next = document.getElementById("next");
      
      next.onclick = () => {
        showShips(data.next);
      };
    }
      if (data.previous) {
        const prev = document.getElementById("prev");
  
        prev.onclick = () => {
          showShips(data.previous);
        };
      }
    
  })
}
  
  function getShipDetails(url) {
    //call getJSON functions for the provided url
    getAPI(url).then(function (data) {
      renderShipDetails(data);
      //with the results populate the elements in the #detailsbox
    });
}
  showShips();