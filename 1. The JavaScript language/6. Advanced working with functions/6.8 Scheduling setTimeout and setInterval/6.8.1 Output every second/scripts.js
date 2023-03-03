'use strict';

function printNumbersInterval(from, to) {
  let current = from;

  let timerId = setInterval(function() {
    alert(current);
    if (current == to) clearInterval(timerId);
    current++;
  }, 1000);
}

function printNumbersNested(from, to) {
  let current = from;

  function go() {
    alert(current);
    if (current == to) clearInterval(timerId);
    current++;
  }

  go();
  const timerId = setInterval(go, 1000);
}

printNumbersInterval(5, 10);
printNumbersNested(5, 10);
