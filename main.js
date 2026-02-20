const shareBtn = document.querySelector("#shareBtn");
const mobilePanel = document.querySelector("#mobilePanel");
const desktopPanel = document.querySelector("#desktopPanel");
const closeBtn = document.querySelector("#clsBtn");

shareBtn.addEventListener("click", function () {
  if (window.innerWidth >= 768) {
    desktopPanel.classList.toggle("hidden");
    desktopPanel.classList.toggle("flex");
  } else {
    mobilePanel.classList.toggle("hidden");
    mobilePanel.classList.toggle("flex");
  }
});

closeBtn.addEventListener("click", function () {
  mobilePanel.classList.add("hidden");
  mobilePanel.classList.remove("flex");
});
