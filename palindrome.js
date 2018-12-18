/*
Return true if the given string is a palindrome. Otherwise, return false.
A palindrome is a word or sentence that's spelled the same way both 
forward and backward, ignoring punctuation, case, and spacing.
*/
/*
For larger strings we should use faster version which will return false
on first iteration where left and right index don't match. Like this
we avoid operating and calling multiple functions on a whole string,
which is an expensive process.
*/
function palindrome(str) {
    let regex = /\W|_/g;
    let leftIndex = 0;
    let rightIndex = str.length - 1;
    while (leftIndex < rightIndex) {
        if (str[leftIndex].match(regex)) {
            leftIndex++;
            continue;
        }
        if (str[rightIndex].match(regex)) {
            rightIndex--;
            continue;
        }
        if (str[leftIndex].toLowerCase() !== str[rightIndex].toLowerCase()) {
            return false;
        } else {
            leftIndex++;
            rightIndex--;
        }
    }
    return true;
}
console.log(palindrome("A man, a plan, a canal. Panama"));


// Expensive version, considerable for short strings:
function palindrome2(str) {
    if (str.match(/[^\W_]/g).join("").toLowerCase() === str.match(/[^\W_]/g)
    	.reverse().join("").toLowerCase()) {
        return true;
    }
    return false;
}
// console.log(palindrome2("never odd or even"));