const slide = document.querySelectorAll('.slide')

for (const slides of slide) {
    slides.addEventListener('click', () => {
        classCleaner()
        slides.classList.add('active')
    })
}
const classCleaner = () => slide.forEach((slide) => slide.classList.remove('active'))