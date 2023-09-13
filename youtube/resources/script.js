const asideIcon = document.querySelector("#aside-icon");
const main = document.querySelector("main");

asideIcon.addEventListener("click", function () {
  // style 변경 TODO..
  main.classList.toggle("aside-change");
});
