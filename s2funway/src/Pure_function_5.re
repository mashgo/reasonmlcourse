open Seed;

let getItemById = (itemId) => {
    switch(List.find((i : Seed.item) => i.productId == itemId, Seed.cartItems)) {
    | item => Some(item)
    | exception Not_found => None
    };
};

let handleItem = (item) => {
    switch item {
    | Some(v: Seed.item) => Js.log(v.title ++ " found in the cart")
    | None => Js.log("Item not found")
    };
};

"Book-1" |> getItemById |> handleItem;
"Book-21" |> getItemById |> handleItem;