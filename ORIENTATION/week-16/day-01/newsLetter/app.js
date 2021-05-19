const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded());
app.use(express.static('public'));
app.get('/', (req, res) => {
  res.sendFile('public');
});

app.post('/signup', (req, res) => {
  const username = req.body.fullname;
  const email = req.body.email;
  res
    .status(200)
    .send(`<h1>Thanks ${username}, we will send updates to ${email}</h1>`);
});

app.listen(PORT, () => {
  console.log(`The server is up and running on ${PORT}`);
});
