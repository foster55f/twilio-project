require('dotenv').config()
console.log('Your environment variable TWILIO_ACCOUNT_SID has the value: ', process.env.TWILIO_ACCOUNT_SID);
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;


const client = require('twilio')(accountSid, authToken);

client.messages.create({
    to: process.env.MY_PHONE,
    from: process.env.TWILIO_PHONE,
    body:'Hey bud its Foster from the past'
})
.then((message)=>console.log(message.sid))
