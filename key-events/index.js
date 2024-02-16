// eventListener = Listen for specific events to create interactive web pages
//                            events: keydown, keyup
//                            document.addEventListener(event, callback);



const myBox =  document.getElementById("myBox");

const moveAmount = 100;
let x = 0; // horizontal movement
let y = 0; // vertical movement

document.addEventListener("keydown", event => {
  myBox.textContent = "🤣";
  myBox.style.backgroundColor = "tomato";
});

document.addEventListener("keyup", event => {
  myBox.textContent = "😀";
  myBox.style.backgroundColor = "lightblue";
});

document.addEventListener("keydown", event => {

  event.preventDefault(); //the element will disapear, will
                          //not scroll with it

  if(event.key.startsWith("Arrow")) {

    switch(event.key) {
      case "ArrowUp":
        y -= moveAmount;
        break;

      case "ArrowDown":
        y += moveAmount;
        break;    
        
      case "ArrowLeft":
        x -= moveAmount;
        break;

      case "ArrowRight":
        x += moveAmount;
        break;
    }

    myBox.style.top = `${y}px`;
    myBox.style.left = `${x}px`;

  }
});




// document.addEventListener("keydown", event => {
//   myBox.textContent = "🤣";
//   myBox.style.backgroundColor = "tomato";
// });

// document.addEventListener("keyup", event => {
//   myBox.textContent = "😀";
//   myBox.style.backgroundColor = "lightblue";
// });




// document.addEventListener("keydown", event => {
//   console.log(`Key down: ${event.key}`);
// });

// document.addEventListener("keyup", event => {
//   console.log(`Key up: ${event.key}`);
// });