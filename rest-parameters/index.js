// rest parameters = (...rest) allow a function work with a variable
//                   number of arguments by bundling them into an array

//                   spread = expands an array into separate elements
//                   rest = bundles separate elements into an array

function openFridge(...foods) {
  console.log(...foods);
} //foods, the parameter, is the array name

function getFood(...foods) {
  return foods;
}

const food1 = "pizza";
const food2 = "hamburger";
const food3 = "hotdog";
const food4 = "pizza";
const food5 = "ramen";

// openFridge(food1, food2, food3, food4, food5);

const foods = getFood(food1, food2, food3, food4, food5);

console.log(foods);

//----------------------------------------------

function sum(...numbers) {

  let result = 0;
  for(let number of numbers) {
    result += number;
  }
  return result;
}

const total = sum(1, 3, 4);
console.log(`Your total is $${total}`);


//--------------------------------------------------


function getAverage(...numbers) {

  let result = 0;
  for(let number of numbers) {
    result += number;
  }
  return result / numbers.length;
}

const totall = getAverage(75, 100, 85, 90, 50);
console.log(`Your total is $${totall}`);

//----------------------------------------------

function combineStrings(...strings) {
  return strings.join(" ");
}

const fullName = combineStrings("Mr.", "Spongebob", "Squarepants", "III");

console.log(fullName);