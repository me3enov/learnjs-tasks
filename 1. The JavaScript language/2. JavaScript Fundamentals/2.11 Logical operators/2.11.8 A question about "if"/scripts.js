'use strict';

if (-1 || 0) alert( 'first' ); // (-1 || 0) => -1 = if (true)
if (-1 && 0) alert( 'second' ); // (-1 && 0) => 0 = if (false)
if (null || -1 && 1) alert( 'third' ); // (null || -1 && 1) => 1 = if (true)
