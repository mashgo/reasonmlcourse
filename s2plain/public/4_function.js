'use strict';

var _seed = require('./seed');

var productNames = _seed.CartItems.map(function (item) {
    return item.Title;
});

console.log(productNames);

for (var i = 0; i < productNames.length; i++) {
    console.log(productNames[i]);
}