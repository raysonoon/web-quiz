
const ctx = document.getElementById('bar-chart').getContext('2d');

// Hard-coded bar graph
const barChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['A', 'B', 'C', 'D'],
        datasets: [{
            data: [5, 4, 3, 2],
            backgroundColor: ['blue', 'green', 'red', 'orange']
        }]
    },
    options: {
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            y: { beginAtZero: true }
        }
    }
});

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