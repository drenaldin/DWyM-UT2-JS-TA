function removeFromArray(arreglo, item) {
    const resultado = arreglo.filter(elemento => elemento !== item);
    console.log(resultado);
  }
  
  // Ejemplo de prueba
  removeFromArray([1, 2, 3, 4, 5], 3); // → [1, 2, 4, 5]
  removeFromArray(["a", "b", "c"], "b"); // → ["a", "c"]
  