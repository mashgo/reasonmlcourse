class Cart {
    constructor() {
        this.cartItems = [];
        this.totalPrice = 0.0;
        this.netPrice = 0.0;
    }


    /* Multiple responsibility */
    addItem_notpure(item) {
        // function doing multiple responsibility
        // add items to the cart list
        this.cartItems.push(item);
        let itemPrice = item.Quantity * item.UnitPrice;
        // calculate the price
        this.totalPrice += itemPrice;
    }

    /* Single responsibility */
    addItem(item) {
        this.cartItems.push(item);
    }

    getTotalPrice()
    {
        var totalPrice = 0.0;
        this.cartItems.forEach((i) => totalPrice += i.Quantity * i.UnitPrice);        
        return totalPrice;
    }
}

class Discount {
    constructor() {

    }

    applyDiscount(cart) {
        let totalPrice = cart.getTotalPrice();
        cart.netPrice = totalPrice;
        if(cart.cartItems.length >= 2&&  totalPrice >= 100) {
            cart.netPrice = totalPrice - totalPrice * 0.1;
        }

        // get loyality discount from external API
        cart.netPrice = cart.netPrice - cart.netPrice * 0.05;
    }
}

const cartA = new Cart();
cartA.addItem_notpure({
    "ProductId" : "Book-4",
    "Title" : "Web UX",
    "UnitPrice": 12.00,
    "Currency": "USD",
    "Quantity": 3
});
console.log(cartA.totalPrice);

cartA.addItem({
    "ProductId" : "Book-5",
    "Title" : "Web Principles",
    "UnitPrice": 18.00,
    "Currency": "USD",
    "Quantity": 8
});

console.log(cartA.getTotalPrice());

// Side effect
const discount = new Discount();
discount.applyDiscount(cartA);
console.log(cartA.netPrice);