console.log('connected main.js');


/* MODEL */

var score = 0;

var questions = [
  "When was America founded?",
  "Who said this famous quote: 'My fellow Americans, ask not what your country can do for you, ask what you can do for your country?'",
  "Who did not sign the Declaration of Independence?",
  "Which President was the only one to serve more than two terms?",
  "In what year did America land the first man on the moon?",
  "In which country did America buy the Louisiana Purchase from?",
  "The deadliest war in American history is?",
  "How many Amendments are in the United States Constitution?",
  "What is the title of the National Anthem?",
  "How many original Colonies were there?",
  "What is the offical animal of America?",
  "Who was the woman that helped Lewis and Clark in their expedition?",
  "What country did the United States icehockey team beat in the 1980 Olympics, in what is known as the 'Miracle On Ice'?",
  "In what sad years did the U.S. Prohibition occur?",
  "BONUS: America is the greatest country in the gosh darn World!"
];

var answers = [
  { correct: 1, choices: ["July 4, 1785", "July 4, 1776", "July 4, 1804", "July 4, 1876"] },
  { correct: 3, choices: ["Ronald Reagan", "Abraham Lincoln", "Franklin D. Roosevelt", "John F. Kennedy"] },
  { correct: 2, choices: ["John Hancock", "Benjamin Franklin", "George Washington", "Thomas Jefferson"] },
  { correct: 2, choices: ["George Washington", "Woodrow Wilson", "Franklin D. Roosevelt", "James Madison"] },
  { correct: 3, choices: ["1965", "1968", "1970", "1969"] },
  { correct: 3, choices: ["Germany", "England", "Spain", "France"] },
  { correct: 2, choices: ["The Korean War", "The Vietnam War", "The Civil War", "World War II"] },
  { correct: 2, choices: ["23", "12", "27", "13"] },
  { correct: 2, choices: ["God Bless America", "America the Beautiful", "Star Spangled Banner", "99 Problems"] },
  { correct: 0, choices: ["13", "7", "17", "10"] },
  { correct: 1, choices: ["Bear", "Bald Eagle", "Lion", "Liger"] },
  { correct: 2, choices: ["Pocahontas", "Susan B Anthony", "Sacagawea", "Martha Stewert"] },
  { correct: 2, choices: ["Germany", "Iceland", "Russia", "England"] },
  { correct: 0, choices: ["1919-1933", "1923-1925", "1933-1941", "1941-1944"] },
  { correct: 0, choices: ["True", "False"]}
];

var currentQuestion = 0;

var climber = 0;


/* CACHE DOM REFERENCES */

$climber = $('#climber');


/* EVENT LISTENERS */

$("#btnPlay").on("click", function(evt){
  $('div.button').hide("slow");
  render();
});

var nextQuestion = function() {
  currentQuestion++;
  render();
};

// $('<li>').click(function() {
//   chosen = target.text;
// })

function rightAnswer() {
  //DOM manipulation with jQuery
  //score += 1
}

function wrongAnswer() {
  //DOM manipulation with jQuery
}

var chosen;
var actual;

var checkAnswer = function(evt) {
  var choice = evt.target.id.slice(-1);

  if (parseInt(choice) === answers[currentQuestion].correct) {
    // console.log('CORRECT');
    increaseScore();
  }
  nextQuestion();
};

var increaseScore = function() {
  score++;

  if (score % 3 === 0) {
    console.log('CLIMB!');
    climber++;
  }
}

// $(".quiz-choices-ul").on("click", checkAnswer)


// $(answers[0].choices.forEach).click(function(){
//   console.log("test");
// });

//////BEN'S RANDOM CODE

// var question1 = {
//   question: "When was America founded?",
//   answers: answer[0]
//   // answers: {answer1: "1785", answer2: "1776", answer3: "1804", answer4: "1876"},
// };

// var question2 = {
//   question: "Who said this famous quote: 'My fellow Americans, ask not what your country can do for you, ask what you can do for your country?'",
//   answers: answer[1]
//   correctAnswer: answer[1][3]
// }


// var question = [question1,
//                 question2,
//                 "Who did not sign the Declaration of Independence?",
//                 "Which President was the only one to serve more than two terms?",
//                 "In what year did America land the first man on the moon?",
//                 "In which country did America buy the Louisiana Purchase from?",
//                 "The deadliest war in American history is?",
//                 "How many Amendments are in the United States Constitution?",
//                 "What is the title of the National Anthem?",
//                 "How many original Colonies were there?",
//                 "What is the offical animal of America?",
//                 "Who was the woman that helped Lewis and Clark in their expedition?",
//                 "What country did the United States icehockey team beat in the 1980 Olympics, in what is known as the 'Miracle On Ice'?",
//                 "In what sad years did the U.S. Prohibition occur?",
//                 "BONUS: America is the greatest country in the gosh darn World!"]




// $("#btnPlay").on("click", function(evt){
//   $('div.button').hide("slow");
//   $("#quiz-question").append(question[1].question);
//     for(var i=0; i < answer[1].length; i++) {
//       $("#quiz-choices-ul").append("<li>" + question[1].answers + "</li>");
//     }
// });

/* RENDER */

var render = function() {
  // get the current question info
  var question = questions[currentQuestion];
  var answer   = answers[currentQuestion];

  // clear out the question on the page
  $("#quiz-question").html("");
  $("#quiz-choices-ul").html("");

  // add the new question
  $("#quiz-question").append(question);

  for(var i=0; i < answer.choices.length; i++) {
    var $li  = $("<li>");

    // build all of the answer buttons with click listeners
    var $btn = $("<button>", {text: answer.choices[i], id: 'a' + i});
    $btn.on("click", checkAnswer);

    $li.append($btn)
    $li.appendTo($("#quiz-choices-ul"));
  }

  console.log("DRAW")
  // draw the climber
  if (climber === 0) {

    $climber.addClass("first");
  } else if (climber === 1) {
    $climber.removeClass("first");
    $climber.addClass("second");
  }
};




