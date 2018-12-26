open Seed;

type result('a) = 
    | Ok('a)
    | Error(string);

let printCart = (items : list(Seed.item)) => {
    List.iter((i : Seed.item)  => Js.log(i.productId ++ i.title ++ ". Quantity: " ++ string_of_int(i.quantity)), items);
};

let updateItem = (items, productId, quantity) => {    
    let updateItem_Internal = (items, productId, quantity) => {
        let rec update = (items) => {
            switch(items) {
            | [] => items
            | [(h : Seed.item), ...tail] when h.productId == productId => [{...h, quantity: quantity}, ...tail]
            | [h, ...tail] => update(tail)
            };
        };
        update(items);
    };
    
    switch(items) {
    | [] => Error("Empty cart")
    | _ => Ok(updateItem_Internal(items, productId, quantity));
    }
};

switch(updateItem(Seed.cartItems, "Book-1", 11)) {
| Ok(items) => printCart(items)
| Error(msg) => Js.log(msg);
};