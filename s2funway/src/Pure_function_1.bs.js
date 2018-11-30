// Generated by BUCKLESCRIPT VERSION 4.0.7, PLEASE EDIT WITH CARE
'use strict';

var List = require("bs-platform/lib/js/list.js");

function addItem(cart, item) {
  return /* :: */[
          item,
          cart
        ];
}

function calculateDiscount(cart) {
  var folder = function (acc, item) {
    return acc + item[/* unitPrice */2] * item[/* quantity */4];
  };
  var totalPrice = List.fold_left(folder, 0, cart);
  console.log(totalPrice);
  var match = List.length(cart) >= 2 && totalPrice >= 100;
  var discount = match ? 0.1 : 1;
  return totalPrice - totalPrice * discount * 0.05;
}

var cart = /* :: */[
  /* record */[
    /* productId */"B4",
    /* title */"Web UX",
    /* unitPrice */12.00,
    /* currency */"USD",
    /* quantity */3
  ],
  /* :: */[
    /* record */[
      /* productId */"B5",
      /* title */"Web Principles",
      /* unitPrice */18.00,
      /* currency */"USD",
      /* quantity */8
    ],
    /* [] */0
  ]
];

console.log(calculateDiscount(cart));

exports.addItem = addItem;
exports.calculateDiscount = calculateDiscount;
exports.cart = cart;
/*  Not a pure module */
