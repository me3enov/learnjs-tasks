'use strict';

function getWeekDay(date) {
  const days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];

  return days[date.getDay()];
}

let date = new Date(2014, 0, 3); // => 3 Jan 2014
alert( getWeekDay(date) ); // => FR
