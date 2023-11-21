// const numbers = [10,20,30,40,50];

// const sum = numbers.reduce((total, current)=>{

//    total += current;
//    return total;
// }, 1) // the code will start with a total 1.

// console.log(sum)

const students = [
  { name: 'Quincy', grade: 96 },
  { name: 'Jason', grade: 84 },
  { name: 'Alexis', grade: 100 },
  { name: 'Sam', grade: 65 },
  { name: 'Ayele', grade: 97},
  { name: 'Peter', grade: 75 },
  { name: 'Gabe', grade: 90 },
  { name: 'Josh', grade: 99 },
  { name: 'Maria', grade: 70 },
  { name: 'Hannah', grade: 85 }
];

const sum = students.reduce((total, current) => {
  total += current.grade;
  return total;
}, 0)
console.log(sum)