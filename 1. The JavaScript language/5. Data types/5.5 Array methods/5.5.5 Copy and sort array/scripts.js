'use strict';

const copySorted = (arr) => arr.slice().sort();

const arr = ["HTML", "JavaScript", "CSS"];

const sorted = copySorted(arr);

alert( sorted );
alert( arr );
