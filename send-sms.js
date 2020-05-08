const accountSid = 'ACfb958f0043fdff2f548c70d0f755ceee'
const authToken = '9cde67bad8e8ba61cff9b72bd2eed57c'

const client = require('twilio')(accountSid, authToken);

client.messages.create({
    to: '+17132870112',
    from: '+15013563249',
    body:'Hey bud its Foster from the past'
})
.then((message)=>console.log(message.sid))
