const prompt = require('prompt-sync')()

console.log("Welcome to the Geography Quiz..!");

let correctAnswers = 0;
const totalQuestions = 3;

const answer1 = prompt('What is the largest continent? ');
const correctAnswer1 = 'asia';

if(answer1.toLowerCase() === correctAnswer1) { //question 1
    console.log('Correct..!');
    correctAnswers += 1;
} else {
    console.log('Incorrect..!')
}

const answer2 = prompt('What is the capital of Australia? ');
const correctAnswer2 = 'canberra';

if(answer2.toLowerCase() === correctAnswer2) { //question 2
    console.log('Correct..!');
    correctAnswers += 1;
} else {
    console.log('Incorrect..!')
}

const answer3 = prompt('Which country has the lowest gravity? ');
const correctAnswer3 = 'sri lanka';

if(answer3.toLowerCase() === correctAnswer3) { //question 3
    console.log('Correct..!');
    correctAnswers += 1;
} else {
    console.log('Incorrect..!')
}

const percent = Math.round((correctAnswers / totalQuestions) * 100);
console.log('You got', correctAnswers, 'questions correct..!');
console.log('You scored', percent.toString() + '%');