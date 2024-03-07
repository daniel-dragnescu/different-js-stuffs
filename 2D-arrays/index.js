// 2D  array = an array of arrays
// 2D array = multi-dimensional array that stores a matrix
//  of data in rows and columns.
//   Useful for games, spreadsheets, or representing images 


let fruits = ["apples", "oranges", "bananas"];
let vegetables = ["carrots", "onions", "potatoes"];
let meats = ["eggs", "chicken", "fish"];

let groceryList = [fruits, vegetables, meats];

// for(let list of groceryList) {
//   console.log(list);
// }
groceryList[0][0] = "mangoes";
// first index is the row and the second, the column


for(let list of groceryList) {
  for(let food of list) {
    console.log(food);
  }
}

//--------------------------------------------------------
const matrix = [[1, 2, 3], 
                [4, 5, 6], 
                [7, 8, 9]];

//matrix[0][0] = 'X';
//matrix[0][1] = 'O';
//matrix[0][2] = 'X';

//matrix[1][0] = 'O';
//matrix[1][1] = 'X';
//matrix[1][2] = 'O';

//matrix[2][0] = 'X';
//matrix[2][1] = 'O';
//matrix[2][2] = 'X';

for(let row of matrix){
    const rowString = row.join(' ');
    console.log(rowString);
}

