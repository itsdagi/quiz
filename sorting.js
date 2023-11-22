// const numbers = [3,8,5,62,9,7,2,1,40];
// numbers.sort((a,b)=>{
//   return a-b; // a-b lower to higher  b-a higher to lower. sort is a defind function.
  
// })
// console.log(numbers)

const movies = [
  {name:"Coffee Day", rating:9},
  {name:"The Notebook", rating:8},
  {name:"The Lion King", rating:7},
  {name:"The Matrix", rating:6},
  {name:"The Matrix Reloaded", rating:53},
  {name:"The Matrix Revolutions", rating:4}
];

movies.sort((a,b) => {
  return a.rating-b.rating;
})
console.log(movies)