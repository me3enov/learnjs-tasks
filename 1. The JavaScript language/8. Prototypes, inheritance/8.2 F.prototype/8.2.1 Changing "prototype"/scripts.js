'use strict';

// 1
function Rabbit1() {}
Rabbit1.prototype = {
  eats: true
};

const rabbit1 = new Rabbit1();

Rabbit1.prototype = {};

alert( rabbit1.eats ); // => true

// 2
function Rabbit2() {}
Rabbit2.prototype = {
  eats: true
};

let rabbit2 = new Rabbit2();

Rabbit2.prototype.eats = false;

alert( rabbit2.eats ); // => false

// 3
function Rabbit3() {}
Rabbit3.prototype = {
  eats: true
};

let rabbit3 = new Rabbit3();

delete rabbit3.eats;

alert( rabbit3.eats ); // => true

// 4
function Rabbit4() {}
Rabbit4.prototype = {
  eats: true
};

let rabbit4 = new Rabbit4();

delete Rabbit4.prototype.eats;

alert( rabbit4.eats ); // => undefined
