type item = {
    productId : string,
    title : string,
    unitPrice: float,
    currency: string,
    quantity: int
};

let addItem = (cart, item) => [item, ...cart];
let calculateDiscount = (cart) => {
    let folder = (acc, item) => acc +. (item.unitPrice *. float_of_int(item.quantity));
    let totalPrice = List.fold_left(folder, 0., cart);
    Js.log(totalPrice);
    let discount = (List.length(cart) >=2 && totalPrice >= 100.) ? 0.1 : 1.;
    let counterDiscount = 0.05;
    totalPrice -. (totalPrice *. discount *. counterDiscount);
}

let cart = [{productId: "B4", title: "Web UX", unitPrice:12.00, currency: "USD", quantity: 3},
    {productId: "B5", title: "Web Principles", unitPrice:18.00, currency: "USD", quantity: 8}];
Js.log(calculateDiscount(cart));