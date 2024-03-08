/**  const ratings = [5,19,12,3,4,8,6];

const filtered = ratings.filter((rate)=>{

  let result = rate > 6;
  return result
});

console.log(filtered);
console.log(ratings)


const numbers = [1,2,3,4,5,6,7,8,9,10];

const even = numbers.filter((num)=>{

  let result = num % 2 === 0;
  return result;
})

console.log(even);

const odd = numbers.filter((num)=>{

  let result = num % 2 == 0;
  return !result;
  
})

console.log(odd);
*/

const movies = [
  {name:"Coffee Day", rating:9},
  {name:"The Notebook", rating:8},
  {name:"The Lion King", rating:7},
  {name:"The Matrix", rating:6},
  {name:"The Matrix Reloaded", rating:53},
  {name:"The Matrix Revolutions", rating:4}
];

const filteredMovies = movies.filter((movie) =>{
  result = movie.rating > 6;  
  return result;
})
console.log(filteredMovies);
