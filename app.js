const products = require('./data/products-API');

for (let index = 0; index < products.length; index++) {
 const product = products[index].title;
 console.log(product);
}
