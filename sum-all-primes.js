// Sum all the prime numbers up to and including the 
// provided number.

function sumPrimes(num) {
  let primedArr = [];
  if (num > 1) {
    primedArr.push(2);
  }
  for (let i = 3; i <= num; i+= 2) {
    if (primedArr.every((x) => i % x !== 0)) {
      primedArr.push(i);
    }
  }
  return primedArr.reduce((a, b) => a + b);
}

console.log(sumPrimes(100));