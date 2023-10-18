const carousel = document.querySelector('.carousel');
const images = document.querySelectorAll('.carousel img');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let currentIndex = 0;

function updateCarousel() {
  const offset = -currentIndex * (100 / 3); // Desplazamiento para mostrar 3 imágenes a la vez
  carousel.style.transform = `translateX(${offset}%)`;
}

prevButton.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
});

nextButton.addEventListener('click', () => {
  if (currentIndex < images.length - 3) {
    currentIndex++;
    updateCarousel();
  }
});

// Mostrar el primer conjunto de tres imágenes al cargar la página
updateCarousel();
