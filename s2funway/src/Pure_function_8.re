open Seed;

type result('a) = 
    | Ok('a)
    | Error(string);

let printCart = (items : list(Seed.item)) => {
    List.iter((i : Seed.item)  => Js.log(i.productId ++ " " ++ i.title ++ ". Quantity: " ++ string_of_int(i.quantity)), items);
};

let updateItem = (items, productId, quantity) => { 
    let update = (item : Seed.item) => {
        switch(item) {
        | item when item.productId == productId => {...item, quantity: quantity}
        | _ => item
        };
    };
    switch(List.map(i => update(i), items)){
    | [] => Error("Empty cart")
    | mitems => Ok(mitems);
    }
};

switch(updateItem(Seed.cartItems, "Book-1", 11)) {
| Ok(items) => printCart(items)
| Error(msg) => Js.log(msg);
};

Js.log("*********************");

switch(updateItem([], "Book-1", 11)) {
| Ok(items) => printCart(items)
| Error(msg) => Js.log(msg);
};