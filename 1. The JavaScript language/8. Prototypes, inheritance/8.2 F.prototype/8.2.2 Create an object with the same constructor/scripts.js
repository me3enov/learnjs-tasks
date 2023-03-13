'use strict';

function User(name) {
  this.name = name;
}

const user = new User('John');
const user2 = new user.constructor('Pete');

alert( user2.name ); // => Pete

function User2(name) {
  this.name = name;
}
User2.prototype = null;

let user3 = new User2('John');
let user4 = new user3.constructor('Pete');

alert( user4.name ); // => undefined
