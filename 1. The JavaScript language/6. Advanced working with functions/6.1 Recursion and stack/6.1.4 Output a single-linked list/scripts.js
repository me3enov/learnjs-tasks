'use strict';

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

function printListLoop(list) {
  let tempList

  while(tempList) {
    alert(tempList.value);
    tempList = tempList.next;
  }
}

function printListRecursive(list) {
  alert(list.value);
  if (list.next) printListRecursive(list.next);
}

printListLoop(list);
printListRecursive(list);
