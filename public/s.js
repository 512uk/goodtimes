const player = document.getElementById("player");
const bigRedButton = document.getElementById("button");
const subHeader = document.getElementById("subHeader");

bigRedButton.addEventListener("click", async () => {
  if (player.paused) {
    await player.play();
    subHeader.innerHTML = "Leave your cares behind... press to pause";
  } else {
    await player.pause();
    subHeader.innerHTML = "Press to play...";
  }
});
