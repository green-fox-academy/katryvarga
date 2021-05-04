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

app.listen(PORT, () => {
  console.log(`The server is up and running on ${PORT} ✨`);
});
