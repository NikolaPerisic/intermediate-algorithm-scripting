// Check if the predicate (second argument) is truthy on all 
// elements of a collection (first argument).

function truthCheck(collection, pre) {
  return collection.every((item) => item[pre]);
}

console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, 
			{"user": "Dipsy", "sex": "male"}, 
			{"user": "Laa-Laa", "sex": "female"}, 
			{"user": "Po", "sex": "female"}],
			 "sex"));