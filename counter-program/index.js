const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");

let count = 0;

increaseBtn.addEventListener("click", () => {
  count++;
  countLabel.textContent = count;
});

decreaseBtn.addEventListener("click", () => {
  if(count > 0) {
    count--;
    countLabel.textContent = count;
  }
});

resetBtn.addEventListener("click", () => {
  count = 0;
  countLabel.textContent = count;
});


