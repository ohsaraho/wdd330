// function getURL(event) {
//   fetch("https://swapi.dev/api/starships/")
//     .then((response) => response.json())
//     .then((data) => {
      
//       // const results = data.results;
//       console.log(data.results);
//     });
// }

function getAPI(url = "https://swapi.dev/api/starships/") {
  console.log(url);
    return fetch(url)
      .then(function (response) {
          return response.json();
      })
      // .then((data) => {
      //   const results = data.results;

      //   results.forEach(element => {
      //     let table = document.createElement('table');
      //     let tr = document.createElement('tr');
      //     let starshipName = document.createElement('td');
      //     starshipName.innerText = element.name;
      //     let starshipModel = document.createElement('td');
      //     starshipModel.innerText = element.model;
          

      //     tr.appendChild(starshipName);
      //     tr.appendChild(starshipModel);
      //     table.appendChild(tr);

      //     return table;
          
      //   })
      //   console.log(results);
      //   console.log(data);
      // })
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
    

    // results.forEach(element => {
    //   let table = document.createElement('table');
    //   let tr = document.createElement('tr');
    //   let starshipName = document.createElement('td');
    //   starshipName.innerText = element.name;
    //   let starshipModel = document.createElement('td');
    //   starshipModel.innerText = element.model;
      

    //   tr.appendChild(starshipName);
    //   tr.appendChild(starshipModel);
    //   table.appendChild(tr);

    //   return table;
      
    // })
    
  })
}



  showShips();