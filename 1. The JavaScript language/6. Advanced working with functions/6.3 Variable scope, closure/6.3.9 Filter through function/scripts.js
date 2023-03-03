'use strict';

const arr = [1, 2, 3, 4, 5, 6, 7];

const inBetween = (a, b) => (x) => (x >= a) && (x <= b);

const inArray = (arr) => (x) => arr.includes(x);

alert( arr.filter(inArray([1, 2, 10])) ); // 1,2
alert( arr.filter(inBetween(3, 6)) ); // 3,4,5,6
