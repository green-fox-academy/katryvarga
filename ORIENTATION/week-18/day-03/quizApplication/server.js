import express from 'express';
import mysql from 'mysql';
import cors from 'cors';
import path from 'path';

const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(path.resolve(), 'public')));

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'quizapp',
  insecureAuth: `true`,
});

conn.connect((err) => {
  if (err) {
    console.log('Cannot connect to the database ❌', err);
    return;
  }
  console.log('Connection established ✨');
});

app.get('/game', (req, res) => {
  res.sendFile(path.join(path.resolve(), 'public/index.html'));
});

app.get('/questions', (req, res) => {
  res.sendFile(path.join(path.resolve(), 'public/questions.html'));
});

app.get('/api/game', (req, res) => {
  conn.query('SELECT count(id) FROM questions', (err, rows) => {
    if (err) {
      res.status(500).json(err);
      return;
    } else {
      const recordNumber = Object.values(rows[0]);
      const randomNumber = Math.floor(Math.random() * recordNumber + 1);
      conn.query(
        'SELECT * FROM questions q LEFT JOIN answers a ON a.question_id = q.id WHERE q.id = ?',
        [randomNumber],
        (err, rows) => {
          if (err) {
            res.status(500).json(err);
            return;
          } else {
            res.status(200).json(rows);
          }
        }
      );
    }
  });
});

app.get('/api/questions', (req, res) => {
  conn.query('SELECT * FROM questions', (err, rows) => {
    if (err) {
      res.status(500).json(err);
      return;
    } else {
      res.status(400).json(rows);
    }
  });
});

app.listen(PORT, () => {
  console.log(`The server is up and running on ${PORT} ✨`);
});
