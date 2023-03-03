'use strict';

const factorial = (n) => (n != 1) ? n * factorial(n - 1) : 1;

alert( factorial(5) ); // 120
