let randomNumber1 = Math.floor(Math.random() * 6) + 1; // Generates a random number between 1 and 6

document
  .querySelector(".img1")
  .setAttribute("src", "./images/dice" + randomNumber1 + ".png"); // Sets the source of the first dice image

let randomNumber2 = Math.floor(Math.random() * 6) + 1; // Generates a random number between 1 and 6

document
  .querySelector(".img2")
  .setAttribute("src", "./images/dice" + randomNumber2 + ".png"); // Sets the source of the second dice image

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}
