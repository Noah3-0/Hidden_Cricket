const newGame = document.getElementById("new-game");
const form = document.getElementById("form");
const result = document.getElementById("result");
const input = document.getElementById("input");
const band = document.getElementById("bdd");

let checkValue = 0;
let array;
let bool = true;

// Button to start the game
newGame.addEventListener("click", () => {
  if (bool === true) {
    popUp();
    mathRandom();
    console.log(array);
    bool = false;
  } else {
    if (confirm("reset the game ?")) {
      mathRandom();
      result.innerHTML = "";
      popUp();
      console.log(array);
    }
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(checkValue);
  check();
});

function popUp() {
  band.style.marginTop = "-28px";
  setTimeout(() => {
    band.style.marginTop = "-60px";
  }, 3000);
}

function mathRandom() {
  const numbers = new Set();

  while (numbers.size < 7) {
    numbers.add(Math.floor(Math.random() * 21));
  }

  array = Array.from(numbers);
  //   mathRandom();
}

input.addEventListener("input", (e) => {
  checkValue = e.target.value;
  console.log(checkValue);
});

function check() {
  for (let i = 0; i < array.length; i++) {
    if (checkValue == array[i]) {
      result.innerHTML += `<p class="number-display">${checkValue}</p>`;
    }
  }
}

// -28px
