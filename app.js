const hands = ["rock", "paper", "scissors"];
const handAnimation = document.getElementById("handAnimation");

function getHand() {
  const randomIndex = Math.floor(Math.random() * 3);
  return hands[randomIndex];
}

/* Håndanimasjonen*/
function playHandAnimation() {
  handAnimation.currentTime = 0;
  handAnimation.play();

  setTimeout(() => {
    handAnimation.pause();
  }, 5000);
}

playHandAnimation();
