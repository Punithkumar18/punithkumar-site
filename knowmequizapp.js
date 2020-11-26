//----------------------Assignment no 1----------------------------
let readlineSync = require('readline-sync');
let score = 0;

let quiz =[

    
{
    question: "Where do I live ? ",
    answer:"Bangalore"

},
{
    question:"What is my favourite colour?",
    answer:"red"
},
{ 
    question:"What is My favourite sport ?",
    answer:"cricket"

},{
    question:"who is your favourite cricketer ?",
    answer:"RahulDravid"
}];

let userName = readlineSync.question("what is your Name ? ") ;
console.log("Welcome " +userName+ " DO You Know Punith Kumar ");
    

for(let i = 0; i < quiz.length; i++){
    let currentQuestion = quiz[i];
    play(currentQuestion.question,currentQuestion.answer);
}

function play(question, answer){
    let userAnswer = readlineSync.question(question);
    if(userAnswer.toUpperCase()===answer.toUpperCase()){
        console.log("Right Answer");
        score = score + 1;
    }
    else{
        console.log("Wrong Answer");

    }
    console.log("Your Score is  " + score);

}

console.log("Your Total score is  " +score);

let highestScores =[{
    name:"First Highest score Punith",
    score:"4"
},{
    name:"Second Highest score Adarsh",
    score:"3"
}]

for(j=0; j<highestScores.length; j++){
    let highScore = highestScores[j];
    console.log(highScore.name);
    console.log(highScore.score);
}