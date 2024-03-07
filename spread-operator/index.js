// spread operator =  ... allows an iterable such as an
//                    array or string to be expanded
//                    into separate elements
//                    (unpacks the elements)


let numbers = [1, 2, 3, 4, 5];
let maximum = Math.max(...numbers);
let minimum = Math.min(...numbers);

console.log(minimum);

let username = "Daniel Dragnescu";
let letters = [...username];

console.log(letters);

let fruits = ["apple", "orange", "banana"];
let vegetables = ["carrots", "celery", "potatoes"];

let foods = [...fruits, ...vegetables, "eggs", "milk"];
// we insert fruits and veg arrays to the foods array,
// but only the values and we get a new array with all elem.

console.log(foods);

// 2 different arrays, but with identical values


const names = ['Daniel', 'David', 'Natasa'];
const joinedNames = names.join(', '); // Joins the elements with a comma and space
console.log(joinedNames); // Output: "Daniel, David, Natasa"