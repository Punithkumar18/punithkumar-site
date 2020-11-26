let readlineSync = require('readline-sync');
let chalk = require('chalk');
let score = 0;

let quiz = [{
  question: "When did india win their maiden worldcup in cricket ? \n a) 1983 \n b) 2004 \n c) 2007 \n d) 2011 \n",
  answer: "a"
}, {
  question: "Who was the first player in planet to score 200 runs in an ODI cricket? \n a) Virat \n b) Sachin \n c) Dhoni \n d) Saurav Ganguly \n",
  answer: "b"
}, {
  question: "Who was the first Indian Player to score 300 runs in a single innings in a Test match ? \n a) Sehwag \n b) Sachin \n c) Kapil Dev \n d) Rohit Sharma \n",
  answer: "a"
}, {
  question: "Which Captain Has won All three ICC trophies ? \n a) Dhoni \n b)Saurav Ganguly \n c) Kapil Dev \n d) Rohit sharma \n",
  answer: "a"
}, {
  question: "Who is the only batsman in the history of test Cricket to score 400 runs ? \n a)Brian Lara \n b) Dhoni \n c) Sachin \n d) Sehwag \n",
  answer: "a"
}
];

for (let i = 0; i < quiz.length; i++) {
  let currentQuestion = quiz[i];

  play(currentQuestion.question, currentQuestion.answer);

}
function play(question, answer){
        let userAnswer = readlineSync.question(chalk.greenBright(question));
        if (answer.toUpperCase() === userAnswer.toUpperCase()){
                console.log(chalk.greenBright.bold(" Right Answer congratulations !!! "));
                 score = score + 1;
         } else
         {
        
                 console.log(chalk.red("Your answer is Wrong Better Luck Next !!!"));

         }

         console.log(chalk.blueBright.italic("Your Total Score is " + score));
         console.log("----------------------------------");


 }
console.log("Your Final Total Score is " + score);

let highestScores =[{
     name:"Punith",
     score:"5"
 },
 {
     name:"Adarsh",
     score:"4"
 }]

for (let j = 0; j < highestScores.length; j++) {

  console.log("Highest Scores Are : ")
  console.log(highestScores[j].name);
  console.log(highestScores[j].score);
  console.log("----------------------------------");

}
