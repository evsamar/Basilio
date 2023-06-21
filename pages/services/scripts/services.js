const sliderLine = document.querySelector('.slider-line'),
    prewButton = document.querySelector('.prev-btn'),
    nextButton = document.querySelector('.next-btn'),
    dots = document.querySelectorAll('.dots');

let position = 0;
dotIndex = 0;


//FUNCTIONS

const nextSlide = () => {
    if (position < (dots.length - 1) * 1275) {
        position += 1275;
        dotIndex++;
    } else {
        position = 0;
        dotIndex = 0;
    }

    sliderLine.style.left = -position + 'px';
    thisSlide(dotIndex)
}

const prevSlide = () => {
    if (position > 0) {
        position -= 1275;
        dotIndex--;
    } else {
        position = (dots.length - 1) * 1275;
        dotIndex = (dots.length - 1);
    }

    sliderLine.style.left = -position + 'px';
    thisSlide(dotIndex);
}

const thisSlide = (index) => {
    for (let dot of dots) {
        dot.classList.remove('active');
    }
    dots(index).classList.add('active');
}


//EVENTLISTENERS


nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        position = 1275 * index
        sliderLine.style.left = -position + 'px'
        dotIndex = index
        thisSlide(dotIndex)
    })
})


//SETINTERVAL

setInterval(() => {
    nextSlide()
}, 5000)