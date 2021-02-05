// Carousel
const carousel = document.getElementsByClassName('carousel_img');

let currentSlide = 0;

setInterval(() => {
    if(currentSlide !== carousel.length-1){
        carousel[currentSlide].classList.remove('active');
        carousel[currentSlide + 1].classList.add('active');
        currentSlide++;
    } else {
        carousel[currentSlide].classList.remove('active');
        currentSlide = 0;
        carousel[currentSlide].classList.add('active');
    }
},3000);

