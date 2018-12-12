/*
Fill in the object constructor with the following methods below:
getFirstName() getLastName() getFullName() setFirstName(first) 
setLastName(last) setFullName(firstAndLast)
*/
let Person = function(firstAndLast) {
  let firstName = firstAndLast.split(" ")[0];
  let lastName = firstAndLast.split(" ")[1];

  this.getFullName = function() {
    return firstName + " " + lastName;
  };
  this.getLastName = function() {
    return lastName;
  };
  this.getFirstName = function() {
    return firstName;
  };
  this.setFirstName = function(first) {
    firstName = first;
  };
  this.setLastName = function(last) {
    lastName = last;
  };
  this.setFullName = function(firstAndLast) {
    firstName = firstAndLast.split(" ")[0];
    lastName = firstAndLast.split(" ")[1];
  }
};

let bob = new Person('Bob Ross');
console.log(bob.getFullName());