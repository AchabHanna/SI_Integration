const nav = document.getElementById("nav");
const openIcon = document.getElementById("open");

openIcon.addEventListener("click", () => {
  nav.classList.toggle("is-open");
});
