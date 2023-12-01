
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const slide = document.querySelector('.carousel-slide');

let scrollPosition = 0;

nextBtn.addEventListener('click', () => {
  scrollPosition += 530; // Ajusta la cantidad de desplazamiento según el ancho de tus imágenes
  slide.scrollTo({
    left: scrollPosition,
    behavior: 'smooth'
  });
});

prevBtn.addEventListener('click', () => {
  scrollPosition -= 530; // Ajusta la cantidad de desplazamiento según el ancho de tus imágenes
  slide.scrollTo({
    left: scrollPosition,
    behavior: 'smooth'
  });
});
