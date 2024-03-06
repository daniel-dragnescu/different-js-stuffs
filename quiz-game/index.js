console.log("Welcome to the Computer Hardware Quiz!");

let correctAnswers = 0;
const totalQuestions = 3;

const answer1 = window.prompt("What is the brain of the computer?");
const correctAnswer = "CPU";

if(answer1.toUpperCase() === correctAnswer) {
  console.log("You got it correct!");
  correctAnswers++;
} else {
  console.log("You got it wrong...");
}


const answer2 = window.prompt("What is better: a 3090ti or a 4090?");
const correctAnswer2 = "3090ti";

if(answer2.toLowerCase() === correctAnswer2) {
  console.log("You got it correct!");
  correctAnswers++;
} else {
  console.log("You got it wrong...");
}


const answer3 = window.prompt("What is the reccomended ammount of RAM in 2023?");
const correctAnswer3 = "16GB";

if(answer3.toUpperCase() === correctAnswer3) {
  console.log("You got it correct!");
  correctAnswers++;
} else {
  console.log("You got it wrong...");
}

const score =  Math.round((correctAnswers / totalQuestions) * 100);

console.log(`You got ${correctAnswers} questions correct.`)
console.log(`You score: ${score}%.`)