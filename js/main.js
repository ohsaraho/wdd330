const links = [
    {
      label: "Week01",
      url: "week1/index.html"
    },
    {
      label: "Week02",
      url: "week2/index.html"
    },
    {
      label: "Week03",
      url: "week3/index.html"
    },
    {
      label: "Week04",
      url: "week4/index.html"
    },
    {
      label: "Week05",
      url: "week5/index.html"
    },
    {
      label: "Todo App",
      url: "week6/todo.html"
    }
    
  ]

function loadIndex() {
    const ol = document.querySelector("#orderedListLinks");

    links.forEach(link => {
        const li = document.createElement("li");
        const anchor = document.createElement("a");
        anchor.setAttribute("href", link.url);
        anchor.innerText = link.label;
        
        li.appendChild(anchor);
        ol.appendChild(li);
    })
}