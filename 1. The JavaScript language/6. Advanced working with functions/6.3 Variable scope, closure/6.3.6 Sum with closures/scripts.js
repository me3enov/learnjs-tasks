'use strict';

const sum = (a) => (b) => a + b

alert( sum(1)(2) ); // => 3
alert( sum(5)(-1) ); // => 4
