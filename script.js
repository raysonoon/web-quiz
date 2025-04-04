const headerContainer = document.querySelector(".header");
const studentCounter = document.querySelector(".student-counter");
const quizContainer = document.querySelector(".quiz-container");
const answerContainer = document.createElement("div");
answerContainer.className = "answer-container";
const bottomContainer = document.querySelector(".bottom-container");


document.getElementById("start-btn").addEventListener("click", () => {
    /*fetch('/getQuestion?session_id=abc123') // Replace with actual session ID
        .then(response => response.json())
        .then(data => displayQuestion(data));*/
    displayGameHeader();
    displayQuestion();
    displayAnswers();
    displayBottomBar();
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

    headerContainer.innerHTML = `
        <div class="game-bar">
            <h2>IM2073 iRA</h2>
            <button>Quit</button>
        </div>
    `;
}

function displayQuestion() {
    let questionHTML = `
        <div class="question">
            <h2>1. What am I doing with my life?</h2>
            <img src ="./img/penguin.jpg" alt="trololol">
        </div>
    `;

    quizContainer.innerHTML = questionHTML;
}

// Answers hard-coded
function displayAnswers() {
    let answerOptionsHTML = `
        <button>A. why</button>
        <button>B. idk</button>
        <button>C. drop out</button>
        <button>D. i luv prof wesley</button>
    `;

    answerContainer.innerHTML = answerOptionsHTML;

    quizContainer.appendChild(answerContainer);
}

// Question count hard-coded
function displayBottomBar() {
    bottomContainer.innerHTML = `
    <div class="bottom-bar"
    <h3 id="question-count">1 of 5 Questions</h3>
    <button id="show-answer">Show Ans</button>
    </div>
    `;
}

/*function submitAnswer(questionId, selectedOption) {
    fetch('/submitAnswer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `session_id=abc123&question_id=${questionId}&selected_option=${selectedOption}`
    }).then(() => alert("Answer submitted!"));
}
*/