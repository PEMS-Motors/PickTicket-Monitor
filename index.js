const fs = require('fs');
const Discord = require('discord.js');
const Enmap = require("enmap");
const config = require('./config.js');
const sendEmail = require('./modules/email.js');
const client = new Discord.Client();

client.config = config;
client.commands = new Enmap();

// Start email timer
var startEmailTimer = sendEmail.command_sendEmail;
// Set some globals to call in other files
global.globalClient = client;
global.globalTimer = setTimeout(startEmailTimer, 1800000); // 30 min timer to trigger alert email
// Restart the timer after it reaches the end
restartTimer = function () {
    global.globalTimer = setTimeout(startEmailTimer, 1800000); // 30 min timer to trigger alert email
};
/*****************************************************
 *             Bring Over Location Commands          *
 ****************************************************/
const ca = require('./commands/ca.js'); const csh = require('./commands/csh.js');
const ct = require('./commands/ct.js'); const emw = require('./commands/emw.js');
const fl = require('./commands/fl.js'); const il = require('./commands/il.js');
const md = require('./commands/md.js'); const mi = require('./commands/mi.js');
const mn = require('./commands/mn.js'); const mo = require('./commands/mo.js');
const nc = require('./commands/nc.js'); const tn = require('./commands/tn.js');
const tx = require('./commands/tx.js'); 

/*****************************************************
 *             Start Scanning Folders                *
 ****************************************************/

 client.on("ready", () => {
        client.user.setActivity(`PEMS | ${config.bot.prefix}`);
        var statuschannel = client.channels.find(channel => channel.id === config.channels.status);
        // Send to discord the folders we are going to scan!
        statuschannel.send({
            embed: {
                color: 0x2ecc71, title: "Monitoring Has Started!",
                fields: [
                    { name: "Michigan Warehouse!:", value: config.filepaths.MI, inline: true },
                    { name: "Illinois Warehouse!:", value: config.filepaths.IL, inline: true },
                    { name: "North Carolina Warehouse!:", value: config.filepaths.NC, inline: true },
                    { name: "Missouri Warehouse!:", value: config.filepaths.MO, inline: true },
                    { name: "California Warehouse!:", value: config.filepaths.CA, inline: true },
                    { name: "Texas Warehouse!:", value: config.filepaths.TX, inline: true },
                    { name: "Minnesota Warehouse!:", value: config.filepaths.MN, inline: true },
                    { name: "Connecticut Warehouse!:", value: config.filepaths.CT, inline: true },
                    { name: "Maryland Warehouse!:", value: config.filepaths.MD, inline: true },
                    { name: "Florida Warehouse!:", value: config.filepaths.FL, inline: true },
                    { name: "Tennessee Warehouse!:", value: config.filepaths.TN, inline: true },
                    { name: "CSH Warehouse!:", value: config.filepaths.CSH, inline: true },
                    { name: "EMW Warehouse!:", value: config.filepaths.EMW, inline: true }
                ],
                timestamp: new Date().getTime(), footer: { text: "Current Time Status" }
            }
        });
        // Log to console the actual path we are starting to scan then start 
        // To scan that folder after.
        console.log("Started to Monitor " + config.filepaths.MI); mi.command_mi(0);
        console.log("Started to Monitor " + config.filepaths.IL); il.command_il(0);
        console.log("Started to Monitor " + config.filepaths.NC); nc.command_nc(0);
        console.log("Started to Monitor " + config.filepaths.MO); mo.command_mo(0);
        console.log("Started to Monitor " + config.filepaths.CA); ca.command_ca(0);
        console.log("Started to Monitor " + config.filepaths.TX); tx.command_tx(0);
        console.log("Started to Monitor " + config.filepaths.MN); mn.command_mn(0);
        console.log("Started to Monitor " + config.filepaths.CT); ct.command_ct(0);
        console.log("Started to Monitor " + config.filepaths.MD); md.command_md(0);
        console.log("Started to Monitor " + config.filepaths.FL); fl.command_fl(0);
        console.log("Started to Monitor " + config.filepaths.TN); tn.command_tn(0);
        console.log("Started to Monitor " + config.filepaths.CSH); csh.command_csh(0);
        console.log("Started to Monitor " + config.filepaths.EMW); emw.command_emw(0);
        console.log(`${client.user.username} has loaded correctly and is online!`);
 });

/*****************************************************
 *             Collect Last PickTicket               *
 ****************************************************/
/*client.on('message', message => {
    // Bring over channels used
    var botspamChannel = client.channels.find(channel => channel.id === config.channels.botspam);
    var mostrecentChannel = client.channels.find(channel => channel.id === config.channels.mostrecent);

        
        let filter = m => true;
        let collector = new Discord.MessageCollector(mostrecentChannel, filter, 1);
        let counter = 0;
        collector.on('collect', (message, col) => {
            console.log("Message Collected:" + message.timestamp);
            botspamChannel.send("Message Collected:" + message.timestamp);
        });
    

});*/


/*****************************************************
 *                  Client Events                    *
 ****************************************************/
fs.readdir("./events/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        const event = require(`./events/${file}`);
        let eventName = file.split(".")[0];
        client.on(eventName, event.bind(null, client));
    });
});

fs.readdir("./commands/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        if (!file.endsWith(".js")) return;
        let props = require(`./commands/${file}`);
        let commandName = file.split(".")[0];
        console.log(`Attempting to load command ${commandName}`);
        client.commands.set(commandName, props);
    });
});

client.login(config.bot.token);