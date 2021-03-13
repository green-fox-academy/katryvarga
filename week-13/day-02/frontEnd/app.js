const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.static('assets'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
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
  let word = req.params.word;
  let result;
  if (word !== undefined) {
    result = { appended: word + 'a' };
  } else {
    result = { error: 'Please provide an input!' };
  }
  res.send(result);
});

function sum(number) {
  let result = 0;
  for (let i = number; i > 0; i--) {
    result += i;
  }
  return result;
}

function factor(number) {
  let result = 1;
  for (let i = number; i > 0; i--) {
    result *= i;
  }
  return result;
}

app.listen(PORT, () => {
  console.log(`The server is up and running on ${PORT}`);
});
