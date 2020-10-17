const slideImages = document.querySelectorAll('.slide-image');
const slidesContainer = document.querySelector('.slides-container');
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');
const navigationDots = document.querySelector('.navigation-dots');

console.log(slideImages);
console.log(slidesContainer);
console.log(prevBtn);
console.log(nextBtn);
console.log(navigationDots);

let numberOfImages = slideImages.length;
console.log(numberOfImages);
let slideWidth = slideImages[0].clientWidth;
console.log(slideWidth);
let currentSlide = 0;

// Set up the slider
function init() {
    slideImages.forEach((img, i) => {
        // img.style.left = i * 100 + '%';
    });
    slideImages[0].classList.add('active');

    createNavigationDots();
}
init();

function createNavigationDots() {
    for(let i = 0; i < numberOfImages; i++) {
        const dot = document.createElement('div');
        dot.classList.add('single-dot');
        navigationDots.appendChild(dot);

        // 
    }
    navigationDots.children[0].classList.add('active');
}

// Next Button
nextBtn.addEventListener('click', () => {
    if(currentSlide >= numberOfImages - 1) {
        // console.log('Hit!!')
        goToSlide(0);
        return
    }
    currentSlide++;
    goToSlide(currentSlide);
})
// Prev Button
prevBtn.addEventListener('click', () => {
    if(currentSlide <= 0) {
        // console.log('Hit!!')
        goToSlide(numberOfImages - 1);
        return
    }
    currentSlide--;
    goToSlide(currentSlide);
})


function goToSlide(slideNumber) {
    // slidesContainer.style.transform = 'translateX(-' + slideWidth * slideNumber + 'px)';
    // slidesContainer.style.opacity = 
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

// 自動
setInterval(() => {
    if(currentSlide >= numberOfImages - 1) {
        goToSlide(0);
        // currentSlide = 0;
        return;
    }
    currentSlide++;
    goToSlide(currentSlide);
}, 4000);