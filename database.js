// database.js — in-memory version for Heroku (Assignment 3 demo)
let predictions = [];

// Create
function createPrediction(game, winner, score) {
  predictions.push({ id: Date.now(), game, winner, score });
}

// Read all
function getAllPredictions() {
  return predictions;
}

// Update
function updatePrediction(id, score) {
  const p = predictions.find(p => p.id == id);
  if (p) p.score = score;
}

// Delete
function deletePrediction(id) {
  predictions = predictions.filter(p => p.id != id);
}

module.exports = { createPrediction, getAllPredictions, updatePrediction, deletePrediction };