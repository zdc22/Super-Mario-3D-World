// TOGGLE MENU
const menuBtn = document.querySelector("#menuBtn");

menuBtn.addEventListener("click", (e) => {
  const menu = document.querySelector(".mobile-links");

  menu.classList.toggle("hidden");
});

// SCROLL REVEAL
window.sr = ScrollReveal();
sr.reveal(".nav", {
  duration: 2000,
  origin: "left",
});
sr.reveal(".header", {
  duration: 2000,
  origin: "top",
  distance: "300px",
});
sr.reveal(".buy", {
  duration: 2000,
  origin: "right",
  distance: "300px",
});
sr.reveal("#play", {
  duration: 2000,
  origin: "bottom",
  delay: 1000,
});
sr.reveal(".cat", {
  duration: 2000,
  origin: "top",
  distance: "300px",
  viewFactor: 0.2,
});

sr.reveal("#bowser", {
  duration: 2000,
  origin: "left",
  distance: "100px",
  delay: 200,
});

sr.reveal("#footer", {
  duration: 2000,
  origin: "bottom",
  distance: "100px",
  delay: 300,
});
