setTimeout(() => {
  console.log("Hello");
}, 3000);

//-----------------------------

const numbers = [1, 2, 3, 4, 5, 6];
const squares = numbers.map((element) => {
  return Math.pow(element, 2);
})

const cube = numbers.map((element) => {
  return Math.pow(element, 3);
})

const evenNums = numbers.filter((element) => {
  return element % 2 === 0;
})

const oddNums = numbers.filter((element) => {
  return element % 2 !== 0;
})

const total = numbers.reduce((accumulator, element) => {
  return accumulator + element;
})

console.log(total);
