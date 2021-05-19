const express = require('express');
const app = express();

app.get('/groot', (req, res) => {
  const message = req.query.message;
  if (!message) {
    res.status(400).send({ error: 'I am Groot' });
  } else {
    const response = {
      received: req.query.message,
      translated: 'I am Groot!',
    };
    res.status(200).send(response);
  }
});

module.exports = app;
