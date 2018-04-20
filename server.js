
const SendGridAPIKey = "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";
const express = require("express")
var nodemailer = require('nodemailer'); 
var sgMail = require('@sendgrid/mail');



//setup app
const app = express()
const bodyParser = require('body-parser');
const cors = require('cors')



app.use(bodyParser.json());

//directory for react app during development
app.use("/src", express.static(__dirname + "/src"));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.get("/hi", function(req, res){
    res.send("Greetings, this works but post doesnt rip");
})


//Called upon recieving of post request from the model server. Write data recieved to json in public folder
app.post('/email', function(req, res){
    console.log("Recieving request to send email")
    res.sendStatus(200);

    sgMail.setApiKey(SendGridAPIKey);
    const msg = {
      to: 'williamawrigley@gmail.com',
      from: 'albinokid02@gmail.com',
      subject: "Message from" + req.body.From,
      text: req.body.Message,
    };
    sgMail.send(msg);

     console.log("email sent");
    
});

app.listen(8888, ()=>{
    console.log("server started!");
})


