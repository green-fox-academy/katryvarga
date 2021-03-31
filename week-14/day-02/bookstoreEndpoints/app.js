import mysql from 'mysql';
import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.use(express.json());
app.use(cors());

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
      console.error('Cannot retrieve data: ' + `'${err.toString()}'`);
      res.sendStatus(500);
      return null;
    }
    return res.json(rows);
  });
});

app.get('/allinfo', (req, res) => {
  let queryAllInfo =
    'SELECT * FROM book_mast LEFT JOIN author ON author.aut_id = book_mast.aut_id LEFT JOIN category ON category.cate_id = book_mast.cate_id LEFT JOIN publisher ON publisher.pub_id = book_mast.pub_id';
  let category = req.query.category;
  let publisher = req.query.publisher;
  let plt = req.query.plt;
  let pgt = req.query.pgt;
  let queryFilter = queryAllInfo;

  if (category || publisher || plt || pgt) {
    let isFirstSearch = true;
    queryFilter = queryFilter + ' WHERE ';
    if (category) {
      queryFilter = queryFilter + 'category.cate_descrip = ' + `'${category}'`;
      isFirstSearch = false;
    }
    if (publisher) {
      if (!isFirstSearch) {
        queryFilter = queryFilter + ' AND ';
      }
      queryFilter = queryFilter + 'publisher.pub_name = ' + `'${publisher}'`;
      isFirstSearch = false;
    }
    if (plt) {
      if (!isFirstSearch) {
        queryFilter = queryFilter + ' AND ';
      }
      queryFilter = queryFilter + 'book_mast.book_price < ' + `'${plt}'`;
      isFirstSearch = false;
    }
    if (pgt) {
      if (!isFirstSearch) {
        queryFilter = queryFilter + ' AND ';
      }
      queryFilter = queryFilter + 'book_mast.book_price > ' + `'${pgt}'`;
      isFirstSearch = false;
    }
  }
  conn.query(queryFilter, (err, rows) => {
    if (err) {
      console.log(err.toString());
      res.status(500).json({ error: 'database error' });
      return;
    }
    return res.json(rows);
  });
});

process.on('uncaughtException', (err) => {
  console.log('Fatal error occured', err.message);
  process.exit(1);
});

app.listen(PORT, () => {
  console.log(`The server is up and running on ${PORT}`);
});
