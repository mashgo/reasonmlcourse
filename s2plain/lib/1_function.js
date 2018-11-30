"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _seed = require("seed");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Cart = function () {
    function Cart() {
        _classCallCheck(this, Cart);

        this.CartItems = [];
        this.totalPrice = 0.0;
    }

    _createClass(Cart, [{
        key: "addItem",
        value: function addItem(item) {
            // function doing multiple responsibility
            // add items to the cart list
            this.CartItems.push(item);
            var itemPrice = item.Quantity * item.Price;
            // calculate the price
            this.totalPrice += itemPrice;
        }
    }]);

    return Cart;
}();

var carta = new Cart();
carta.addItem({
    "ProductId": "Book-4",
    "Title": "Web UX",
    "UnitPrice": 12.00,
    "Currency": "USD",
    "Quantity": 3
});
console.log(carta.totalPrice);