'use strict';

const hamster = {
  eat(food) {
    this.stomach.push(food);
  }
};

const speedy = {
  __proto__: hamster,
  stomach: []
};

const lazy = {
  __proto__: hamster,
  stomach: []
};

// Speedy one found the food
speedy.eat("apple");
alert( speedy.stomach ); // => apple

// Lazy one's stomach is empty
alert( lazy.stomach ); // => nothing
