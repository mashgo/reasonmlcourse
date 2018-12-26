class Cart {
    constructor() {
        this.cartItems = [];
        this.totalPrice = 0.0;
        this.netPrice = 0.0;
    }

    addItem(item) {
        this.cartItems.push(item);
        let itemPrice = item.Quantity * item.UnitPrice;
        this.totalPrice += itemPrice;
    }
}

class Discount {

    applyDiscount(cart) {
        let totalPrice = cart.totalPrice;
        cart.netPrice = totalPrice;
        let discount = 1.;
        if(cart.cartItems.length >= 2&&  totalPrice >= 100) {
            discount = 0.1;
        }

        // assume that PoS person can give additional 5% based on customer loyality
        // this is accessed directly from form input field
        const counterDiscount = 0.05; // 5%
        cart.netPrice = totalPrice - totalPrice * (discount + counterDiscount);
    }

    applyDiscount_outputSideEffect(cart) {
        let totalPrice = cart.totalPrice;
        let netPrice = totalPrice;
        let discount = 1.;
        if(cart.cartItems.length >= 2&&  totalPrice >= 100) {
            discount = 0.1;
        }
        
        const counterDiscount = 0.05; // 5%
        netPrice = totalPrice - totalPrice * (discount + counterDiscount);

        console.log(netPrice); // assume that this is directly writing to display field.
    }
}

const cart = new Cart();
cart.addItem({
    "ProductId" : "Book-4",
    "Title" : "Web UX",
    "UnitPrice": 12.00,
    "Currency": "USD",
    "Quantity": 3
});

cart.addItem({
    "ProductId" : "Book-5",
    "Title" : "Web Principles",
    "UnitPrice": 18.00,
    "Currency": "USD",
    "Quantity": 8
});

console.log(cart.totalPrice);

// Side effect
const discount = new Discount();
discount.applyDiscount(cart);
console.log(cart.netPrice);

// write Side effect
discount.applyDiscount_outputSideEffect(cart);