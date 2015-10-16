#Quiz Everest

Quiz Everest is a trivia game with an American theme! As the player answers questions correctly, their climber advances up the mountain. The goal is to have the climber as high up Mt. Everest as possible when the game concludes. Depending on how many questions the player answers correctly will determine "how American he/she is!"

#Technologies

Quiz Everest is composed up of HTML, CSS, Javascript, and jQuery. 

###HTML
My HTML simply houses multiple <div> tags. Some contain buttons, some contain titles, but most are empty, allowing me to structure the game and even help me style in JavaScript.

###CSS
I focused on staying consistent in my styling throughout the game, mainly in buttons and fonts. I was also able to create and customize the climber in the CSS, as well as determine the positions of the climber as it moves up different levels of the mountain.

###JavaScript
#####Vars/Arrays/Objects
I wrote the trivia questions in one large array and the trivia answers in separate objects inside a large array. This allowed me to be able to assign the correct answer to each question's set of answers.

#####Event Listeners
I used multiple .on('click') listeners via jQuery. One of my more powerful functions in this section and one that was used several times throughout was the function startPlay(). My increaseScore() is also very critical because it both adds a point to the players score and well as move the climber up the mountain when questions are answered correctly. The getMessage() function spits out a message at the end of the game, dependant on the players score, stating what kind of American they are.

#####Render
In this section a lot of magic happens. We obtain the current question information, clears out the question on the page when the next question appears. We also draw the climber here.


#Design
I kept the design simple but sexy. The fonts are consistent at different stages in the game. I created my buttons through a CSS button generator online which I linked to my HTML. I wanted them to pop! Also I customized the background image on Adobe photoshop. I went with a simple but modern look with an American flag waving gloriously on top.

#Next Steps
My next steps will include a multiplayer feature as well as a larger question bank. And even further down the road allow the player to select a category of quetions before he/she starts.


#MVP

###Starting the Game

-Player able to click "Play Button" in order to start the game.
-Player able to click "How To Play" button in order to learn the rules and instructions of the game.

###During the Game

-Present a question and 4 answer choice for the player to be able to read and understand clearly. 
-Allow player to click one of the four answer choices and then move on to the next question.
-Keep score in the background (until game is over).
-Allow the player to visualize the climber climbing up the mountain as they get answers correct; this will allow the player to feel more interactive with the trivia and give it more of a game feeling.

###Post Game

-Allow the player to be able to view their score at the end of the game.
-Post "how American" the player is depending on their score.
-Create a "Play Again" button that will allow the player to start over.


#IceBox 

-Multiplayer funationality

-Pick a climber.

-Allow player(s) to select a category of trivia.
