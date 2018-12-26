type item = {
    productId : string,
    title : string,
    unitPrice: float,
    currency: string,
    quantity: int
};

let addItem = (cart, item) => [item, ...cart];
let getTotalPrice = (cart) => {
    let folder = (acc, item) => acc +. (item.unitPrice *. float_of_int(item.quantity));    
    List.fold_left(folder, 0., cart);
}

let cart = addItem(addItem([], {productId: "B4", title: "The Silk Roads: A New History of the World", unitPrice:13.59, currency: "USD", quantity: 3}), 
                    {productId: "B5", title: "Measure What Matters", unitPrice:14.99, currency: "USD", quantity: 8});

Js.log(getTotalPrice(cart));