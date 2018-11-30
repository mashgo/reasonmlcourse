"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Cart = function () {
    function Cart() {
        _classCallCheck(this, Cart);

        this.cartItems = [];
        this.totalPrice = 0.0;
        this.netPrice = 0.0;
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

var Discount = function () {
    function Discount() {
        _classCallCheck(this, Discount);
    }

    _createClass(Discount, [{
        key: "applyDiscount",
        value: function applyDiscount(cart) {
            var totalPrice = cart.getTotalPrice();
            cart.netPrice = totalPrice;
            if (cart.cartItems.length >= 2 && totalPrice >= 100) {
                cart.netPrice = totalPrice - totalPrice * 0.1;
            }

            // get loyality discount from external API
            cart.netPrice = cart.netPrice - cart.netPrice * 0.05;
        }
    }]);

    return Discount;
}();

var cartA = new Cart();
cartA.addItem_notpure({
    "ProductId": "Book-4",
    "Title": "Web UX",
    "UnitPrice": 12.00,
    "Currency": "USD",
    "Quantity": 3
});
console.log(cartA.totalPrice);

cartA.addItem({
    "ProductId": "Book-5",
    "Title": "Web Principles",
    "UnitPrice": 18.00,
    "Currency": "USD",
    "Quantity": 8
});

console.log(cartA.getTotalPrice());

// Side effect
var discount = new Discount();
discount.applyDiscount(cartA);
console.log(cartA.netPrice);