const headerSwitch = document.querySelector(".header-switch");
const headerNavigation = document.querySelector(".header-nav");
const headerOverlay = document.querySelector(".header-overlay");
const header = document.querySelector(".header");
const body = document.body;

headerSwitch.addEventListener("click", (e) => {
  e.stopPropagation();
  if(headerNavigation.classList.contains("nav-show")){
    body.classList.remove("noscroll");
    headerNavigation.classList.remove("nav-show");
    headerSwitch.classList.remove("open");
    headerOverlay.classList.remove("overlay-show");
    headerOverlay.classList.add("fade-out");
    headerOverlay.classList.remove("fade-in");
  }
  else{
    body.classList.add("noscroll");
    headerNavigation.classList.add("nav-show");
    headerSwitch.classList.add("open");
    headerOverlay.classList.add("overlay-show");
    headerOverlay.classList.add("fade-in");
    headerOverlay.classList.remove("fade-out");
  }
});

document.documentElement.addEventListener("click", () => {
  console.log("asdasf");
  body.classList.remove("noscroll");
  headerSwitch.classList.remove("open");
  headerNavigation.classList.remove("nav-show");
  headerOverlay.classList.remove("overlay-show");
  headerOverlay.classList.add("fade-out");
  headerOverlay.classList.remove("fade-in");
});
