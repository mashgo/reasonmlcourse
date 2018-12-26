"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Cart = function () {
    function Cart() {
        _classCallCheck(this, Cart);

        this.cartItems = [];
    }

    /* Single responsibility */


    _createClass(Cart, [{
        key: "addItem",
        value: function addItem(item) {
            this.cartItems.push(item);
        }
    }, {
        key: "updateItem",
        value: function updateItem(itemId, quantity) {
            // 1. Condition to check whether item already exists
            this.cartItems.forEach(function (i) {
                if (i.ProductId == itemId) {
                    // 2. Update the item with new quantity
                    i.Quantity = quantity; // mutating
                }
            });
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
cart.addItem({
    "ProductId": "Book-4",
    "Title": "The Silk Roads: A New History of the World",
    "UnitPrice": 13.59,
    "Currency": "USD",
    "Quantity": 3
});

cart.addItem({
    "ProductId": "Book-5",
    "Title": "Measure What Matters",
    "UnitPrice": 14.99,
    "Currency": "USD",
    "Quantity": 8
});

console.log(cart.getTotalPrice());

cart.updateItem("Book-4", 14);

console.log(cart.getTotalPrice());