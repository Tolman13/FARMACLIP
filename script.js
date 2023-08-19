const imagenes = document.querySelectorAll('.imagen');
let indiceActual = 0;

function mostrarSiguienteImagen() {
  imagenes[indiceActual].style.opacity = 0;
  indiceActual = (indiceActual + 1) % imagenes.length;
  imagenes[indiceActual].style.opacity = 1;
}

// Mostrar la primera imagen al cargar la página
imagenes[indiceActual].style.opacity = 1;

// Cambiar de imagen cada 3 segundos
setInterval(mostrarSiguienteImagen, 3000);