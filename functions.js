// Abre el PDF en una pestaña nueva
function verArticulo(rutaPdf) {
  window.open(rutaPdf, "_blank");
}
function verArticulo2(rutaPdf) {
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