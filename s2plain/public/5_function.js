'use strict';

var _seed = require('./seed');

var getItemById = function getItemById(itemId) {
    var item = _seed.CartItems.filter(function (i) {
        return i.ProductId == itemId;
    });
    return item[0];
};

var handleItem = function handleItem(item) {
    if (item != null) {
        console.log(item.Title + ' is in the cart');
    } else {
        console.log('Item not found');
    }
};

handleItem(getItemById('Book-1'));
handleItem(getItemById('Book-19'));