const carousel = document.querySelector('.carousel');
const carouselItems = Array.from(carousel.children);
// const carouselItems = Array.from(document.querySelectorAll('.carousel-item'));
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

let index = 0;

leftArrow.addEventListener('click', (e) => {
  prevSlide();
});
rightArrow.addEventListener('click', (e) => {
  nextSlide();
});

function prevSlide() {
  carouselItems[index].classList.remove('active');
  index--;

  rightArrow.classList.remove('hidden');
  if (index === 0) leftArrow.classList.add('hidden');
  if (index < 0) index = carouselItems.length - 1;

  carouselItems[index].classList.add('active');
}

function nextSlide() {
  console.log('go right');
  carouselItems[index].classList.remove('active');
  index++;

  leftArrow.classList.remove('hidden');
  if (index === carouselItems.length - 1) rightArrow.classList.add('hidden');
  if (index > carouselItems.length - 1) index = 0;

  carouselItems[index].classList.add('active');
}
// carouselItems.forEach(item => {
//     item.style.transform = `translateX(${100 * currentSlide}%)`
// })
