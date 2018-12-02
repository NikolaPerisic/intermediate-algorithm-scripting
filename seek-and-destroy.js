/*You will be provided with an initial array (the first argument in the 
destroyer function), followed by one or more arguments. Remove all 
elements from the initial array that are of the same value as these 
arguments.
*/
function destroyer(arr) {
  let filtered = [];
  let args = [...arguments];
  args.splice(0, 1);
  filtered = arr.filter((item) => args.indexOf(item) == -1);
  return filtered;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));