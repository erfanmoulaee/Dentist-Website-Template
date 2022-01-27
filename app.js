function classSwitcher() {
  slides.forEach((slide) => slide.classList.remove("active"));
  points.forEach((point) => point.classList.remove("active"));
  slides[active].classList.add("active");
  points[active].classList.add("active");
}

let goNext = () => {
  active = active == slides.length - 1 ? 0 : active + 1;
  classSwitcher();
};

let goPrev = () => {
  active = active == 0 ? slides.length - 1 : active - 1;
  classSwitcher();
};

//variable

let active = 0;

let slides = document.querySelectorAll(".slideshow-item");
let points = document.querySelectorAll(".points > span");

points.forEach((point, index) => {
  point.addEventListener("click", () => {
    active = index;
    classSwitcher();
  });
});
