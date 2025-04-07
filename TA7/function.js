// function.js
function getInitials(nombreCompleto) {
    const palabras = nombreCompleto.trim().split(" ");
    let iniciales = "";
    for (let i = 0; i < palabras.length; i++) {
      iniciales += palabras[i][0].toUpperCase();
    }
    console.log(iniciales);
  }
  
  getInitials("Juan Pérez");
  getInitials("maría jose gonzález");
  