'use strict';

function askPassword(ok, fail) {
  const password = prompt("Password?", '');
  password == "rockstar" ?  ok() : fail();
}

let user = {
  name: 'Вася',

  loginOk() {
    alert(`${this.name} logged in`);
  },

  loginFail() {
    alert(`${this.name} failed to log in`);
  },

};

askPassword(user.loginOk.bind(user), user.loginFail.bind(user));
