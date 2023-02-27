'use strict';

function aclean(arr) {
  const obj = {};

  for (let i = 0; i < arr.length; i++) {
    const sorted = arr[i].toLowerCase().split("").sort().join("");
    obj[sorted] = arr[i];
  }

  return Object.values(obj);
}

const arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert( aclean(arr) );
