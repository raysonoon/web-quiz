// Question progress
function updateQuestionBar(currentQuestion, totalQuestions) {
    const fill = document.querySelector(".question-bar-fill");
    const percentage = (currentQuestion / totalQuestions) * 100;
    fill.style.width = `${percentage}%`;
}

// Timer
function startCountdown() {
    const timerDisplay = document.getElementById("timer")
    let remainingTime = timerDisplay.textContent;

    const countdown = setInterval(() => {
        remainingTime--;

        if (remainingTime <= 0) {
            clearInterval(countdown);
            timerDisplay.textContent = "0";
        } else {
            timerDisplay.textContent = remainingTime;
        }
    }, 1000);
}