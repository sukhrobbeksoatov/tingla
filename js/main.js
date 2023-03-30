// var elHeader = document.querySelector(".main-header");

// elHeader.style.backgroundColor = "transparent";
// window.addEventListener("scroll", function () {
//   if (this.pageYOffset >= 100) {
//     elHeader.style.position = "sticky";
//     elHeader.style.top = "0";
//     elHeader.style.paddingTop = "30px";
//     elHeader.style.paddingBottom = "30px";
//     elHeader.style.backgroundColor = "rgba(255,255,255, 0.87)";
//     elHeader.style.backDropFilter = "blur(15px)";
//   } else {
//     elHeader.style.paddingTop = "60px";
//     elHeader.style.paddingBottom = "60px";
//     elHeader.style.BackgroundColor = "transparent";
//     elHeader.style.backDropFilter = "none";
//   }
// });

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
