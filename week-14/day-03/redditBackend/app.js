import mysql from 'mysql';
import express from 'express';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static('public'));

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

app.get('/', (req, res) => {
  res.sendFile('index.html');
});

app.get('/hello', (req, res) => {
  res.send('Hello World');
});

app.get('/posts', (req, res) => {
  req.accepts('application/json');
  req.header('content-type', 'application/json');
  conn.query(`SELECT * FROM posts`, (err, result) => {
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
  const timestamp = parseInt(new Date().getTime());
  req.accepts('application/json');
  req.header('content-type', 'application/json');
  conn.query(
    'INSERT INTO posts (title, url, timestamp, score) VALUES (?,?,?,?);',
    [(req.body.title, req.body.url, timestamp, 0)],
    (err, rows) => {
      if (err) {
        res.status(500).json(err);
        console.log(err);
        return;
      }
      res.send('siker');
    }
  );
});

app.listen(PORT, () => {
  console.log(`The server is up and running on ${PORT}`);
});
