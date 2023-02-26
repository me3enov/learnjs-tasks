'use strict';

function sumInput() {
  let numbers = [];

  while (true) {
    let number = prompt("You number", 0);
    if (number === "" || number === null || !isFinite(number)) break;

    numbers.push(+number);
  }

  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum;
}

alert( sumInput() );
