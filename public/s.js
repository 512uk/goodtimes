let tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player("player", {
    height: "390",
    width: "640",
    videoId: "oQT9rT74WYM",
    events: {
      onError: (err) => {
        console.error(err);
      },
    },
  });
}

const bigRedButton = document.getElementById("button");
bigRedButton.addEventListener("click", (event) => {
  if (detectMob()) {
    window.location = "https://www.youtube.com/watch?v=oQT9rT74WYM";
    return;
  }

  if (player.getPlayerState() == 1) {
    player.pauseVideo();
  } else {
    player.playVideo();
  }
});

function detectMob() {
  const toMatch = [
    /Android/i,
    /webOS/i,
    /iPhone/i,
    /iPad/i,
    /iPod/i,
    /BlackBerry/i,
    /Windows Phone/i,
  ];

  return toMatch.some((toMatchItem) => {
    return navigator.userAgent.match(toMatchItem);
  });
}
