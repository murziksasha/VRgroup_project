const nodemailer = require('nodemailer')

let testEmailAccount = nodemailer.createTestAccount()

let transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: 'testovichmarket@gmail.com',
    pass: 'gqvlqtxcgquxmwjo',
  },
})

const sendMail =  (email, name, text, cb) => {
  transporter.sendMail({
    from: `message from client ${email}`,
    to: 'versuses@rambler.ru',
    subject: `Message from client ${name}`,
    text: `${text}`,
    html:
      'This <i>message</i> was sent from <strong>Node js</strong> server.' + text,
  }, (err, data) => {
    if(err) {
      cb(err, null);
    } else {
      cb(null, data);
    }
  });
}

//testing sent message
sendMail('testovichmarket@', 'hello!', "i'm a mail from server", (err, data)=>{
  if(err) {
    console.log(err + 'something wrong... ')
  } else {
    console.log("email sent!    " + data)
  }
})

module.exports = sendMail;


