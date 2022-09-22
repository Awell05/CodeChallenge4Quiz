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
        answers: ["answer 3", "answer 4", "answer 5", "answer 6"],
        correct: "answer 3"
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
}
