const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.static('assets'));

app.post('/arrays', (req,res) => {
    
})


app.listen(PORT, () => {
  console.log(`The server is up and running on ${PORT}`);
});
