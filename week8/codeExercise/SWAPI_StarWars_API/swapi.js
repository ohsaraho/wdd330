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
    listItem.innerHTML = `<td>${ship.name}</td>
                          <td>${ship.model}</td>
                          <td>${ship.manufacturer}</td>`;
    
    array.appendChild(listItem);
  });
}

function showShips(url) {
  getAPI(url).then((data) => {
    const results = data.results;
    console.log(results);
    console.log(data);


    renderShipArray(results);

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



  showShips();