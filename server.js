const express = require ('express');
const bodyParser = require ('body-parser');
const sendMail = require ('./src/js/services/nodemailer');


const app = express();
const path = require('path');

const PORT = process.env.PORT || 5050;

app.use(express.static('public'));

app.use(express.urlencoded({
  extended: false
}));

app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/public', '/index.html'));
});



app.post('/', (req, res) => {
  console.log(req.body);
  const {email, phone, name, message } = req.body;
  sendMail(name, email, message, phone, function(err, data){
    if(err) {
      res.status(500).json({message: 'Internal Error'});
    } else {
      res.json({message: `Email sent!!!!!`});
    }
  });
})

app.listen(PORT, ()=> console.log(`server listening at http://localhost:${PORT}`))