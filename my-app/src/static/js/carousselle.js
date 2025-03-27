let btnCarouselleHaut = document.getElementById("btnCarouselleHaut");
let btnCarouselleBas = document.getElementById("btnCarouselleBas");
let animationSection = document.getElementsByClassName("animationSection"); 
let position = 0;
let indexCarousselle = 0;
let maxIndex = animationSection.length - 1; // Nombre total d'éléments

btnCarouselleBas.onclick = function () {
    if (indexCarousselle < maxIndex) {
        indexCarousselle++;
        position -= 74;
    } else {
        indexCarousselle = 0;
        position = 0;
    }
    
    Array.from(animationSection).forEach(element => {
        element.style.transform = `translateY(${position}vh)`;
        element.style.transition = "1s";
    });
};

btnCarouselleHaut.onclick = function () {
    if (indexCarousselle > 0) {
        indexCarousselle--;
        position += 74;
        
        Array.from(animationSection).forEach(element => {
            element.style.transform = `translateY(${position}vh)`;
            element.style.transition = "1s";
        });
    }
};
