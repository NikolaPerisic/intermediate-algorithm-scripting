/*
Find the smallest common multiple of the provided 
parameters that can be evenly divided by both, as 
well as by all sequential numbers in the range between 
these parameters.
The range will be an array of two numbers that will not 
necessarily be in numerical order.
*/

function smallestCommons(arr) {
  let gcd = (a, b) => a ? gcd(b % a, a) : b;
  let newArr = [];
  for (let i = Math.max(...arr); i >= Math.min(...arr); i--) {
    newArr.push(i);
  }
  let lcm = (a, b) => (a * b) / gcd(a, b);
  return newArr.reduce(lcm);
}


console.log(smallestCommons([1,13]));