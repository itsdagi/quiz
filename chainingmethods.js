const numbers =[1,5,6,4,3,2,7,9,8]

const filternum = numbers.reverse().filter(num => num >7).map(num => num +5)

console.log(filternum)