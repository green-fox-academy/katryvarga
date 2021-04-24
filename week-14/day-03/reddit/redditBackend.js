import mysql from 'mysql';
import express from 'express';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

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
  res.send('Hello World');
});

app.get('/posts', (req, res) => {
  conn.query(`SELECT * FROM posts`, (err, rows) => {
    if (err) {
      res.status(500).json(err);
      return;
    }
    return res.status(200).json(rows);
  });
});

app.post('/posts', (req, res) => {
  let timestamp = parseInt(new Date().getTime());
  conn.query(
    `INSERT INTO posts (title, url, timestamp, score)
              VALUES (?,?,?,?);`,
    [req.body.title, req.body.url, timestamp, 0],
    (err, rows) => {
      if (err) {
        res.status(500).json(err);
        return;
      }

      conn.query(
        `SELECT * FROM posts WHERE id = ${rows.insertId}`,
        (err, rows) => {
          if (err) {
            res.status(500).json(err);
            return;
          }
          res.status(200).json(rows);
        }
      );
    }
  );
});

app.put('/posts/:id/upvote', (req, res) => {
  let id = req.params.id;
  conn.query(
    'UPDATE posts SET score = score + 1 WHERE id = ?',
    id,
    (err, rows) => {
      if (err) {
        res.status(500).json(err);
        return;
      }
      conn.query(`SELECT * FROM posts WHERE id = ${id}`, (err, rows) => {
        if (err) {
          res.status(500).json(err);
          return;
        }
        res.status(200).json(rows);
      });
    }
  );
});

app.put('/posts/:id/downvote', (req, res) => {
  const id = req.params.id;
  conn.query(
    'UPDATE posts SET score = score - 1 WHERE id = ?',
    id,
    (err, rows) => {
      if (err) {
        res.status(500).json(err);
        return;
      }
      conn.query(`SELECT * FROM posts WHERE id = ${id}`, (err, rows) => {
        if (err) {
          res.status(500).json(err);
          return;
        }
        res.status(200).json(rows);
      });
    }
  );
});

app.delete('/posts/:id', (req, res) => {
  const id = req.params.id;
  conn.query(`DELETE FROM posts WHERE id = ?`, id, (err, rows) => {
    if (err) {
      res.sendStatus(500).json(err);
      return;
    }
    return res.sendStatus(200);
  });
});

app.put('/posts/:id/', (req, res) => {
  const id = req.params.id;
  const newtitle = req.body.title;

  conn.query(
    `UPDATE posts SET title = ? WHERE id = ?`,
    [newtitle, id],
    (err, rows) => {
      if (err) {
        res.status(500).json(err);
        return;
      }
      conn.query(`SELECT * FROM posts WHERE id = ${id}`, (err, rows) => {
        if (err) {
          res.status(500).json(err);
          return;
        }
        res.status(200).json(rows);
      });
    }
  );
});

app.listen(PORT, () => {
  console.log(`The server is up and running on ${PORT}`);
});
