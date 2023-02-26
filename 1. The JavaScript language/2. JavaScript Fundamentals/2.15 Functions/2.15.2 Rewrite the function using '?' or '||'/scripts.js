'use strict';

const checkAge = (age) => (age > 18) ? true : confirm('Did parents allow you?');

const checkAge = (age) => (age > 18) || confirm('Did parents allow you?');
