/*
The array of two numbers is passed. Return the sum of those two 
numbers plus the sum of all the numbers between them. The lowest 
number will not always come first.
*/

function sumAll(arr) {
  let newArr = [];
  let awesomeArr = [];
  newArr = newArr.concat(arr).sort((a, b) => a - b);
  for (let i = newArr[0]; i <= newArr[newArr.length - 1]; i++) {
    awesomeArr.push(i);
  }
  return awesomeArr.reduce((a, b) => a + b);
}

console.log(sumAll([5, 15]));