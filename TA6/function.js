// function.js
function isPalindrome(cadena) {
    const normal = cadena.toLowerCase().replace(/\s/g, '');
    const invertido = normal.split("").reverse().join("");
    console.log(normal === invertido);
  }
  
  isPalindrome("oso");         // true
  isPalindrome("hola");        // false
  isPalindrome("anita lava la tina"); // true
  