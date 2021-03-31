import mysql from 'mysql';
import express from 'express';

const app = express();
const PORT = 3000;

app.use(express.json());

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'reddit',
  insecureAuth: `true`,
});

conn.connect((err) => {
  if (err) {
    console.log('Cannot connect to the database', err);
    return;
  }
  console.log('Connection established');
});

app.get('/hello', (req, res) => {
  res.send('Hello Word');
});

app.listen(PORT, () => {
  console.log(`The server is up and running on ${PORT}`);
});
