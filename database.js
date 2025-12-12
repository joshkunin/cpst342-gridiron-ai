// Josh Kunin - Gridiron AI - Fixed async DB read

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('gridiron.db');

// Create table
db.run(`
  CREATE TABLE IF NOT EXISTS predictions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    game TEXT,
    winner TEXT,
    score TEXT
  )
`);

// CREATE
function createPrediction(game, winner, score) {
  db.run(`INSERT INTO predictions (game, winner, score) VALUES (?, ?, ?)`, [game, winner, score]);
}

// READ ALL (now async with callback)
function getAllPredictions(callback) {
  db.all(`SELECT * FROM predictions ORDER BY id DESC`, (err, rows) => {
    if (err) {
      console.error(err);
      callback([]);
    } else {
      callback(rows);
    }
  });
}

// UPDATE
function updatePrediction(id, score) {
  db.run(`UPDATE predictions SET score = ? WHERE id = ?`, [score, id]);
}

// DELETE
function deletePrediction(id) {
  db.run(`DELETE FROM predictions WHERE id = ?`, [id]);
}

module.exports = { createPrediction, getAllPredictions, updatePrediction, deletePrediction };