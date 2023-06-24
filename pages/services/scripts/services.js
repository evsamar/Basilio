const sliderLine = document.querySelector('.slider-line')
const prevButton = document.querySelector('.prev-btn')
const nextButton = document.querySelector('.next-btn')

const dots = document.querySelectorAll('.dot')

let position = 0
let dotIndex = 0


const serviceWidth = 1275

const nextSlide = () => {
    if (position < (dots.length - 1) * serviceWidth) {
        position += serviceWidth
        dotIndex++
    } else {
        position = 0
        dotIndex = 0
    }

    sliderLine.style.left = -position + 'px'
    thisSlide(dotIndex)
}

const prevSlide = () => {
    if (position > 0) {
        position -= serviceWidth
        dotIndex--
    } else {
        position = (dots.length - 1) * serviceWidth
        dotIndex = (dots.length - 1)
    }

    sliderLine.style.left = -position + 'px'
    thisSlide(dotIndex)
}

const thisSlide = (index) => {
    for (let dot of dots) {
        dot.classList.remove('active')
    }
    dots[index].classList.add('active')
}


nextButton.addEventListener('click', nextSlide)
prevButton.addEventListener('click', prevSlide)

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        position = serviceWidth * index
        sliderLine.style.left = -position + 'px'
        dotIndex = index
        thisSlide(dotIndex)
    })
})


setInterval(() => {
    nextSlide()
}, 20000)