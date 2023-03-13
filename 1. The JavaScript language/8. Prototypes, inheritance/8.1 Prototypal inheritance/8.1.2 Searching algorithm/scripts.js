'use strict';

const head = {
  glasses: 1
};

const table = {
  pen: 3,
  __proto__: head
};

const bed = {
  sheet: 1,
  pillow: 2,
  __proto__: table
};

const pockets = {
  money: 2000,
  __proto__: bed
};

// 2. pockets.glasses no difference head.glasses
