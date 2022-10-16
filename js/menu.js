const catalogBtn = document.querySelector(".header__nav-list");
const catalog = document.querySelector(".header__nav-catalog");

catalogBtn.addEventListener("click", function () {
  catalog.classList.toggle("is-active");
});
