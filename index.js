
var readlineSync = require('readline-sync')
const Database = require("@replit/database")
const db = new Database();
var highScore
var name = readlineSync.question("Enter Your name: ");
console.log("Welcome" + name + " to The Harry Potter quiz!")

async function getValue() {
  let response = await db.get("highScore")
  return response;
}

async function play(q, a) {
  var useranswer = readlineSync.question(q);
  if (useranswer == a) {
    console.log("You are right! :)")
    score++;
  }
  else {
    console.log("You are wrong! :(")
  }
  console.log("Score is:" + score);
  console.log("............")
}


var question = [
  {
    q: `
	Which school did Harry go to?
	a: Andrews
	b: Howard
	c: None\n`,
    a: "b"
  },
  {
    q: `
	What is the name of Harry's owl?
	a: Harriot
	b: Jack
	c: Hedwig\n`,
    a: "c"
  },
  {
    q: `
	Who is Draco Malcof's dad?
	a: Lucius
	b: Ron
	c: Voldermort\n`,
    a: "a"
  },
  {
    q: `
	Who is the headmaster of Hogwarts?
	a: Lucius
	b: Albus Dumbledore
	c: Voldermort\n`,
    a: "b"
  },
  {
    q: `
	Which Hogwarts house did Harry potter belong to?
	a: Ravenlaw
	b: Hufflepuff
	c: Gryffindor\n`,
    a: "c"
  }
]


var score = 0;
for (var i = 0; i < question.length; i++) {
  play(question[i].q, question[i].a)
}

validateAndStoreHighScore(score);

async function validateAndStoreHighScore(userscore) {
  try {
    await getValue().then((value) => { highScore = value; })
    if (!highScore) {
      highScore = userscore;
      await db.set("highScore", userscore)
    }
    if (userscore < highScore) {
      console.log("Yay! You have completed the quiz.Thank you");
      console.log("Your total score is:" + userscore);
      console.log("HighScore is :", highScore);
      console.log("Try beating the highscore next time")
    }
    else if (userscore == highScore) {
      console.log("Yay! You have completed the quiz. Thank you");
      console.log("Your total score is:" + userscore);
      console.log("HighScore is :", highScore);
      console.log("You mached the high score")
    } else if (userscore > highScore) {
      console.log("Yay! You have completed the quiz. Thank you");
      console.log("You are a true potter head. You have set a new high score :", userscore)
      db.set("highScore", userscore)
    }
  } catch (err) {
    console.log(err)
  }
}
