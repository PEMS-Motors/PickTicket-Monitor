const fs = require('fs');
const Discord = require('discord.js');
const Enmap = require("enmap");
const config = require('./config.js');
const client = new Discord.Client();

// We also need to make sure we're attaching the config to the CLIENT so it's accessible everywhere!
client.config = config;
client.commands = new Enmap();
global.globalClient = client;

var statuschannel = config.channels.status;
var cron = require ('./modules/cron.js')

client.on("ready", () => {
    console.log(`${client.user.username} has loaded correctly and is online!`);
    client.user.setActivity(`PEMS | ${config.bot.prefix}`);

    //Display alerts in channel and console in location is active
    if (config.liveLocation.MI) { 
        statuschannel.send({
            embed: { color: 0x2ecc71, title: "Monitoring Michigan PickTicket Folder!",
                fields: [{ name: "Monitoring mapped drive below!:", value: commands.mi.Monitor.root }],
                timestamp: new Date(), footer: { text: "Current Time Status" }}
            }); console.log("Directory Monitoring of " + commands.mi.Monitor.root + " has started");
    }
    if (config.liveLocation.IL) { 
        statuschannel.send({
            embed: { color: 0x2ecc71, title: "Monitoring Illinois PickTicket Folder!",
                fields: [{ name: "Monitoring mapped drive below!:", value: commands.il.Monitor.root }],
                timestamp: new Date(), footer: { text: "Current Time Status" }}
        }); console.log("Directory Monitoring of " + commands.il.Monitor.root + " has started");
    }
    if (config.liveLocation.NC) { 
        statuschannel.send({
            embed: { color: 0x2ecc71, title: "Monitoring North Carolina PickTicket Folder!",
                fields: [{ name: "Monitoring mapped drive below!:", value: commands.nc.Monitor.root }],
                timestamp: new Date(), footer: { text: "Current Time Status" }}
        }); console.log("Directory Monitoring of " + commands.nc.Monitor.root + " has started");
    }
    if (config.liveLocation.MO) { 
        statuschannel.send({
            embed: { color: 0x2ecc71, title: "Monitoring Missouri PickTicket Folder!",
                fields: [{ name: "Monitoring mapped drive below!:", value: commands.mo.Monitor.root }],
                timestamp: new Date(), footer: { text: "Current Time Status" }}
        }); console.log("Directory Monitoring of " + commands.mo.Monitor.root + " has started");
    }
    if (config.liveLocation.CA) { 
        statuschannel.send({
            embed: { color: 0x2ecc71, title: "Monitoring California PickTicket Folder!",
                fields: [{ name: "Monitoring mapped drive below!:", value: commands.ca.Monitor.root }],
                timestamp: new Date(), footer: { text: "Current Time Status" }}
        }); console.log("Directory Monitoring of " + commands.ca.Monitor.root + " has started");
    }
    if (config.liveLocation.TX) { 
        statuschannel.send({
            embed: { color: 0x2ecc71, title: "Monitoring Texas PickTicket Folder!",
                fields: [{ name: "Monitoring mapped drive below!:", value: commands.tx.Monitor.root }],
                timestamp: new Date(), footer: { text: "Current Time Status" }}
        }); console.log("Directory Monitoring of " + commands.tx.Monitor.root + " has started");
    }
    if (config.liveLocation.MN) { 
        statuschannel.send({
            embed: { color: 0x2ecc71, title: "Monitoring Minnesota PickTicket Folder!",
                fields: [{ name: "Monitoring mapped drive below!:", value: commands.mn.Monitor.root }],
                timestamp: new Date(), footer: { text: "Current Time Status" }}
        }); console.log("Directory Monitoring of " + commands.mn.Monitor.root + " has started");
    }
    if (config.liveLocation.CT) { 
        statuschannel.send({
            embed: { color: 0x2ecc71, title: "Monitoring Connecticut PickTicket Folder!",
                fields: [{ name: "Monitoring mapped drive below!:", value: commands.ct.Monitor.root }],
                timestamp: new Date(), footer: { text: "Current Time Status" }}
        }); console.log("Directory Monitoring of " + commands.ct.Monitor.root + " has started");
    }
    if (config.liveLocation.MD) { 
        statuschannel.send({
            embed: { color: 0x2ecc71, title: "Monitoring Maryland PickTicket Folder!",
                fields: [{ name: "Monitoring mapped drive below!:", value: commands.md.Monitor.root }],
                timestamp: new Date(), footer: { text: "Current Time Status" }}
        }); console.log("Directory Monitoring of " + commands.md.Monitor.root + " has started");
    }
    if (config.liveLocation.FL) { 
        statuschannel.send({
            embed: { color: 0x2ecc71, title: "Monitoring Florida PickTicket Folder!",
                fields: [{ name: "Monitoring mapped drive below!:", value: commands.fl.Monitor.root }],
                timestamp: new Date(), footer: { text: "Current Time Status" }}
        }); console.log("Directory Monitoring of " + commands.fl.Monitor.root + " has started");
    }
    if (config.liveLocation.TN) { 
        statuschannel.send({
            embed: { color: 0x2ecc71, title: "Monitoring Tennessee PickTicket Folder!",
                fields: [{ name: "Monitoring mapped drive below!:", value: commands.tn.Monitor.root }],
                timestamp: new Date(), footer: { text: "Current Time Status" }}
        }); console.log("Directory Monitoring of " + commands.tn.Monitor.root + " has started");
    }
    if (config.liveLocation.CSH) { 
        statuschannel.send({
            embed: { color: 0x2ecc71, title: "Monitoring CSH PickTicket Folder!",
                fields: [{ name: "Monitoring mapped drive below!:", value: commands.csh.Monitor.root }],
                timestamp: new Date(), footer: { text: "Current Time Status" }}
        }); console.log("Directory Monitoring of " + commands.csh.Monitor.root + " has started");
    }
    if (config.liveLocation.EMW) { 
        statuschannel.send({
            embed: { color: 0x2ecc71, title: "Monitoring EMW PickTicket Folder!",
                fields: [{ name: "Monitoring mapped drive below!:", value: commands.emw.Monitor.root }],
                timestamp: new Date(), footer: { text: "Current Time Status" }}
        }); console.log("Directory Monitoring of " + commands.csh.Monitor.root + " has started");
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