'use strict';

const arr = ["a", "b"];

arr.push(function() {
  alert( this );
})

arr[2](); // function() {alert( this )}
