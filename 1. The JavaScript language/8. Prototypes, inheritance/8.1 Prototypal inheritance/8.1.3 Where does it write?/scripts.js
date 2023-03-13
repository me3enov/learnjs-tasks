'use strict';

const animal = {
  eat() {
    this.full = true;
  }
};

const rabbit = {
  __proto__: animal
};

rabbit.eat(); // rabbit.full = true;
