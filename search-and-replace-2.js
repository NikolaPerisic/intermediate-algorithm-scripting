/*Perform a search and replace on the sentence using 
the arguments provided and return the new sentence.
First argument is the sentence to perform the search 
and replace on. Second argument is the word that you 
will be replacing (before). Third argument is what 
you will be replacing the second argument with (after).
Preserve the case of the first character in the original 
word when you are replacing it.
*/
function myReplace(str, before, after) {
    if (before.match(/^[A-Z]/) !== null) {
        after = after.charAt(0).toUpperCase() + after.slice(1);
        return str.replace(before, after);
    }
    return str.replace(before, after);
}
console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));