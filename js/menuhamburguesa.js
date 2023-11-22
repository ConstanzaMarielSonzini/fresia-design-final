const menuBtn = document.querySelector('.menu-btn');
const menuMobile = document.querySelector('.menu-mobile');
const informacion = document.querySelector('.info-general');

// Elementos a agregar al menú desplegable junto con sus enlaces
const opcionesMobile = [
  { texto: 'Inicio', enlace: 'index.html' },
  { texto: 'Servicios', enlace: 'servicios.html' },
  { texto: 'Proyectos', enlace: 'proyectos.html' },
  { texto: 'Sobre nosotros', enlace: 'sobrenosotros.html' },
  { texto: 'Contacto', enlace: 'contacto.html' },
  { texto: 'Juego', enlace: 'juego.html' },
  // Puedes agregar más opciones aquí
];

// Función para construir el menú desplegable y resaltar la página actual
function construirMenuMobile() {
  menuMobile.innerHTML = ''; // Limpiamos la lista cada vez que se construye el menú

  opcionesMobile.forEach(opcion => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = opcion.enlace;
    a.textContent = opcion.texto;
    li.appendChild(a);
    if (opcion.enlace === window.location.pathname) {
      li.classList.add('active'); // Agrega la clase 'active' si coincide con la página actual
    }
    menuMobile.appendChild(li);
  });
}

menuBtn.addEventListener('click', () => {
  // Cerrar información si está abierta
  if (informacion.classList.contains('open')) {
    informacion.classList.remove('open');
  }

  // Mostrar/ocultar el menú desplegable
  menuMobile.classList.toggle('active');
  if (menuMobile.classList.contains('active')) {
    construirMenuMobile();
  }
});
