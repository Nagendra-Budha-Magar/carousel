const prevBtn = document.querySelector('#left_btn');
const nextBtn = document.querySelector('#right_btn');
const slides = document.querySelectorAll('.slide img');
let currentIndex = 0;

// Convert NodeList to Array
const images = Array.from(slides);

// function updateSlide() {
//     slides.style.transform = `translateX(${-currentIndex * 100}px)`;
// }

// Function to update the active image
function updateSlide() {
    images.forEach((img, index) => {
        img.classList.remove('active'); // Remove active from all
    });
    images[currentIndex].classList.add('active'); // Show current image
}

prevBtn.addEventListener('click',() => {
    currentIndex = (currentIndex-1 + slides.length) % slides.length;
    updateSlide();

})

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlide();

})

updateSlide(); // Show the first image