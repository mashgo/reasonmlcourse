type item = {
    productId : string,
    title : string,
    unitPrice: float,
    currency: string,
    quantity: int
};

let addItem = (cart, item) => [item, ...cart];

let calculateDiscount = (cart, counterDiscount) => {
    let folder = (acc, item) => acc +. (item.unitPrice *. float_of_int(item.quantity));
    
    let totalPrice = List.fold_left(folder, 0., cart);

    let discount = (List.length(cart) >=2 && totalPrice >= 100.) ? 0.1 : 1.;
    totalPrice -. (totalPrice *. (discount +. counterDiscount));
}

let cart = [{productId: "B4", title: "The Silk Roads: A New History of the World", unitPrice:13.59, currency: "USD", quantity: 3},
    {productId: "B5", title: "Measure What Matters", unitPrice:14.99, currency: "USD", quantity: 8}];

let cart2 = addItem(addItem([], {productId: "B4", title: "The Silk Roads: A New History of the World", unitPrice:13.59, currency: "USD", quantity: 3}), 
                    {productId: "B5", title: "Measure What Matters", unitPrice:14.99, currency: "USD", quantity: 8});
                    
Js.log(calculateDiscount(cart, 0.05));
Js.log(calculateDiscount(cart2, 0.05));