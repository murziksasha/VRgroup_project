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

const sendMail =  (email, subject, text, cb) => {
  transporter.sendMail({
    from: '"Node js" <testovichmarket@gmail.com>',
    to: 'versuses@rambler.ru',
    subject: 'Message from Node js',
    text: 'This message was sent from Node js server.',
    html:
      'This <i>message</i> was sent from <strong>Node js</strong> server.',
  }, (err, data) => {
    if(err) {
      cb(err, null);
    } else {
      cb(null, data);
    }
  });
}

//testing sent message
// sendMail('testovichmarket@', 'hello!', "i'm a mail from server", (err, data)=>{
//   if(err) {
//     console.log(err + 'something wrong... ')
//   } else {
//     console.log("email sent!    " + data)
//   }
// })

module.exports = sendMail;


