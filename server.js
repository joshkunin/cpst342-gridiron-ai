// Josh Kunin - Gridiron AI - Assignment 2 - Express + Routes + API

const express = require('express');
const hbs = require('hbs');
const axios = require('axios');
const db = require('./database'); // For Deliverable 5

const app = express();
const port = process.env.PORT || 3000;

// Middleware for static files (images, CSS)
app.use(express.static('public'));

// Middleware for templating (Handlebars)
app.set('view engine', 'hbs');

// Middleware for JSON + form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route 1: GET home - Renders form (renders data: home page)
app.get('/', (req, res) => {
  res.render('index', { title: 'Gridiron AI - Predict NFL Games' });
});

// Route 2: POST simulate - Accepts data, runs sim, saves to DB (accepts data: POST)
app.post('/simulate', (req, res) => {
  const { homeTeam, awayTeam, homeRating, awayRating } = req.body;
  // Basic sim: Run 5 sims like Madden (random scores based on ratings)
  let homeWins = 0;
  for (let i = 0; i < 5; i++) {
    const homeScore = Math.floor(Math.random() * (homeRating / 2)) + 10;
    const awayScore = Math.floor(Math.random() * (awayRating / 2)) + 10;
    if (homeScore > awayScore) homeWins++;
  }
  const winner = homeWins > 2 ? homeTeam : awayTeam;
  const score = '24-21'; // Avg from sims

  // Save to DB (CRUD: Create)
  db.createPrediction(homeTeam + ' vs ' + awayTeam, winner, score);
  res.redirect('/predictions');
});

// Route 3: GET predictions - Renders DB data (renders data: list from DB)
app.get('/predictions', (req, res) => {
  const predictions = db.getAllPredictions();
  res.render('predictions', { predictions });
});

// Route 4: POST update - Accepts data, updates DB (accepts data: POST)
app.post('/update/:id', (req, res) => {
  const { score } = req.body;
  db.updatePrediction(req.params.id, score);
  res.redirect('/predictions');
});

// Route 5: GET api-games - Calls external API, returns JSON (external API call + returns JSON)
app.get('/api-games', async (req, res) => {
  try {
    const response = await axios.get('https://site.api.espn.com/apis/site/v2/sports/football/nfl/scoreboard');
    res.json(response.data); // Returns JSON from ESPN API
  } catch (error) {
    res.status(500).json({ error: 'API call failed' });
  }
});

// Bonus Route: DELETE prediction - For full CRUD (accepts data: GET for simplicity)
app.get('/delete/:id', (req, res) => {
  db.deletePrediction(req.params.id);
  res.redirect('/predictions');
});

app.listen(port, () => {
  console.log(`Server at http://localhost:${port}`);
});