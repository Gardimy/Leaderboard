import './style.css';

const API_BASE_URL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';

// DOM Elements
const refreshButton = document.querySelector('.refresh');
const form = document.querySelector('.form');
const nameInput = document.querySelector('#Inputname');
const scoreInput = document.querySelector('#Inputscore');
const tableContainer = document.querySelector('.table_container');

let gameId = null;

// Function to create a new game
const createGame = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/games/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: 'Your Game Name',
      }),
    });

    if (response.ok) {
      const data = await response.json();
      gameId = data.id;
      console.log('Game created. ID:', gameId);
    } else {
      console.log('Failed to create game');
    }
  } catch (error) {
    console.log('Error:', error);
  }
};

// Function to fetch and display scores
const fetchScores = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/games/${gameId}/scores/`);

    if (response.ok) {
      const data = await response.json();
      displayScores(data);
    } else {
      console.log('Failed to fetch scores');
    }
  } catch (error) {
    console.log('Error:', error);
  }
};

// Function to display scores in the table
const displayScores = (scores) => {
  tableContainer.innerHTML = ''; // Clear previous scores

  scores.forEach((score) => {
    const row = document.createElement('tr');
    const cell = document.createElement('td');
    cell.textContent = `${score.name}: ${score.score}`;
    row.appendChild(cell);
    tableContainer.appendChild(row);
  });
};

// Function to submit a score
const submitScore = async (event) => {
  event.preventDefault();

  const name = nameInput.value;
  const score = parseInt(scoreInput.value);

  if (!name || !score) {
    console.log('Please enter a name and score');
    return;
  }

  try {
    const response = await fetch(`${API_BASE_URL}/games/${gameId}/scores/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        score,
      }),
    });

    if (response.ok) {
      console.log('Score submitted');
      nameInput.value = '';
      scoreInput.value = '';
      fetchScores(); // Refresh scores after submitting
    } else {
      console.log('Failed to submit score');
    }
  } catch (error) {
    console.log('Error:', error);
  }
};

// Event Listeners
refreshButton.addEventListener('click', fetchScores);
form.addEventListener('submit', submitScore);

// Create a new game on page load
createGame();
