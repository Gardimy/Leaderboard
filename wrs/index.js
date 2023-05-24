import './style.css';

let data = [];

const player = document.getElementById('Inputname');
const points = document.getElementById('Inputscore');
const pointsDeploy = document.querySelector('.table_container');

const getScores = async () => {
  try {
    const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/TYBkzPuwqpwT7G0vx1Do/scores');
    const json = await response.json();
    data = json.result;
    pointsDeploy.innerHTML = '';
    data.forEach((dat, index) => {
      const row = document.createElement('tr');
      const cell = document.createElement('td');
      cell.className = `point`;
      cell.textContent = `${dat.user}: ${dat.score}`;
      row.appendChild(cell);
      pointsDeploy.appendChild(row);
    });
  } catch (error) {
    console.log('Error:', error);
  }
};

const addScore = async (playerAdd, pointsAdd) => {
  try {
    const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/TYBkzPuwqpwT7G0vx1Do/scores', {
      method: 'POST',
      body: JSON.stringify({
        user: playerAdd,
        score: Number(pointsAdd),
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const json = await response.json();
    if (json.response === 'Leaderboard score created correctly.') {
      getScores();
    }
    player.value = '';
    points.value = '';
  } catch (error) {
    console.log('Error:', error);
  }
};

document.querySelector('.refresh').addEventListener('click', () => {
  getScores();
});

document.querySelector('.form').addEventListener('submit', (event) => {
  event.preventDefault();
  addScore(player.value, points.value);
});

getScores();
