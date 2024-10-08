// Sum of Two Numbers
function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    console.log('Los datos de entrada no son adecuados');
    return 'Los datos de entrada no son adecuados';
  }
  const result = a + b;
  console.log(`La suma de ${a} y ${b} es: ${result}`);
  return result;
}

// Factorial of a Numbe
function factorial(n) {
  if (typeof n !== 'number') {
    console.log('Los datos de entrada no son adecuados');
    return 'Los datos de entrada no son adecuados';
  }
  if (n < 0) {
    console.log('El factorial no está definido para números negativos');
    return 'No es un definido';
  }
  if (n === 0 || n === 1) {
    console.log(`El factorial de ${n} es: 1`);
    return 1;
  }
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  console.log(`El factorial de ${n} es: ${result}`);
  return result;
}

// Find the Largest Number
function findLargest(arr) {
  if (!Array.isArray(arr) || arr.some(item => typeof item !== 'number')) {
    console.log('Los datos de entrada no son adecuados');
    return 'Los datos de entrada no son adecuados';
  }
  if (arr.length === 0) {
    console.log('El array está vacío');
    return 'Array is empty';
  }
  const largest = Math.max(...arr);
  console.log(`El número más grande en el array es: ${largest}`);
  return largest;
}

// Count Vowels in a String
function countVowels(str) {
  if (typeof str !== 'string') {
    console.log('Los datos de entrada no son adecuados');
    return 'Los datos de entrada no son adecuados';
  }
  const vowels = 'aeiouAEIOU';
  let count = 0;
  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  console.log(`La cantidad de vocales en la cadena es: ${count}`);
  return count;
}

// Check if a Number is Prime
function isPrime(n) {
  if (typeof n !== 'number') {
    console.log('Los datos de entrada no son adecuados');
    return 'Los datos de entrada no son adecuados';
  }
  if (n <= 1) {
    console.log(`${n} no es un número primo`);
    return false;
  }
  if (n <= 3) {
    console.log(`${n} es un número primo`);
    return true;
  }
  if (n % 2 === 0 || n % 3 === 0) {
    console.log(`${n} no es un número primo`);
    return false;
  }
  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) {
      console.log(`${n} no es un número primo`);
      return false;
    }
  }
  console.log(`${n} es un número primo`);
  return true;
}

module.exports = {
  sum,
  factorial,
  findLargest,
  countVowels,
  isPrime,
};
