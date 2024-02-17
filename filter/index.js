// filter() = creates a new array by filtering out
//            elements with a callback

//%(modulus) gives you the remainder of any division
let numbers = [1, 2, 3, 4, 5, 6, 7];
let evenNums = numbers.filter(isEven);
let oddNums = numbers.filter(isOdd);

function isEven(element) {
  return element % 2 === 0;
}

console.log(evenNums);

function isOdd(element) {
  return element % 2 !== 0;
}

console.log(oddNums);

//-------------------------------------

const ages = [16, 17, 18, 18, 19, 20, 60];
const adults = ages.filter(isAdult);
const children = ages.filter(isChild);

function isAdult(element) {
  return element >= 18;
}

function isChild(element) {
  return element < 18;
}
console.log(adults);
console.log(children);

//----------------------------------------------

const words = 
["apple", "orange", "banana", "kiwi", "pomegranate", "coconut"];
const shortWords = words.filter(getShortWords);
const longWords = words.filter(getLongWords);

function getShortWords(element) {
  return element.length <= 6;
}
console.log(shortWords);

function getLongWords(element) {
  return element.length > 6;
}
console.log(longWords);