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

function printReverseListLoop(list) {
  let resultArray = [];
  let tempList = list;

  while (tempList) {
    resultArray.push(tempList.value);
    tempList = tempList.next;
  }

  for (let i = resultArray.length - 1; i >= 0; i--) {
    alert( resultArray[i] );
  }
}

const printReverseListRecursive = (list) => list.next ? printReverseListRecursive(list.next) : alert(list.value)

printReverseListLoop(list);
printReverseListRecursive(list);
