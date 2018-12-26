open Seed;

type result('a) = 
    | Ok('a)
    | Error(string);

let rec printCart = (items : list(Seed.item)) => {
    switch(items) {
    | [] => Js.log("...")
    | [h, ...t] => {
        Js.log(h.productId ++ h.title ++ ". Quantity: " ++ string_of_int(h.quantity));
        printCart(t);
    }
    }
};

let updateItem = (items, productId, quantity) => {    
    let updateItem_Internal = (items, productId, quantity) => {
        let rec update = (items) => {
            switch(items) {
            | [] => items
            | [h, ...tail] => {
                switch(h : Seed.item) {
                | h when h.productId == productId => [{...h, quantity: quantity}, ...tail]
                | _ => update(tail)
                };
            };           
            }
        }
        update(items);
    };
    
    switch(items) {
    | [] => Error("Empty cart")
    | _ => Ok(updateItem_Internal(items, productId, quantity));
    }
};

switch(updateItem(Seed.cartItems, "Book-1", 6)) {
| Ok(items) => printCart(items)
| Error(msg) => Js.log(msg);
};