// eventListener = Listen for specific events to create interactive web pages
//                             events: click, mouseover, mouseout
//                            .addEventListener(event, callback);


//mouseover = when we hover on something
//mouseout = when you not hover anylonger
//target = when you click on something

const myBox = document.getElementById("myBox");


myBox.addEventListener("click", event => {
  event.target.style.backgroundColor = "tomato";
  event.target.textContent  = "OUCH 😎";
});

myBox.addEventListener("mouseover", event => {
  event.target.style.backgroundColor = "yellow";
  event.target.textContent  = "Don't do it 😎";
});

myBox.addEventListener("mouseout", event => {
  event.target.style.backgroundColor = "lightgreen";
  event.target.textContent  = "Click me😀";
});

// WITH ANONYMOUS FUNCTION

// myBox.addEventListener("click", function(event) {
//   event.target.style.backgroundColor = "tomato";
//   event.target.textContent  = "OUCH 😎";
// });



// WITH CALLBACK

// function changeColour(event) {
//   event.target.style.backgroundColor = "tomato";
//   event.target.textContent  = "OUCH 😎";
// }

// myBox.addEventListener("click", changeColour);

