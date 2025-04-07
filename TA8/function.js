// function.js
function contarVocales(cadena) {
    const texto = cadena.toLowerCase();
    let contador = 0;
    for (let i = 0; i < texto.length; i++) {
      if ("aeiou".includes(texto[i])) {
        contador++;
      }
    }
    console.log(contador);
  }
  
  contarVocales("Hola mundo");
  contarVocales("Javascript");
  