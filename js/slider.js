let newProduct = document.querySelector(".newProduct");
let prevBtn = newProduct.querySelector(".btn-prev");
let nextBtn = newProduct.querySelector(".btn-next");
let newOne = document.querySelector(".new__slider-one");
let newLast = document.querySelector(".new__slider-last");

const clickSlide = () => {
  let slideActiv = newProduct.querySelector(".is-active");
  if (prevBtn) {
    let newActiv =
      newProduct.querySelector(".is-active").previousElementSibling;
    if (newActiv == null) {
      addClass(newLast, "is-active");
      clearClass(slideActiv, "is-active");
    } else {
      addClass(newActiv, "is-active");
      clearClass(slideActiv, "is-active");
    }
  } else {
    let newActiv = newProduct.querySelector(".is-active").nextElementSibling;
    console.log(newActiv);
    if (newActiv == null) {
      addClass(newOne, "is-active");
      clearClass(slideActiv, "is-active");
    } else {
      addClass(newActiv, "is-active");
      clearClass(slideActiv, "is-active");
    }
  }
};

prevBtn.addEventListener("click", clickSlide);
nextBtn.addEventListener("click", clickSlide);

/* Slider Action */
let actionProduct = document.querySelector(".action");
let btnPrev = actionProduct.querySelector(".btn-prev");
let btnNext = actionProduct.querySelector(".btn-next");
