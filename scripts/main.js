var menuBtn = document.querySelectorAll(".menu-btn");
const menu = document.querySelector("#menu");
menuBtn.forEach((btn) => {
  btn.addEventListener("mouseover", () => {
    menu.style.backgroundColor = "rgb(251, 251, 253) !important";
  });
  btn.addEventListener("mouseleave", () => {
    menu.style.backgroundColor = "rgba(0, 0, 0, 0.039) !important";
  });
});
