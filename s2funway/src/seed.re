module Seed = 
{
    type item = {
        productId : string,
        title : string,
        unitPrice: float,
        currency: string,
        quantity: int
    };
    let cartItems = 
    [
        {
            productId : "Book-1",
            title : "The Silk Roads: A New History of the World",
            unitPrice: 13.59,
            currency: "USD",
            quantity: 5
        },
        {
            productId : "Book-2",
            title : "Measure What Matters",
            unitPrice: 14.99,
            currency: "USD",
            quantity: 4
        },
        {
            productId : "Book-3",
            title : "The Book of Why: The New Science of Cause and Effect",
            unitPrice: 21.75,
            currency: "USD",
            quantity: 3
        },
        {
            productId : "Book-4",
            title : "My Name Is Red",
            unitPrice: 24.74,
            currency: "USD",
            quantity: 3
        },
    ];
};