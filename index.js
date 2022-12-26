//ex08: function to check the answer

var readlineSync = require('readline-sync');

var score=0;


//Function definition
function play(question,answer)
{
var userAnswer = readlineSync.question(question);

    if (userAnswer === answer) {
      console.log("You are right! ");
      score=score+1;
    }
    else{
      console.log("You are wrong!");
      score=score-1;
    }

}

//calling the fuinctyion

play("Am I older tha 25? ","Yes");
play("Where do I live? ","Kolhapur"); 

console.log("Your score is ", score);