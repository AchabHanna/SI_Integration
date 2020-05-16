// animate section product
AOS.init({
  duration: 1400,
});

const nav = document.getElementById("nav");
const openIcon = document.getElementById("open");

openIcon.addEventListener("click", () => {
  nav.classList.toggle("is-open");
});
