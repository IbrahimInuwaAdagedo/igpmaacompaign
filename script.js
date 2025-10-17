let slideIndex = 0;
let slides, dots;

document.addEventListener("DOMContentLoaded", function() {
  slides = document.querySelectorAll(".mySlides");
  dots = document.querySelectorAll(".dot");
  showSlides(slideIndex);

  // Auto slide every 5s
  setInterval(() => plusSlides(1), 5000);
});

// Next/Prev controls
function plusSlides(n) {
  slideIndex += n;
  if (slideIndex >= slides.length) slideIndex = 0;
  if (slideIndex < 0) slideIndex = slides.length - 1;
  showSlides(slideIndex);
}

// Dot controls
function currentSlide(n) {
  slideIndex = n;
  showSlides(slideIndex);
}

// Show slide
function showSlides(n) {
  slides.forEach(slide => slide.style.display = "none");
  dots.forEach(dot => dot.classList.remove("active"));

  slides[n].style.display = "block";
  dots[n].classList.add("active");
}

// Toggle menu (mobile)
function toggleMenu() {
  document.querySelector(".nav-links").classList.toggle("show");
}
