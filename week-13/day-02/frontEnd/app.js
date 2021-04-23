const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.static('assets'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/doubling', (req, res) => {
  const input = req.query.input;
  const result;
  if (input !== undefined) {
    result = {
      received: parseInt(input),
      result: parseInt(input * 2),
    };
  } else {
    result = {
      error: 'Please provide an input!',
    };
  }
  res.send(result);
});

app.get('/greeter', (req, res) => {
  const name = req.query.name;
  const title = req.query.title;
  const result;
  if (name !== undefined && title !== undefined) {
    result = { welcome_message: `Oh, hi there ${name}, my dear ${title}!` };
  } else if (name === undefined && title === undefined) {
    result = {
      error: `Please provide a name and a title!`,
    };
    res.status(400);
  } else if (title === undefined) {
    result = {
      error: `Please provide a title!`,
    };
    res.status(400);
  } else {
    result = {
      error: `Please provide a name!`,
    };
    res.status(400);
  }
  res.end(JSON.stringify(result));
});

app.get('/appenda/:word', (req, res) => {
  const word = req.params.word;
  const result;
  if (word !== undefined) {
    result = { appended: word + 'a' };
  } else {
    result = { error: 'Please provide an input!' };
  }
  res.send(result);
});

app.listen(PORT, () => {
  console.log(`The server is up and running on ${PORT}`);
});
