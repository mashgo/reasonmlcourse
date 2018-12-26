import {CartItems} from './seed';

const productNames = CartItems.map(item => item.Title);

console.log(productNames);

for(let i = 0; i < productNames.length; i++)
{
    console.log(productNames[i]);
}