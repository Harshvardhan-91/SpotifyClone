document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    menuside.classList.remove("active");
  })
);
const hamburger = document.querySelector(".hamburger");
const menuside = document.querySelector(".menu_side");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  menuside.classList.toggle("active");
});
