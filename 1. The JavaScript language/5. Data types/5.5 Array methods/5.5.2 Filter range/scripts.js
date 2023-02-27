'use strict';

const filterRange = (arr, a, b) => arr.filter(item => (a <= item && item <= b));

const arr = [5, 3, 8, 1];

const filtered = filterRange(arr, 1, 4);

alert( filtered );

alert( arr );
