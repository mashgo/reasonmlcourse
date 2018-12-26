class Cart {
    constructor() {
        this.cartItems = [];
        this.totalPrice = 0.0;
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

const cart = new Cart();
cart.addItem_notpure({
    "ProductId" : "Book-4",
    "Title" : "Web UX",
    "UnitPrice": 12.00,
    "Currency": "USD",
    "Quantity": 3
});
console.log(cart.totalPrice);

const cart2 = new Cart();
cart2.addItem({
    "ProductId" : "Book-4",
    "Title" : "Web UX",
    "UnitPrice": 12.00,
    "Currency": "USD",
    "Quantity": 3
});

console.log(cart2.getTotalPrice());