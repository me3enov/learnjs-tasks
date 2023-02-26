'use strict';

const groupById = (array) => array.reduce((obj, value) => {
  obj[value.id] = value;
  return obj;
}, {})
