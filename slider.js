const previousBtn = document.querySelector(".controls__previousArrow");
const firstSlide = document.querySelector(".slider__item:first-child");
const lastslide = document.querySelector(".slider__item:last-child");
const nextBtn = document.querySelector(".conrtols__nextArrow");

const SHOWING_CL = "showing";

function slidePrevious() {
  const currentSlide = document.querySelector(`.${SHOWING_CL}`);

  if (currentSlide) {
    currentSlide.classList.remove(SHOWING_CL);
    const previous = currentSlide.previousElementSibling;
    if (previous) {
      previous.classList.add(SHOWING_CL);
    } else {
      lastslide.classList.add(SHOWING_CL);
    }
  }
}

function slide() {
  const currentSlide = document.querySelector(`.${SHOWING_CL}`);

  if (currentSlide) {
    currentSlide.classList.remove(SHOWING_CL);
    const nextSlide = currentSlide.nextElementSibling;
    if (nextSlide) {
      nextSlide.classList.add(SHOWING_CL);
    } else {
      firstSlide.classList.add(SHOWING_CL);
    }
  } else {
    firstSlide.classList.add(SHOWING_CL);
  }
}

nextBtn.addEventListener("click", slide);
previousBtn.addEventListener("click", slidePrevious);
