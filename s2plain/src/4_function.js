import {CartItems} from './seed';

const getItemById = (itemId) => {
    let item = CartItems.filter(i => i.ProductId == itemId);
    return item[0];
}

const handleItem = (item) => {
    if(item != null) {
        console.log(item.Title + ' is in the cart');
    }else {
        console.log('Item not found');
    }
}

handleItem(getItemById('Book-1'));
handleItem(getItemById('Book-19'));
