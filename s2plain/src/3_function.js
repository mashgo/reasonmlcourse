class Cart {
    constructor() {
        this.cartItems = [];
    }

    /* Single responsibility */
    addItem(item) {
        this.cartItems.push(item);
    }

    updateItem(itemId, quantity) {
        // 1. Condition to check whether item already exists
        this.cartItems.forEach((i) => {
            if(i.ProductId == itemId) {
                // 2. Update the item with new quantity
                i.Quantity = quantity; // mutating
            }
        }); 
    }

    getTotalPrice()
    {
        var totalPrice = 0.0;
        this.cartItems.forEach((i) => totalPrice += i.Quantity * i.UnitPrice);        
        return totalPrice;
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

console.log(cart.getTotalPrice());

cart.updateItem("Book-4", 14);

console.log(cart.getTotalPrice());