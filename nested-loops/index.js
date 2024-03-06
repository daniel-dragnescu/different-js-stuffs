// for(let i = 1; i <= 3; i++) {
//   for(let j = 1; j <= 3; j++) {
//     console.log(j);
//   }
// }

let rows = window.prompt("Enter nr of rows");
let columns = window.prompt("Enter nr of columns");

for(let i = 1; i <= rows; i++) {
  for(let j = 1; j <= columns; j++) {
    document.getElementById("myRectangle")
    .innerHTML += j;
  }
  document.getElementById("myRectangle")
    .innerHTML += "<br>";
}