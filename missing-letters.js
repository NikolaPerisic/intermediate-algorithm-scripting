/*
Find the missing letter in the passed letter 
range and return it. If all letters are present 
in the range, return undefined.
*/
function fearNotLetter(str) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  alphabet = alphabet.substring(str.charCodeAt(0) % 97);
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(alphabet[i]) == -1) {
      return alphabet[i];
    }
  }
  return undefined;
}

console.log(fearNotLetter("stvwx"));