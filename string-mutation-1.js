/*Translate the provided string to pig latin.
Pig Latin takes the first consonant (or consonant 
cluster) of an English word, moves it to the end 
of the word and suffixes an "ay". If a word begins 
with a vowel you just add "way" to the end.
Input strings are guaranteed to be English words 
in all lowercase.
*/
function translatePigLatin(str) {
  if (str.match(/^[^aeiou]*/) != "") {
	let sliced = str.match(/^[^aeiou]*/);
	sliced += "ay";
    let rest = str.slice(sliced.length - 2);
	return rest += sliced;
  } else {
    return str += "way";
  }
}

console.log(translatePigLatin("linux"));