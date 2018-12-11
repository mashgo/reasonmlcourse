type item = {
    productId : string,
    title : string,
    unitPrice: float,
    currency: string,
    quantity: int
};

let addItem = (cart, item) => [item, ...cart];

let updateItem = (cart, productId, quantity) => {
    /* TODO: if(List.length(cart) == 0) cart; Howdy check this kind of conditions?  Let us come back later */    
    let item = List.find(i => i.productId == productId, cart)
    /* TODO: Throw exception if no item found with the ID, Or at least NULL check.  Let us come back later */
    /* TODO:  Why only returning item, at least the new Cart with updated item.  Let us not focus on that now. */
    let updatedItem = {...item, quantity: quantity}
    updatedItem
}

let calculateDiscount = (cart, counterDiscount) => {
    let folder = (acc, item) => acc +. (item.unitPrice *. float_of_int(item.quantity));
    
    let totalPrice = List.fold_left(folder, 0., cart);

    let discount = (List.length(cart) >=2 && totalPrice >= 100.) ? 0.1 : 1.;
    totalPrice -. (totalPrice *. (discount +. counterDiscount));
}

let cart = [{productId: "B4", title: "Web UX", unitPrice:12.00, currency: "USD", quantity: 3},
    {productId: "B5", title: "Web Principles", unitPrice:18.00, currency: "USD", quantity: 8}];

let cart2 = addItem(addItem([], {productId: "B4", title: "Web UX", unitPrice:12.00, currency: "USD", quantity: 3}), 
                    {productId: "B5", title: "Web Principles", unitPrice:18.00, currency: "USD", quantity: 8});
Js.log(calculateDiscount(cart, 0.05));
Js.log(calculateDiscount(cart2, 0.05));

let updatedItem = updateItem(cart, "B4", 6)
Js.log(updatedItem.title ++ ". Updated Quantity: " ++ string_of_int(updatedItem.quantity))