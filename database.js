// Josh Kunin - Gridiron AI - Assignment 2 - SQLite DB + CRUD

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('gridiron.db');

// Create table if not exists
db.run(`
  CREATE TABLE IF NOT EXISTS predictions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    game TEXT,
    winner TEXT,
    score TEXT
  )
`);

// CRUD Queries

// Create
function createPrediction(game, winner, score) {
  db.run(`INSERT INTO predictions (game, winner, score) VALUES (?, ?, ?)`, [game, winner, score]);
}

// Retrieve all
function getAllPredictions() {
  let results = [];
  db.all(`SELECT * FROM predictions`, [], (err, rows) => {
    if (err) throw err;
    results = rows;
  });
  return results;
}

// Update
function updatePrediction(id, score) {
  db.run(`UPDATE predictions SET score = ? WHERE id = ?`, [score, id]);
}

// Delete
function deletePrediction(id) {
  db.run(`DELETE FROM predictions WHERE id = ?`, [id]);
}

module.exports = { createPrediction, getAllPredictions, updatePrediction, deletePrediction };