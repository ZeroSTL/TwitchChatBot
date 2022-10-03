//require required node modules
const tmi = require('tmi.js');
//setting up connection config
const client = new tmi.Client({
    options: { debug: true, messagesLogLevel: "info" },
    connection: {
        reconnect: true,
        secure: true
    },identity: {
        username: process.env.TWITCH_BOT_USERNAME,
        password: process.env.TWITCH_OAUTH_TOKEN
    },channels: [process.env.TWITCH_CHANNEL]
});


client.connect().catch(console.error);

var deathCounter = 1;
client.on('message', (channel, tags, message, self) => {
    
    if (self) return;
    switch (message.toLowerCase()) {

        case '!lurk':
            client.say(channel, `Thanks for Tuning in!! Stealth Mode Activated @${tags.username}`);
            break;
        
        case '!tiktok':
            client.say(channel, `Check out my Tiktok!!! - https://www.tiktok.com/@nonstopantonio?lang=en`);
            break;
        
        case '!instagram':
            client.say(channel, `Make sure to follow the Insta! https://www.instagram.com/nonstopantonio/`);
            break;

        case '!twitter':
            client.say(channel, `Come chat with me on Twitter!! https://twitter.com/NonStopAntonio`);
            break;
        
        case '!twitchtok':
            client.say(channel, `THE TWITCH TOK :O https://www.tiktok.com/@nonstopantonio2.0?lang=en`);
            break;

        case '!whatsup':
            client.say(channel, `@${tags.username}! Says What’s up!`);
            break;

        case '!rage':
            client.say(channel, `NonStopRage Activated`);
            break;
        
        case '!swear':
            client.say(channel, `Language (if only I could put memes in chat)`);
            break;

        case '!spidey':
            client.say(channel, `Thwip Thwip `);
            break;
            
        case '!internet':
            client.say(channel, `Oof Internet is broken agian eh? `);
            break;
            
        case '!commands':
            client.say(channel, `!lurk, !Tiktok, !instagram, !twitter, !youtube, !twitchtok, !whatsup, !rage, !swear, !spidey, !commands (But you knew that one)`);
            break;

        case '!youtube':
            client.say(channel, `It's a work in progress but come follow! https://www.youtube.com/channel/UCfIpkJHyMtqFyjsbQOF8sHg`);
             break;

        case '!dead':
            client.say(channel, `You died again? What a suprise. Total Deaths: ${deathCounter++}`);
             break;
            
        case '!death':
            client.say(channel, `You died again? What a suprise. Total Deaths: ${deathCounter}`);
             break;
            
        case 'ey':
            client.say(channel, `lmao`);
            break;
        
        case 'my name is?':
            client.say(channel, `Slim Shady`);
            break;
            
        case '!goal':
            client.say(channel, `If we hit 100 followers there will be a friendly neighbourhood Spider-man special!`);
            break;
        
        case '!tiktok':
            client.say(channel, `test test`);
            break;
            
        default:
            let mymessage = message.toString();
            break;
    }



});
