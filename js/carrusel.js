const carousel = document.querySelector('.carousel');
const imageGroups = document.querySelectorAll('.image-group');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let currentIndex = 0;

function updateCarousel() {
  imageGroups.forEach((group, index) => {
    if (index === currentIndex) {
      group.style.display = 'flex';
    } else {
      group.style.display = 'none';
    }
  });
}

prevButton.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = imageGroups.length - 1;
  }
  updateCarousel();
});

nextButton.addEventListener('click', () => {
  if (currentIndex < imageGroups.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  updateCarousel();
}

// Mostrar el primer grupo de imágenes al cargar la página
updateCarousel();
