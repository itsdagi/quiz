const numbers = [10,20,30,40,50];

const reduceNum = numbers.reduce((total, current) =>{
  total+= current;
  return total;
  
}, 0)

console.log(reduceNum);