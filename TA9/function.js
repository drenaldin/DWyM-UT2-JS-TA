// function.js
function numerosPares(arreglo) {
    const pares = arreglo.filter(n => n % 2 === 0);
    console.log(pares);
  }
  
  numerosPares([1, 2, 3, 4, 5, 6]);
  numerosPares([10, 11, 15, 20]);
  