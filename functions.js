// Abre el PDF en una pestaña nueva
function verArticulo(rutaPdf) {
  window.open(rutaPdf, "_blank");
}
function verArticulo2(rutaPdf) {
  window.open(rutaPdf, "_blank");
}
function verArticulo3(rutaPdf) {
  window.open(rutaPdf, "_blank");
} 

function resaltarPalabrasClave() { 
  const bloque = document.querySelector(".keyword"); // mismo nombre que en HTML 

  // Si ya está resaltado, lo quita; si no, lo aplica 
  if (bloque.style.backgroundColor === "yellow") 
    {  
      bloque.style.backgroundColor = "";
    } else 
      { bloque.style.backgroundColor = "yellow"; 

      } 
    }

// Función para volver arriba
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Detectar scroll para mostrar/ocultar el botón
window.onscroll = function() {
  const btn = document.getElementById("btnTop");
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

// Asignar evento al botón
document.getElementById("btnTop").addEventListener("click", scrollToTop);

function mostrarHora() {
  const ahora = new Date();
  document.getElementById("hora").textContent = "Hora actual: " + ahora.toLocaleTimeString();
}
function verArticulo(url) {
  window.open(url, "_blank");
}
 function verArticulo3(rutapdf) {
  window.open(rutapdf, "_blank");
 }
 function verArticulo4(url){
  window.open(url, "_bank");
 }
function paginaInicial() {
    window.location.href = "index.html";
}
function enviarComentario() {
    let comentario = document.getElementById("comentario").value;

if (comentario.trim() === "") {
alert(" Por favor escribe un comentario antes de enviarlo.");
} else {
  // Aquí lo mostramos en la consola, pero podrías enviarlo a una base de datos o lista
console.log("Nuevo comentario: " + comentario);

  // Lo mostramos también en la página
    let lista = document.getElementById("lista-comentarios");
    let nuevo = document.createElement("li");
    nuevo.textContent = comentario;
    lista.appendChild(nuevo);

  // Limpia el campo después de enviar
    document.getElementById("comentario").value = "";
    }
} 

// Mostrar alerta personalizada
function mostrarAlerta() {
  alert("¡Bienvenido a la sección de Daniel sobre ciberseguridad y huella digital!");
}

// Cambiar el color de fondo dinámicamente
function cambiarColorFondo() {
  const seccionDaniel = document.getElementById("daniel");
  const colores = ["lightgreen", "lightblue", "lightyellow", "lightpink"];
  const colorActual = seccionDaniel.style.backgroundColor;
  
  // Elegir un color diferente al actual
  let nuevoColor;
  do {
    nuevoColor = colores[Math.floor(Math.random() * colores.length)];
  } while (nuevoColor === colorActual);
  
  seccionDaniel.style.backgroundColor = nuevoColor;
}