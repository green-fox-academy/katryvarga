const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('sziasztok');
});

app.get('/ego', (req,res) => {
    res.send(`${1+1}`);
});

app.listen(3000);
