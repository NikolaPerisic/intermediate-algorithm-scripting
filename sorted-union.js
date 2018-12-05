/*
Write a function that takes two or more arrays 
and returns a new array of unique values in the 
order of the original provided arrays. In other 
words, all values present from all arrays should 
be included in their original order, but with no 
duplicates in the final array.
*/

function uniteUnique(arr) {
  let newArr = [...arguments].reduce((x, y) => x.concat(y), []);

  return newArr.filter((x, y) => newArr.indexOf(x) == y);
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));