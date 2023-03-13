'use strict';

function Rabbit(name) {
  this.name = name;
}
Rabbit.prototype.sayHi = function() {
  alert( this.name );
}

const rabbit = new Rabbit('Rabbit');

rabbit.sayHi();                        // => Rabbit
Rabbit.prototype.sayHi();              // => undefined
Object.getPrototypeOf(rabbit).sayHi(); // => undefined
rabbit.__proto__.sayHi();              // => undefined
