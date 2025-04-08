// hard-coded students
const studentData = [
    {"name": "Andy", "score": 120},
    {"name": "Bob", "score": 90},
    {"name": "Charlie", "score": 70},
    {"name": "Rayson", "score": 0},
    {"name": "Wilbert", "score": "MC"}
]

function displayLeaderboard() {
    const leaderboardList = document.querySelector(".leaderboard-list");

    studentData.forEach((player, index) => {
        const li = document.createElement("li");
        li.innerHTML = 
        `<span class="player-name">${index + 1}. ${player.name}</span>
        <span class="player-score">${player.score} pts</span>`;
        leaderboardList.appendChild(li);
    });
}

displayLeaderboard();