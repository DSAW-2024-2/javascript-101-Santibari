// Sum of Two Numbers
function sum(a, b) {
  // Add your code here
  return a + b;
}

// Factorial of a Number
function factorial(n) {
  // Add your code here
  if (n < 0) {
    return 'No es un definido';
  }
  if (n === 0 || n === 1) {
    return 1;
  }
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

// Find the Largest Number
function findLargest(arr) {
  // Add your code here
  if (arr.length === 0) {
    return 'Array is empty';
  }
  return Math.max(...arr);
}

// Count Vowels in a String
function countVowels(str) {
  // Add your code here
  const vowels = 'aeiouAEIOU';
  let count = 0;
  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

// Check if a Number is Prime
function isPrime(n) {
  // Add your code here
  if (n <= 1) return false;
  if (n <= 3) return true;
  if (n % 2 === 0 || n % 3 === 0) return false;
  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) return false;
  }
  return true;
}

module.exports = {
  sum,
  factorial,
  findLargest,
  countVowels,
  isPrime,
};
