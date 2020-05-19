// animate section product
AOS.init({
  duration: 1400
});

const nav = document.getElementById("nav");
const openIcon = document.getElementById("open");

openIcon.addEventListener("click", () => {
  nav.classList.toggle("is-open");
});

//footer

const moreInfo = document.getElementById("moreInfo");
const moreHelp = document.getElementById("moreHelp");
const help = document.querySelector(".footer__serviceDetails--help");
const info = document.querySelector(".footer__serviceDetails--info");
const wrapperHelp = document.querySelector(".footer__wrapper--help");
const wrapperInfo = document.querySelector(".footer__wrapper--info");

moreHelp.addEventListener("click", () => {
  help.classList.toggle("is-visible");
  wrapperHelp.classList.toggle("is-modifier");
});

moreInfo.addEventListener("click", () => {
  info.classList.toggle("is-visible");
  wrapperInfo.classList.toggle("is-modifier");
});
