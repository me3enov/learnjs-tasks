'use strict';

const john = { name: "John", age: 25 };
const pete = { name: "Pete", age: 30 };
const mary = { name: "Mary", age: 28 };

const users = [ john, pete, mary ];

const names = users.map(item => item.name);

alert( names ); // => John, Pete, Mary
