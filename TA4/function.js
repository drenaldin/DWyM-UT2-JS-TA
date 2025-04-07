function sumarElementos(arreglo) {
    let suma = 0;
    for (let i = 0; i < arreglo.length; i++) {
      suma += arreglo[i];
    }
    console.log("Suma total:", suma);
  }
  
  // Pruebas
  sumarElementos([1, 2, 3, 4]);     // Suma total: 10
  sumarElementos([10, -2, 5]);      // Suma total: 13
  