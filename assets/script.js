var startQuizButton = document.querySelector("#startButton");
var timerPTag = document.querySelector("#timer");
var timerToCompleteQuiz = 90;

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
});



