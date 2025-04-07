function reverseString(cadena) {
    const resultado = cadena.split("").reverse().join("");
    console.log("Texto invertido:", resultado);
  }
  
  // Pruebas
  reverseString("hola");     // → "aloh"
  reverseString("javascript"); // → "tpircsavaj"
  