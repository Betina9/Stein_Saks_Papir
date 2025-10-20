const hands = ["rock", "paper", "scissors"];
const t = {
  rock: "🪨 Stein",
  paper: "📄 Papir",
  scissors: "✂️ Saks",
};

const handAnimation = document.getElementById("handAnimation");
const userChoice = document.getElementById("userChoice");
const computerChoice = document.getElementById("computerChoice");
const outcome = document.getElementById("outcome");

document.getElementById("result").style.display = "none";

// Datamaskinens valg
function getHand() {
  const randomIndex = Math.floor(Math.random() * hands.length);
  return hands[randomIndex];
}

// Spillrunde
function play(playerChoice) {
  document.getElementById("result").style.display = "block";
  userChoice.textContent = `Ditt valg: ${t[playerChoice]}`;
  computerChoice.textContent = "Datamaskinens valg: …";
  outcome.textContent = "";

  // Spill animasjon
  handAnimation.currentTime = 0;
  handAnimation.style.display = "block";
  handAnimation.play().catch(() => {});

  setTimeout(() => {
    handAnimation.pause();
    handAnimation.style.display = "none";

    const computerHand = getHand();

    computerChoice.textContent = `Datamaskinens valg: ${t[computerHand]}`;

    let result;
    if (playerChoice === computerHand) {
      result = "Uavgjort! 🟰";
    } else if (
      (playerChoice === "rock" && computerHand === "scissors") ||
      (playerChoice === "paper" && computerHand === "rock") ||
      (playerChoice === "scissors" && computerHand === "paper")
    ) {
      result = "Du vant! 🥳✨";
    } else {
      result = "Datamaskinen vant! 😞";
    }

    outcome.textContent = `Resultat: ${result}`;
  }, 5000);
}
