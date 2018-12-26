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

let cart = addItem(addItem([], {productId: "B4", title: "The Silk Roads: A New History of the World", unitPrice:13.59, currency: "USD", quantity: 3}), 
                    {productId: "B5", title: "Measure What Matters", unitPrice:14.99, currency: "USD", quantity: 8});

let updatedItem = updateItem(cart, "B4", 6)

Js.log(updatedItem.title ++ ". Updated Quantity: " ++ string_of_int(updatedItem.quantity))