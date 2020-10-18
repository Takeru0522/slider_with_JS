const slideImages = document.querySelectorAll('.slide-image');
const slidesContainer = document.querySelector('.slides-container');
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');
const navigationDots = document.querySelector('.navigation-dots');

let numberOfImages = slideImages.length;
let slideWidth = slideImages[0].clientWidth;
let currentSlide = 0;

// Set up the slider
function init() {
    slideImages[0].classList.add('active');
    createNavigationDots();
}
init();

// Create Dots
function createNavigationDots() {
    for(let i = 0; i < numberOfImages; i++) {
        const dot = document.createElement('div');
        dot.classList.add('single-dot');
        navigationDots.appendChild(dot);
    }
    navigationDots.children[0].classList.add('active');
}

// Next Button
nextBtn.addEventListener('click', () => {
    if(currentSlide >= numberOfImages - 1) {
        goToSlide(0);
        return
    }
    currentSlide++;
    goToSlide(currentSlide);
})

// Prev Button
prevBtn.addEventListener('click', () => {
    if(currentSlide <= 0) {
        goToSlide(numberOfImages - 1);
        return
    }
    currentSlide--;
    goToSlide(currentSlide);
})

function goToSlide(slideNumber) {
    currentSlide = slideNumber;
    setActiveClass();
}

// Set Active Class
function setActiveClass() {
    // Set Acitve class for slide image
    let currentActive = document.querySelector('.slide-image.active');
    currentActive.classList.remove('active');
    slideImages[currentSlide].classList.add('active');

    // Set Acitve class for navigation dots
    let currentDot = document.querySelector('.single-dot.active');
    currentDot.classList.remove('active');
    navigationDots.children[currentSlide].classList.add('active');
}

// Slide show
setInterval(() => {
    if(currentSlide >= numberOfImages - 1) {
        goToSlide(0);
        return;
    }
    currentSlide++;
    goToSlide(currentSlide);
}, 4000);