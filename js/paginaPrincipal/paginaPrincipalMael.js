// Variable de la imagen del header
let img = document.getElementById("imagenHeader");

// Array de imagenes de los posters
let imagenes = [
  "./../../img/paginaPrincipal/paginaCine/imagen1.jpg",
  "./../../img/paginaPrincipal/paginaCine/imagen2.jpg",
  "./../../img/paginaPrincipal/paginaCine/imagen3.jpg",
  "./../../img/paginaPrincipal/paginaCine/imagen4.jpg",
  "./../../img/paginaPrincipal/paginaCine/imagen5.jpg",
  "./../../img/paginaPrincipal/paginaCine/imagen6.jpg",
  "./../../img/paginaPrincipal/paginaCine/imagen7.jpg",
  "./../../img/paginaPrincipal/paginaCine/imagen8.jpg"
]

// Numero que servira para ir cambiando la imagen
var numImg = 0;

// Funcion para pasar de imagen
function pasarImagen(num) {
  numImg = numImg + num;
  if(numImg >= imagenes.length){
    numImg = 0;
  }else if(numImg < 0){
    numImg = imagenes.length - 1;
  }
  // Cambiar la imagen
  img.src = imagenes[numImg];
}

// Funcion a la que no se le pasa ningun valor para aplicar el setInterval. Esta solucion la encontré con Aitor.
function pasarImagenAuto(){
  pasarImagen(1);
}
setInterval(pasarImagenAuto, 5000)

//FUNCIONES COOKIES
document.addEventListener("DOMContentLoaded", function() {
  var avisoCookies = document.getElementById("avisoCookies");
  var cookiesForm = document.getElementById("cookiesForm");

  // Comprobar si el usuario ya aceptó las cookies
  if (!cookiesAceptadas()) {
      mostrarAvisoCookies();
  }

  // Mostrar el aviso de cookies
  function mostrarAvisoCookies() {
      avisoCookies.style.display = "block";
  }

  // Ocultar el aviso de cookies y almacenar las preferencias del usuario
  function aceptarCookies(event) {
      event.preventDefault();
      avisoCookies.style.display = "none";
      almacenarCookiesAceptadas();
  }

  // Función para verificar si el usuario ya aceptó las cookies
  function cookiesAceptadas() {
      return localStorage.getItem("cookiesAceptadas") === "true";
  }

  // Función para almacenar las preferencias del usuario en el almacenamiento local
  function almacenarCookiesAceptadas() {
      var checkboxes = cookiesForm.querySelectorAll("input[type=checkbox]:checked");
      localStorage.setItem("cookiesAceptadas", "true");
      checkboxes.forEach(function(checkbox) {
          localStorage.setItem(checkbox.name, "true");
      });
  }

  // Agregar evento de envío al formulario de cookies
  cookiesForm.addEventListener("submit", aceptarCookies);

  // Ocultar el aviso de cookies si ya han sido aceptadas
  if (cookiesAceptadas()) {
      avisoCookies.style.display = "none";
  }
});
