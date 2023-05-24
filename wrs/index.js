import './style.css';

let leaderboard = [];

const user = document.getElementById('Inputname');
const score = document.getElementById('Inputscore');
const pointsDeploy = document.querySelector('.table_container');

const getScores = async () => {
  try {
    const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/TYBkzPuwqpwT7G0vx1Do/scores');
    const json = await response.json();
    leaderboard = json.result;
    pointsDeploy.innerHTML = '';
    leaderboard.forEach((dat) => {
      const row = document.createElement('tr');
      const name = document.createElement('td');
      name.className = 'point';
      name.textContent = `${dat.user}: ${dat.score}`;
      row.appendChild(name);
      pointsDeploy.appendChild(row);
    });
  } catch (error) {
    // Handle the error
  }
};

const addScore = async (userName, userScore) => {
  try {
    const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/TYBkzPuwqpwT7G0vx1Do/scores', {
      method: 'POST',
      body: JSON.stringify({
        user: userName,
        score: Number(userScore),
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const json = await response.json();
    if (json.response === 'Leaderboard score created.') {
      getScores();
    }
    user.value = '';
    score.value = '';
  } catch (error) {
    // Handle the error
  }
};

document.querySelector('.refresh').addEventListener('click', () => {
  getScores();
});

document.querySelector('.form').addEventListener('submit', (event) => {
  event.preventDefault();
  addScore(user.value, score.value);
});

getScores();
