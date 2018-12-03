/*
The DNA strand is missing the pairing element. 
Take each character, get its pair, and return 
the results as a 2d array. Base pairs are a pair 
of AT and CG. Match the missing element to the 
provided character. Return the provided character 
as the first element in each array. The character 
and its pair are paired up in an array, and all 
the arrays are grouped into one encapsulating 
array.
*/

function pairElement(str) {
  let split = str.split("");
  let newArr = [];
  for (let i = 0; i < split.length; i++) {
    switch(split[i]) {
      case "A": newArr.push([split[i], "T"]);
      break;
      case "T": newArr.push([split[i], "A"]);
      break;
      case "C": newArr.push([split[i], "G"]);
      break;
      case "G": newArr.push([split[i], "C"]);
      break;
      default: return "Invalid DNA pairing element";
    }
  }
  return newArr;
}

console.log(pairElement("ATCGA"));