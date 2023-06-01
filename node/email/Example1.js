var nodemailer = require("nodemailer");
const auth = require("./auth");

var transporter = nodemailer.createTransport(auth);

var mailOptions = {
  from: "sudoer2k@gmail.com",
  to: "saakethaj@gmail.com",
  subject: "Mail from nodejs",
  text: "This is the mail",
};

transporter.sendMail(mailOptions, (err, info) => {
  if (err) throw err;
  else console.log("Email sent: " + info.response);
});
