'use strict';

const user = {
  name: "John Smith",
  age: 35
};

const user2 = JSON.parse(JSON.stringify(user));
