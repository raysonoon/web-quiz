const headerContainer = document.querySelector(".header");
const studentCounter = document.querySelector(".student-counter");
const quizContainer = document.querySelector("#quiz-container");
const gameBar = document.createElement("div");


document.getElementById("start-btn").addEventListener("click", () => {
    /*fetch('/getQuestion?session_id=abc123') // Replace with actual session ID
        .then(response => response.json())
        .then(data => displayQuestion(data));*/
    displayGameHeader();
    displayQuestion();
});

/*function displayQuestion(data) {
    let questionHTML = `
        <div class="question">
            <h2>${data.question}</h2>
            <ul>
                ${data.options.map((option, index) => `<li><button onclick="submitAnswer(${data.question_id}, ${index})">${option}</button></li>`).join('')}
            </ul>
        </div>
    `;

    quizContainer.innerHTML = questionHTML;
}
*/

function displayGameHeader() {
    if (studentCounter) {
        headerContainer.removeChild(studentCounter);
    }

    gameBar.innerHTML = `
        <div class="game-bar">
            <h2>IM2073 iRA</h2>
            <button>Quit</button>
        </div>
    `;

    headerContainer.appendChild(gameBar);
}

function displayQuestion() {
    let questionHTML = `
        <div class="question">
            <h2>1. What am I doing with my life?</h2>
            <img src ="./img/penguin.jpg" alt="trololol">
        </div>
    `;

    document.getElementById("quiz-container").innerHTML = questionHTML;
}

/*function submitAnswer(questionId, selectedOption) {
    fetch('/submitAnswer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `session_id=abc123&question_id=${questionId}&selected_option=${selectedOption}`
    }).then(() => alert("Answer submitted!"));
}
*/