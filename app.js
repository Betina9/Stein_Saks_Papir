const hands = ["rock", "paper", "scissors"];
const handAnimation = document.getElementById("handAnimation");
const userChoice = document.getElementById("userChoice");
const resultText = document.getElementById("result");

/* Spilleren velger en hånd*/
function getHand() {
  const randomIndex = Math.floor(Math.random() * 3);
  return hands[randomIndex];
}

/* Håndanimasjonen*/
function play(playerChoice) {
  resultText.textContent = "";
  handAnimation.currentTime = 0;
  handAnimation.style.display = "block";
  handAnimation.play();

  /* Etter animasjonen*/
  setTimeout(() => {
    handAnimation.pause();
    handAnimation.style.display = "none";

    const computerChoice = getHand();
    let result;

    if (playerChoice === computerChoice) {
      result = "Uavgjort!";
    } else if (
      (playerChoice === "rock" && computerChoice === "scissors") ||
      (playerChoice === "paper" && computerChoice === "rock") ||
      (playerChoice === "scissors" && computerChoice === "paper")
    ) {
      result = "Du vant!🥳✨";
    } else {
      result = "Datamaskinen vant!😞";
    }
    resultText.textContent = `Datamaskinens valg: ${computerChoice}. ${result}`;
  }, 2000);
}
