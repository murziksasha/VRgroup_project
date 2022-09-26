const express = require ('express');
const bodyParser = require ('body-parser');


const app = express();

const PORT = 3010;

app.get('/registration', (req, res) => {
  res.send(`Registration page`)
});

app.listen(PORT, ()=> console.log(`server listening at http://localhost:${PORT}/registration`))