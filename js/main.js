console.log('connected main.js');


/* MODEL */
var currentQuestion
var climber;
var score;

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
  { correct: 1, choices: ["July 4, 1785", "July 4, 1776", "Dec. 25, 1804", "Dec. 25, 1876"] },
  { correct: 3, choices: ["Ronald Reagan", "Abraham Lincoln", "Jacob W Taylor", "John F. Kennedy"] },
  { correct: 2, choices: ["John Hancock", "Benjamin Franklin", "George Washington", "Thomas Jefferson"] },
  { correct: 2, choices: ["George Washington", "Johnny Robert", "Franklin D. Roosevelt", "James Madison"] },
  { correct: 3, choices: ["1965", "1968", "1970", "1969"] },
  { correct: 3, choices: ["Germany", "England", "Spain", "France"] },
  { correct: 2, choices: ["The Korean War", "The Vietnam War", "The Civil War", "World War II"] },
  { correct: 2, choices: ["23", "12", "27", "13"] },
  { correct: 2, choices: ["God Bless America", "America the Beautiful", "Star Spangled Banner", "99 Problems"] },
  { correct: 0, choices: ["13", "7", "17", "10"] },
  { correct: 1, choices: ["Bear", "Bald Eagle", "Lion", "Liger"] },
  { correct: 2, choices: ["Pocahontas", "Susan B Anthony", "Sacagawea", "Martha Stewart"] },
  { correct: 2, choices: ["Germany", "Iceland", "Russia", "England"] },
  { correct: 0, choices: ["1919-1933", "1923-1925", "1933-1941", "1941-1944"] },
  { correct: 0, choices: ["True", "False"]}
];

var instructions = ["Welcome to Quiz Everest!", 
                    "The goal of the game is to move your climber as high up the mountain as you can.",
                    "You can do that by answering questions correctly!",
                    "For every 3 questions that are answered correctly, your climber will move up the mountain.",
                    "If you can answer all 15 questions correctly, you will makeit to the top!",
                    "Try to get climb as high as you can!"];


/* CACHE DOM REFERENCES */

$climber = $('#climber');


/* EVENT LISTENERS */

$("#btnPlay").on("click", function(evt){
  startPlay();
});

$("#playagain").on("click", function(evt){
  startPlay();
});

$("#btnHow").on("click", function(evt){
  for(var i=0; i < instructions.length; i++) {
    var instructionLi = $("<li>" + instructions[i] + "</li>").addClass("animated bounceInLeft");
    $("#instructions-ul").append(instructionLi);
  }
  $('#btnHow').attr('disabled', true);
})

function startPlay() {
  currentQuestion = 0;
  climber = 0;
  score = 0;
  $('#endgame').hide();
  $('#mainplay').show();
  $('div.button, #instructions').hide("slow");
  render();
}

function nextQuestion() {
  currentQuestion++;
  render();
};

// $('<li>').click(function() {
//   chosen = target.text;
// })


var chosen;
var actual;

var checkAnswer = function(evt) {
  var choice = evt.target.id.slice(-1);

  if (parseInt(choice) === answers[currentQuestion].correct) {
    increaseScore();
  }
    nextQuestion();
};

var increaseScore = function() {
  score++;
  if (score % 3 === 0) {
    console.log('CLIMB!');
    climber++;
    console.log('climber', climber)
  }
}

function getMessage() {
  var msg;
  switch (score) {
    case 0:
    case 1:
    case 2:
      msg = "Wow, You must be a terrorist.";
      break;
    case 3:
    case 4:
    case 5:
      msg = "Are you serious? You're probably a Russian Spy.";
      break;
    case 6:
    case 7:
    case 8:
      msg = "Pretty Bad.. You probably donate to ISIS.";
      break;
    case 9:
    case 10:
    case 11:
      msg = "You did okay. I bet you decorate for the 4th of July.";
      break;
    case 12:
    case 13:
    case 14:
      msg = "Good Job! Wave that flag high and proud you Patriot!";
      break;
    case 15:
      msg = "Absolute Perfection! Flap those wings of freedom you glorious American Bald Eagle!";
  }
  return msg;
}

// $(".quiz-choices-ul").on("click", checkAnswer)


// $(answers[0].choices.forEach).click(function(){
//   console.log("test");
// });

/* RENDER */

var render = function() {
  renderClimber();

  if (currentQuestion > 14) {
    $('#endscore').html(score);
    $('#endgame').show();
    $('#message').html(getMessage());
    $('#mainplay').hide();
    return;
  }

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
};

function renderClimber () {
  // draw the climber
  if (climber === 0) {
    $climber.removeAttr('class');
    $climber.addClass("first");
  } else if (climber === 1) {
    $climber.removeClass("first");
    $climber.addClass("second");
  } else if (climber === 2) {
    $climber.removeClass("first");
    $climber.removeClass("second");
    $climber.addClass("third");
  } else if (climber === 3) {
    $climber.removeClass("first");
    $climber.removeClass("second");
    $climber.removeClass("third");
    $climber.addClass("fourth");
  } else if (climber === 4) {
    $climber.removeClass("first");
    $climber.removeClass("second");
    $climber.removeClass("third");
    $climber.removeClass("fourth");
    $climber.addClass("fifth");
  } else if (climber === 5) {
    $climber.removeClass("first");
    $climber.removeClass("second");
    $climber.removeClass("third");
    $climber.removeClass("fourth");
    $climber.removeClass("fifth");
    $climber.addClass("sixth");
  } 
}



