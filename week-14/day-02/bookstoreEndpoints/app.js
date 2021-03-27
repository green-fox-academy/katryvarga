import express from 'express';
import mysql from 'mysql';

const app = express();
const PORT = 3000;


const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password', 
});

conn.connect((err, result) => {
  if (err) {
   console.log('Cannot connect to the database', err);
   return; 
  }
  console.log('Connection established');
});