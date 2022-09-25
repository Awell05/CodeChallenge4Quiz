var startQuizButton = document.querySelector("#startButton");
var startElement = document.getElementById("starter")
var quizElement = document.getElementById("quiz-holder")
var question2Element = document.getElementById("quiz2-holder")
var buttons = document.getElementsByClassName("ans1")
var timerPTag = document.querySelector("#timer");
var timerToCompleteQuiz = 90;
var currentQuestionIndex = 0


var questionsArray = [
    {
        question: "Commonly used data types DO NOT include:",
        answers: ["strings","booleans", "alerts", "numbers"],
        correct: "alerts",
    },
    {
        question: "String Values must be enclosed within ____ when being assigned to variables.",
        answers: ["commas", "curly brackets", "quotes", "parentheses"],
        correct: "quotes",
    },
    {   
        question:"Arrays in Javascript can be used to store _____.",
        answers: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        correct: "other arrays",
    },
    {
        question:"A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: ["Javascript", "terminal/bash", "for loops", "console.log"],
        correct: "console.log",
    },
    {
        question:"Jquery is considered a:",
        answers:["web-api", "function", "stylesheet", "element"],
        correct: "web-api",
    }
]

console.log(startQuizButton);
console.log(timerPTag);
console.log(timerToCompleteQuiz);
console.log(questionsArray);


// Function to start timer when "start quiz" button is selected
// need to add when incorrect answer is selected, 10-15 seconds are deducted from current time
 startQuizButton.addEventListener('click', function countdown() {
    console.log('timer should begin');  
    var timerfunction = setInterval(function(){
        timerToCompleteQuiz--;
        timerPTag.textContent = " Timer " + timerToCompleteQuiz;
        if (timerToCompleteQuiz === 0) {
            clearInterval(timerfunction);
            endQuiz()
        }
    }, 1000);
    startQuiz()
});

function startQuiz(){
    console.log("the quiz has started")
    startElement.style.display = "none"
    quizElement.classList.remove("hidden")
    displayQuestion()
}
function displayQuestion(){
    console.log("displayQuestionfunction")
    var questionElement = document.getElementById("question-holder")
    var answersElement = document.getElementById("answer-holder")
    questionElement.innerHTML= ""
    answersElement.innerHTML = ""
    questionElement.innerHTML = questionsArray[currentQuestionIndex].question;
    for(let i=0; i< questionsArray[currentQuestionIndex].answers.length;i++ ){
        console.log("in the loop")
        var button = document.createElement("button")
        button.innerHTML = questionsArray[currentQuestionIndex].answers[i]
        answersElement.appendChild(button)
        button.addEventListener("click", checkIfCorrect)
    }
}

function checkIfCorrect(event){
    event.preventDefault()
    console.log("triggered")
    console.log(event.target.innerHTML)
    if(event.target.innerText != questionsArray[currentQuestionIndex].correct){
        console.log("YOU GOT THE BUTTONS TO WORK")
        incorrectAnswerText = document.createElement("p")
        quizElement.appendChild(incorrectAnswerText)
        incorrectAnswerText.innerHTML = "";
        incorrectAnswerText.textContent = "Wrong Answer";
        timerToCompleteQuiz -= 10
    }
    else if (event.target.innerText == questionsArray[currentQuestionIndex].correct){
        correctAnswerText = document.createElement("p")
        quizElement.appendChild(correctAnswerText)
        correctAnswerText.innerHTML = "";
        correctAnswerText.textContent = "Correct Answer";
        console.log("You Got the correct Answer")
    }
    checkIfQuizOver()
    }


    var isDone = checkIfQuizOver()
    // you will need to check if you're done with the quiz
    if (!isDone){
       
        displayQuestion()
    } else{
        endQuiz()
    }
    // if you're not done, then move to the next question

function checkIfQuizOver(event){
console.log("checking if over")

}
    //if it's over return true
    // return false

function endQuiz(){
    console.log("quiz ended condition met.")
    
    //deduct 10 seconds
}
