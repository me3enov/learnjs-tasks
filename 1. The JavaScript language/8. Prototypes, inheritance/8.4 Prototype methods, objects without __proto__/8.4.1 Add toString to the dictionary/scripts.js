'use strict';

const dictionary = Object.create(null, {
  toString: {
    value() {
      return Object.keys(this).join();
    }
  }
});

dictionary.apple = "Apple";
dictionary.__proto__ = "test";

for(let key in dictionary) {
  alert(key); // => 'apple', '__proto__'
}

alert(dictionary); // => 'apple,__proto__'
