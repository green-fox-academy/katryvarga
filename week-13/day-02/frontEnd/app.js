const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.static('assets'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`The server is up and running on ${PORT}`);
});

app.get('/doubling', (req, res) => {
  let input = req.query.input;
  let result;
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
  let name = req.query.name;
  let title = req.query.title;
  let result;
  if (name !== undefined && title !== undefined) {
    result = { welcome_message: `Oh, hi there ${name}, my dear ${title}!` };
  } else if (name === undefined && title === undefined) {
    result = {
      error: `Please provide a name and a title!`,
    };
  } else if (title === undefined) {
    result = {
      error: `Please provide a title!`,
    };
  } else {
    result = {
      error: `Please provide a name!`,
    };
  }
  res.send(result);
});
