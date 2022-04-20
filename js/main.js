const links = [
    {
      label: "Week01",
      url: "week1/index.html"
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