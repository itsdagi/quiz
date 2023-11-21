// const numbers = [10,20,30,40,50];

// const mapNumbers = numbers.map((number) => {
//   if (number > 30){
//     return number + 5;
//   }
//   else{return number;}
// });

// console.log(mapNumbers)
// console.log(numbers)

// // // // // // // // // // // // //

const products = [
  {
    name: 'iPhone',
    price: 799.99,
    tax: 0.04
  },
  {
    name: 'Samsung Galaxy',
    price: 900.00,
    tax:0.09
  },
  {
    name: 'Sony Xperia',
    price: 799.99,
    tax: 0.05
  }
];

const newPriceTag = products.map((product) =>{
  const newPrice = product.price + (product.price * product.tax);
  return {
    name: product.name,
    price: newPrice,
    tax: product.tax
  };
});

console.log(newPriceTag)
console.log(products)