'use strict';

let n = 10;

nextPrime:
for (let i = 2; i <= n; i++) {

  for (let j = 2, s = Math.sqrt(i); j <= s; j++) {
    if (i % j == 0) continue nextPrime;
  }

  alert( i );
}
