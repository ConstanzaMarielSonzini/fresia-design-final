const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');
const img3 = document.getElementById('img3');

// Cambiar las imágenes a color al pasar el mouse
img1.addEventListener('mouseover', () => {
  img1.src = 'img1.jpg';
});

/*MENU COLOR*/

document.addEventListener("DOMContentLoaded", function () {
  var currentPage = window.location.pathname;

  if (currentPage.includes("servicios.html")) {
      document.getElementById("servicios").style.color = "red";
  }
});
