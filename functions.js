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
