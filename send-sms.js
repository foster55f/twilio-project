const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const client = require('twilio')(accountSid, authToken);

client.messages.create({
    to: '+17132870112',
    from: '+15013563249',
    body:'Hey bud its Foster from the past'
})
.then((message)=>console.log(message.sid))
