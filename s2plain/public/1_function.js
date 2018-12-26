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

    _createClass(Cart, [{
        key: "addItem",
        value: function addItem(item) {
            this.cartItems.push(item);
            var itemPrice = item.Quantity * item.UnitPrice;
            this.totalPrice += itemPrice;
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
            var totalPrice = cart.totalPrice;
            cart.netPrice = totalPrice;
            var discount = 1.;
            if (cart.cartItems.length >= 2 && totalPrice >= 100) {
                discount = 0.1;
            }

            // assume that PoS person can give additional 5% based on customer loyality
            // this is accessed directly from form input field
            var counterDiscount = 0.05; // 5%
            cart.netPrice = totalPrice - totalPrice * (discount + counterDiscount);
        }
    }, {
        key: "applyDiscount_outputSideEffect",
        value: function applyDiscount_outputSideEffect(cart) {
            var totalPrice = cart.totalPrice;
            var netPrice = totalPrice;
            var discount = 1.;
            if (cart.cartItems.length >= 2 && totalPrice >= 100) {
                discount = 0.1;
            }

            var counterDiscount = 0.05; // 5%
            netPrice = totalPrice - totalPrice * (discount + counterDiscount);

            console.log(netPrice); // assume that this is directly writing to display field.
        }
    }]);

    return Discount;
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

console.log(cart.totalPrice);

// Side effect
var discount = new Discount();
discount.applyDiscount(cart);
console.log(cart.netPrice);

// write Side effect
discount.applyDiscount_outputSideEffect(cart);