const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.json());

app.post('/arrays', (req, res) => {
  let what = req.body.what;
  let numbers = req.body.numbers;
  let result;
  if (what === 'sum') {
    result = { result: sum([numbers]) };
  } else if (what === 'multiply') {
    result = {
      result: multiply([numbers]),
    };
  } else if (what === 'double') {
    result = {
      result: double([numbers]),
    };
  } else {
    result = { error: 'Please provide what to do with the numbers!' };
  }
  res.send(result);
});

function sum([array]) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

function multiply([array]) {
  let result = 1;
  for (let i = 0; i < array.length; i++) {
    result *= array[i];
  }
  return result;
}

function double([array]) {
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i] * 2;
  }
  return array;
}

app.listen(PORT, () => {
  console.log(`The server is up and running on ${PORT}`);
});
