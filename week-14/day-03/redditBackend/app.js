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

app.get('/posts', (req, res) => {
  req.accepts('application/json');
  req.header('content-type', 'application/json');
  conn.query(`SELECT * FROM post`, (err, result) => {
    if (err) {
      res.status(500).json({ error: `database error` });
      return;
    }
    return res
      .status(200)
      .contentType(`application/json`)
      .json({ posts: result });
  });
});

app.post('/posts', (req, res) => {
  req.accepts('application/json');
  req.header('content-type', 'application/json');
  let post = {
    title: JSON.parse(req.body).title,
    url: JSON.parse(req.body).url,
  };
  conn.query('INSERT INTO posts SET ?', post, (err, rows) => {
    if (err) {
      res.status(500).json({ error: `database error` });
    }
    res.status(200).json({ rows });
  });
});

app.listen(PORT, () => {
  console.log(`The server is up and running on ${PORT}`);
});
