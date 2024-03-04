// classList = Element property in JavaScript used to interact
//             with an element's list of classes (CSS classes)
//             Allows you to make reusable classes for many elements
//             across your webpage.

// add()
// remove()
// toggle(Remove if present, Add if not)
// replace(oldClass, newClass)
// contains()

//target = the button

// ---------- button ----------

const myButton = document.getElementById("myButton");
//ADD AND REMOVE --------------------

// myButton.classList.add("enabled");
// myButton.classList.remove("enabled");

// myButton.addEventListener('mouseover', event => {
//   event.target.classList.add('hover');
// });

// myButton.addEventListener('mouseout', event => {
//   event.target.classList.remove('hover');
// });

// with TOGGLE is the same thing as above -----------------
// myButton.addEventListener('mouseover', event => {
//   event.target.classList.toggle('hover');
// });

// myButton.addEventListener('mouseout', event => {
//   event.target.classList.toggle('hover');
// });

//REPLACE --------------------------------------------
myButton.classList.add("enabled");

myButton.addEventListener("click", event => {

  if(event.target.classList.contains("disabled")) {
    event.target.textContent += "😎";
  } else {
    event.target.classList.replace("enabled", "disabled");
  }
});


// ----------- SECOND EXAMPLE --------------------------
const myH1 = document.getElementById("myH1");

myH1.classList.add("enabled");

myH1.addEventListener("mouseover", event => {
    event.target.classList.toggle('hover');
});

myH1.addEventListener('mouseout', event => {
    event.target.classList.toggle('hover');
});

myH1.addEventListener('click', event => {

    if(event.target.classList.contains("disabled")){
        event.target.textContent += "🤬";
    }
    else{
        event.target.classList.replace("enabled", "disabled");
    }
});