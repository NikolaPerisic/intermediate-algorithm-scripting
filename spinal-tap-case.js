//Convert a string to spinal case lowercase-words-joined-by-dashes.

function spinalCase(str) {
  return str.split(/(?=[A-Z])|_|-|\s/).join("-").toLowerCase();
}

console.log(spinalCase("thisIsSpinalTap"));