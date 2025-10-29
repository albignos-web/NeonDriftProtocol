function startGame() {
  document.querySelector(".start-button").classList.add("hidden");
  document.querySelector(".subtitle").classList.add("hidden");
  document.getElementById("game-screen").classList.remove("hidden");

  let score = 0;
  const scoreDisplay = document.getElementById("score");

  // Simula aumento punteggio
  setInterval(() => {
    score += Math.floor(Math.random() * 10);
    scoreDisplay.textContent = score;
  }, 1000);
}

document.querySelector(".start-button").addEventListener("click", startGame);

document.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    startGame();
  }
});
