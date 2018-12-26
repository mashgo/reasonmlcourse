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

let cart = addItem(addItem([], {productId: "B4", title: "Web UX", unitPrice:12.00, currency: "USD", quantity: 3}), 
                    {productId: "B5", title: "Web Principles", unitPrice:18.00, currency: "USD", quantity: 8});

Js.log(getTotalPrice(cart));