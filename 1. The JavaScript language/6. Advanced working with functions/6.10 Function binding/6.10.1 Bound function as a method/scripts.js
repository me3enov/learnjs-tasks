'use strict';

function f() {
  alert( this ); // => this => null
}

let user = {
  g: f.bind(null) // null
};

user.g(); // => null
