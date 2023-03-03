'use strict';

function sumToLoop(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

const sumToRecursion = (n) => n === 1 ? n : n + sumToRecursion(--n)

const sumToFormula = (n) => n * (n + 1) / 2

alert( sumToLoop(100) );
alert( sumToRecursion(100) );
alert( sumToFormula(100) );
