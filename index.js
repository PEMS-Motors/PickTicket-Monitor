//var config = require('./config.js');
try {
    var config = process.cwd() + '/config.js';
    config = require(config);
} catch (error) {
    console.error('ERROR -> Unable to load config file.');
    process.exit(1);
}
const discord = require('discord.js');
const client = new discord.Client();


//var command = require("./functions/command.js");
var wallet = require("./functions/wallet.js");
//var cron = require("./functions/cron.js");
const isValidCommand = (message, cmdName) => message.content.toLowerCase().startsWith(config.bot.commandPrefix + cmdName)


client.on('ready', () => {
    console.log('The bot started and is online!');
});


client.on('message', async function (message) {
    var miPath = '01A Processed';
    var 

    if (message.author.bot) return;

    if (isValidCommand(message, 'tr')) {
        if (ruleNumber1 === undefined) {
            message.channel.send({
                embed: {
                    color: 3447003,
                    title: "POW is currenty turned ON!",
                    fields: [{
                        name: "Current Block",
                        value: currentBlock
                    }
                    ],
                    timestamp: new Date(),
                    footer: {
                        text: "Current Live Status"
                    }
                }
            });
            message.delete(10000);

        } else {
            message.channel.send({
                embed: {
                    color: 3447003,
                    title: "POW is currenty turned OFF!",
                    fields: [{
                        name: "Current Block",
                        value: currentBlock
                    }
                    ],
                    timestamp: new Date(),
                    footer: {
                        text: "Current Live Status"
                    }
                }
            });
            message.delete(10000);
        }
        return;
    }    
});

// Start the bot
client.login(config.bot.botToken);

// Start cronjobs

//if (config.wallet.ruleStatus1) // Post LCP Rule 1 Status
   // cron.cron_lcp_chain_status();
