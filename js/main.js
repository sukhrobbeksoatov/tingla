const video = document.querySelector("[data-player-video]");

function onVideoToggleClick(evt) {
  const el = evt.target.closest("[data-video-toggler]");

  if (!el) return;

  if (video.paused) {
    video.play();
    el.classList.add("player__toggler--pause");
  } else {
    video.pause();
    el.classList.remove("player__toggler--pause");
  }
}

function playerVideoHoverEffects() {
  if (window.innerWidth > 768) {
    video.addEventListener("mouseover", () => {
      video.nextElementSibling.classList.remove("hidden");
    });

    video.addEventListener("mouseout", () => {
      video.nextElementSibling.classList.add("hidden");
    });
  }
}
playerVideoHoverEffects();

document.addEventListener("click", onVideoToggleClick);
video.addEventListener("ended", () => {
  video.nextElementSibling.classList.remove("player__toggler--pause");
});

document.addEventListener("resize", playerVideoHoverEffects);
