const ratings = [5,19,12,3,4,8,6];

const filtered = ratings.filter((rate)=>{

  let result = rate > 6;
  return result
});

console.log(filtered);
console.log(ratings)