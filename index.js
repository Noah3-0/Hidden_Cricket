const newGame = document.getElementById("new-game");
const form = document.getElementById("form");
const result = document.getElementById("result");
const input = document.getElementById("input");

let checkValue = 0;
let array;

// Button to start the game
newGame.addEventListener("click", () => {
  mathRandom();
  console.log(array);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(checkValue);
  check();
});

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
      result.innerHTML += `<p>${checkValue}</p>`;
    }
  }
}
