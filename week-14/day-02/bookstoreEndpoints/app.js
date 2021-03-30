import mysql from 'mysql';
import express from 'express';

const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.use(express.json());

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'bookinfo',
  insecureAuth: `true`,
});

conn.connect((err) => {
  if (err) {
    console.log('Cannot connect to the database', err);
    return;
  }
  console.log('Connection established');
});

app.get('/titles', (req, res) => {
  conn.query('SELECT book_name FROM book_mast;', (err, rows) => {
  if (err) {
    console.error(`Cannot retrieve data: ${err.toString()}`);
    res.sendStatus(500);
    return null;
  }
  return res.json(rows);
  });
});






app.listen(PORT, () => {
  console.log(`The server is up and running on ${PORT}`);
});
