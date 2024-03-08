const numbers = [5,20,146,40,130];

const findNums = numbers.find((num)=>{

  return num > 50;
})

console.log(findNums); // find the first element that satisfys a condition;
