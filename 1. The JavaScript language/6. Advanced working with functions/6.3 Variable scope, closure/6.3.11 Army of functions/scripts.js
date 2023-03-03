'use strict';

function makeArmy() {
  const shooters = [];

  for(let i = 0; i < 10; i++) {
    const shooter = () => alert(i);
    shooters.push(shooter);
  }

  return shooters;
}

let army = makeArmy();

army[0](); // => 0
army[5](); // => 5
