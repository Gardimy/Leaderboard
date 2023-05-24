const API_URL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api';
const GAME_ID = 'YOUR_GAME_ID'; // Replace with your game ID

export const createGame = async (gameName) => {
  try {
    const response = await fetch(`${API_URL}/games`, {
      method: 'POST',
      body: JSON.stringify({ name: gameName }),
      headers: { 'Content-Type': 'application/json' },
    });
    const data = await response.json();
    return data.id;
  } catch (error) {
    console.log('Error creating game:', error);
    return null;
  }
};

export const getScores = async () => {
  try {
    const response = await fetch(`${API_URL}/games/${GAME_ID}/scores`);
    const data = await response.json();
    return data.result;
  } catch (error) {
    console.log('Error getting scores:', error);
    return [];
  }
};

export const addScore = async (playerName, playerScore) => {
  try {
    const response = await fetch(`${API_URL}/games/${GAME_ID}/scores`, {
      method: 'POST',
      body: JSON.stringify({ user: playerName, score: Number(playerScore) }),
      headers: { 'Content-Type': 'application/json' },
    });
    const data = await response.json();
    return data.response === 'Leaderboard score created correctly.';
  } catch (error) {
    console.log('Error adding score:', error);
    return false;
  }
};

export const renderLeaderboard = (scores) => {
  const pointsDeploy = document.querySelector('.table_container');
  pointsDeploy.innerHTML = '';

  scores.forEach(({ user, score }) => {
    const row = document.createElement('tr');
    const cell = document.createElement('td');
    cell.className = 'point';
    cell.textContent = `${user}: ${score}`;
    row.appendChild(cell);
    pointsDeploy.appendChild(row);
  });
};

