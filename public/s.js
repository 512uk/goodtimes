const player = document.getElementById("player");
const bigRedButton = document.getElementById("button");
const header = document.getElementById("header");
const subHeader = document.getElementById("subHeader");
const dancer = document.getElementById("dancer");

bigRedButton.addEventListener("click", async () => {
  if (player.paused) {
    await player.play();
    header.classList.add("hide");
    subHeader.classList.add("hide");
    dancer.classList.remove("hide");
  } else {
    await player.pause();
    header.classList.remove("hide");
    subHeader.classList.remove("hide");
    dancer.classList.add("hide");
  }
});
