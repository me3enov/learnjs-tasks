'use strict';

let phrase = "Hello";

if (true) {
  let user = "John";

  function sayHi() {
    alert(`${phrase}, ${user}`);
  }
}

sayHi(); // => Uncaught ReferenceError: sayHi is not defined
