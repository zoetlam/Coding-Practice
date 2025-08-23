
// Write function to calculate factorial of given number


function factorial(value) {
  let result = 1;
  while (value > 1) {
    result = value * result;
    value--;
  }
  return result;
}
console.log(factorial(4))

// Recursive 
function factorialRecursive(n) {
    if (n <= 1) {
        return 1;
    }
    return n * factorial(n - 1);
}
console.log(factorialRecursive(4))