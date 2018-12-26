include Seed;

/* Type inference not working as expected */
/* let productNames = List.map(i => i.title, cartItems); */

let productNames = List.map((i : Seed.item) => i.title, Seed.cartItems);

List.iter(pn => Js.log(pn), productNames);