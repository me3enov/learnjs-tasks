'use strict';

const pow = (x, n) => {
  let result = x;

  for (let i = 1; i < n; i++) {
    result *= x;
  }

  return result;
}

const x = prompt("x?", '');
const n = prompt("n?", '');

n < 1 || typeof n !== 'number' ?
  alert(`Power ${n} is not supported, use a positive integer`)
  : alert( pow(x, n) );
