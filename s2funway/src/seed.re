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
            title : "Learning Reason ML",
            unitPrice: 20.00,
            currency: "USD",
            quantity: 5
        },
        {
            productId : "Book-2",
            title : "Learning React",
            unitPrice: 35.00,
            currency: "USD",
            quantity: 4
        },
        {
            productId : "Book-3",
            title : "React Quickly",
            unitPrice: 47.00,
            currency: "USD",
            quantity: 3
        },
    ];
};