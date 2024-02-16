// Method Chaining = Calling one method after another
//                   in one continuous line of code.



// NO METHOD CHAINING
// prompt creates a window where you can type something
//trim removes any spaces before and after a word/text inserted in textbox
//charAt - return a character at a specific index
//for instance, i wanna capitalize the first letter
//slice - we slice everything after the first letter
//Daniel -> aniel without the first letter

let username = window.prompt("Enter your username:");

// username = username.trim();
// let letter = username.charAt(0);
// letter = letter.toUpperCase();

// let extraChars = username.slice(1)
// extraChars = extraChars.toLowerCase();

// username = letter + extraChars;

// console.log(username);


// WITH METHOD CHAINING

username = username.trim().charAt(0).toUpperCase() 
+ username.trim().slice(1).toLowerCase();

console.log(username);