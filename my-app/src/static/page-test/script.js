// script.js
let currentIndex = 0;
const slides = document.querySelectorAll(".slide");

function changeSlide(direction) {
    slides[currentIndex].classList.remove("active");

    currentIndex += direction;
    if (currentIndex < 0) {
        currentIndex = slides.length - 1;
    } else if (currentIndex >= slides.length) {
        currentIndex = 0;
    }

    slides[currentIndex].classList.add("active");
}

// Optionnel : Changement automatique toutes les 3 secondes
setInterval(() => changeSlide(1), 3000);
