
var readlineSync=require('readline-sync')
var name=readlineSync.question("Enter Your name: ");
console.log("Welcome "+name+" to The Harry Potter quiz!")

function play(q,a){
  var useranswer=readlineSync.question(q);
  if(useranswer==a){
    console.log("You are right! :)") 
    score++;
  }
  else{
    console.log("You are wrong! :(")
  }
  console.log("Score is:"+score);
  console.log("............")
}

var question=[
  {
  q:`
	Which school did Harry go to?
	a: Andrews
	b: Howard
	c: None\n`,
  a:"b"
  },
  {
  q:`
	What is the name of Harry's owl?
	a: Harriot
	b: Jack
	c: Hedwig\n`,
  a:"c"
  },
  {
  q:`
	Who id Draco Malcof's dad?
	a: Lucius
	b: Ron
	c: Voldermort\n`,
  a:"a"
  }
]

var score=0;
for(var i=0;i<question.length;i++){
  play(question[i].q,question[i].a)
}
console.log("Total score is:"+score);
console.log("Yay! You have completed the quiz.Thank you");