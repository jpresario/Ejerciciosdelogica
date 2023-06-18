function next_pal(number) {
  number++; // Incrementamos el número en 1 para buscar el siguiente palíndromo

  while (!isPalindrome(number)) {
    number++; // Incrementamos el número hasta encontrar un palíndromo
  }

  return number;
}

function isPalindrome(number) {
  const reverseNumber = parseInt(number.toString().split('').reverse().join(''));
  return number === reverseNumber;
}
console.log(next_pal(11));    