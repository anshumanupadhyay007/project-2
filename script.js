// script.js
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.opacity = 0; // Fade out all slides
        if (i === index) {
            slide.style.opacity = 1; // Fade in the active slide
        }
    });
    document.querySelector('.slides').style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

function autoSlide() {
    setInterval(nextSlide, 3000);
}

window.onload = () => {
    showSlide(currentSlide);
    autoSlide();
};
