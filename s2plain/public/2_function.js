"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Cart = function () {
    function Cart() {
        _classCallCheck(this, Cart);

        this.cartItems = [];
        this.totalPrice = 0.0;
    }

    /* Multiple responsibility */


    _createClass(Cart, [{
        key: "addItem_notpure",
        value: function addItem_notpure(item) {
            // function doing multiple responsibility
            // add items to the cart list
            this.cartItems.push(item);
            var itemPrice = item.Quantity * item.UnitPrice;
            // calculate the price
            this.totalPrice += itemPrice;
        }

        /* Single responsibility */

    }, {
        key: "addItem",
        value: function addItem(item) {
            this.cartItems.push(item);
        }
    }, {
        key: "getTotalPrice",
        value: function getTotalPrice() {
            var totalPrice = 0.0;
            this.cartItems.forEach(function (i) {
                return totalPrice += i.Quantity * i.UnitPrice;
            });
            return totalPrice;
        }
    }]);

    return Cart;
}();

var cart = new Cart();
cart.addItem_notpure({
    "ProductId": "Book-4",
    "Title": "The Silk Roads: A New History of the World",
    "UnitPrice": 13.59,
    "Currency": "USD",
    "Quantity": 3
});
console.log(cart.totalPrice);

var cart2 = new Cart();
cart2.addItem({
    "ProductId": "Book-4",
    "Title": "Measure What Matters",
    "UnitPrice": 14.99,
    "Currency": "USD",
    "Quantity": 3
});

console.log(cart2.getTotalPrice());