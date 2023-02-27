'use strict';

const checkSpam = (str) => str.toLowerCase().includes('viagra') || str.toLowerCase().includes('xxx');

alert( checkSpam('buy ViAgRA now') );
alert( checkSpam('free xxxxx') );
alert( checkSpam("innocent rabbit") );
