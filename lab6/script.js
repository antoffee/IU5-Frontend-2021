//task 1
function randColorHex() {
  var r = Math.floor(Math.random() * 256),
    g = Math.floor(Math.random() * 256),
    b = Math.floor(Math.random() * 256);
  return "#" + r.toString(16) + g.toString(16) + b.toString(16);
}
const firstEl = document.getElementById("first-task");

firstEl.addEventListener(
  "click",
  () => (firstEl.style.background = randColorHex())
);

//task2
const secondEl = document.getElementById("second-task");
let timer = 0;
let timerId;
secondEl.addEventListener("mouseenter", () => {
  timerId = setInterval(() => {
    timer++;
    secondEl.innerHTML = `${timer}`;
  }, 1000);
});
secondEl.addEventListener("mouseleave", () => {
  clearInterval(timerId);
});

//task3
const thButton = document.getElementById("list-button");
const list = document.getElementById("list");
thButton.addEventListener("click", () => {
  list.classList.toggle("list-visible");
});

//task4
const heart = document.getElementById("heart");
const fourthDiv = document.getElementById("fourth-task");

let figureClicked = false;

const rightBorder = fourthDiv.offsetWidth - heart.offsetWidth - 10;
const bottomBorder = fourthDiv.offsetHeight - heart.offsetHeight - 10;
heart.addEventListener("click", () => {
  figureClicked = true;
});
document.addEventListener("keydown", (event) => {
  if (event.code == "Escape") figureClicked = false;
});

fourthDiv.addEventListener("mousemove", (event) => {
  if (figureClicked) {
    let x = event.pageX - fourthDiv.offsetLeft;
    let y = event.pageY - fourthDiv.offsetTop;

    if (x < rightBorder && y < bottomBorder) {
      heart.style.left = x + "px";
      heart.style.top = y + "px";
    }
  }
});

//task5
const serButton = document.getElementById("series-button");
const epContainer = document.getElementById("fifth-task");
let serials = [];
serButton.addEventListener("click", () => {
  let promise = fetch("https://breakingbadapi.com/api/episodes")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      for (let el of data) {
        if (!serials.includes(el.series)) {
          serials.push(el.series);
        }
      }
      serials.forEach((element) => {
        epContainer.innerHTML += `<h1>${element}</h1>`;
        let serialDiv = document.createElement("div");
        epContainer.append(serialDiv);
        serialDiv.className = "one-serial";
        for (let element of data) {
          createEpisodeDiv(element, serialDiv);
        }
      });
    });
});

function createEpisodeDiv(content, serialDiv) {
  let epDiv = document.createElement("div");
  epDiv.className = "one-episode";
  serialDiv.append(epDiv);
  epDiv.innerHTML = `<h1>${content.title}</h1>`;
  epDiv.innerHTML += `<h3>${content.episode} серия ${content.season} сезона</h3>`;
  epDiv.innerHTML += `<p>Дата выхода: ${content.air_date}</p>`;
  epDiv.innerHTML += `<h2>Персонажи</h2>`;
  for (let item of content.characters) {
    epDiv.innerHTML += `<p>${item}</p>`;
  }
}
