const fs = require('fs');
const Discord = require('discord.js');
const Enmap = require("enmap");
const config = require('./config.js');
const client = new Discord.Client();

// We also need to make sure we're attaching the config to the CLIENT so it's accessible everywhere!
client.config = config;
client.commands = new Enmap();
global.globalClient = client;


var cron = require('./modules/cron.js');

client.on("ready", () => {
    console.log(`${client.user.username} has loaded correctly and is online!`);
    client.user.setActivity(`PEMS | ${config.bot.prefix}`);
    var statuschannel = client.channels.find(channel => channel.id === config.channels.status);
    
            //Display alerts in channel and console in location is active
    if (config.liveLocation.MI) { 
        statuschannel.send({
            embed: { color: 0x2ecc71, title: "Monitoring Has Started!",
                fields: [
                    { name: "Monitoring mapped drive below!:", value: config.filepaths.MI, inline: true },
                    { name: "Monitoring mapped drive below!:", value: config.filepaths.IL, inline: true},
                    { name: "Monitoring mapped drive below!:", value: config.filepaths.NC, inline: true},
                    { name: "Monitoring mapped drive below!:", value: config.filepaths.MO, inline: true},
                    { name: "Monitoring mapped drive below!:", value: config.filepaths.CA, inline: true},
                    { name: "Monitoring mapped drive below!:", value: config.filepaths.TX, inline: true},
                    { name: "Monitoring mapped drive below!:", value: config.filepaths.MN, inline: true},
                    { name: "Monitoring mapped drive below!:", value: config.filepaths.CT, inline: true},
                    { name: "Monitoring mapped drive below!:", value: config.filepaths.MD, inline: true},
                    { name: "Monitoring mapped drive below!:", value: config.filepaths.FL, inline: true},
                    { name: "Monitoring mapped drive below!:", value: config.filepaths.TN, inline: true},
                    { name: "Monitoring mapped drive below!:", value: config.filepaths.CSH, inline: true},
                    { name: "Monitoring mapped drive below!:", value: config.filepaths.EMW, inline: true}
                ],
                timestamp: new Date(), footer: { text: "Current Time Status" }}
        });
        console.log("Directory Monitoring of " + config.filepaths.MI + " has started");
        console.log("Directory Monitoring of " + config.filepaths.IL + " has started");
        console.log("Directory Monitoring of " + config.filepaths.NC + " has started");
        console.log("Directory Monitoring of " + config.filepaths.MO + " has started");
        console.log("Directory Monitoring of " + config.filepaths.CA + " has started");
        console.log("Directory Monitoring of " + config.filepaths.TX + " has started");
        console.log("Directory Monitoring of " + config.filepaths.MN + " has started");
        console.log("Directory Monitoring of " + config.filepaths.CT + " has started");
        console.log("Directory Monitoring of " + config.filepaths.MD + " has started");
        console.log("Directory Monitoring of " + config.filepaths.FL + " has started");
        console.log("Directory Monitoring of " + config.filepaths.TN + " has started");
        console.log("Directory Monitoring of " + config.filepaths.CSH + " has started");
        console.log("Directory Monitoring of " + config.filepaths.EMW + " has started");
    }
});

client.on("warn", (info) => console.log(info));
client.on("error", console.error);


/**
 * Client Events
 */
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
cron.cron_startall();