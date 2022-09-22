var startQuizButton = document.querySelector("#startButton");
var startElement = document.getElementById("starter")
var quizElement = document.getElementById("quiz-holder")
var timerPTag = document.querySelector("#timer");
var timerToCompleteQuiz = 90;
var currentQuestionIndex = 0

var questionsArray = [
    {
        question: "Question 1",
        answers: ["answer 1", "answer 2", "answer 3"],
        correct: "answer 1"
    },
    {
        question: "Question 2",
        answers: ["answer 3", "answer 4", "answer 5"],
        correct: "answer 3"
    }
]

console.log(startQuizButton);
console.log(timerPTag);
console.log(timerToCompleteQuiz);


// Function to start timer when "start quiz" button is selected
// need to add when incorrect answer is selected, 10-15 seconds are deducted from current time
 startQuizButton.addEventListener('click', function countdown() {
    console.log('timer should begin');  
    var timerfunction = setInterval(function(){
        timerToCompleteQuiz--;
        timerPTag.textContent = " Timer " + timerToCompleteQuiz;
        if (timerToCompleteQuiz === 0) {
            clearInterval(timerfunction);
        }
    }, 1000);
    startQuiz()
});

function startQuiz(){
    console.log("startQuizFunction")
    startElement.style.display = "none"
    quizElement.classList.remove("hidden")
    displayQuestion()

}
function displayQuestion(){
    console.log("displayQuestionfunction")
}


