const fs = require('fs');
const Discord = require('discord.js');
const Enmap = require("enmap");
const config = require('./config.js');
const client = new Discord.Client();

// We also need to make sure we're attaching the config to the CLIENT so it's accessible everywhere!
client.config = config;
client.commands = new Enmap();
global.globalClient = client;

// Bring over all location commands
const ca = require('./commands/ca.js'); const csh = require('./commands/csh.js');
const ct = require('./commands/ct.js'); const emw = require('./commands/emw.js');
const fl = require('./commands/fl.js'); const il = require('./commands/il.js');
const md = require('./commands/md.js'); const mi = require('./commands/mi.js');
const mn = require('./commands/mn.js'); const mo = require('./commands/mo.js');
const nc = require('./commands/nc.js'); const tn = require('./commands/tn.js');
const tx = require('./commands/tx.js');

client.on("ready", () => {
    console.log(`${client.user.username} has loaded correctly and is online!`);
    client.user.setActivity(`PEMS | ${config.bot.prefix}`);
    var statuschannel = client.channels.find(channel => channel.id === config.channels.status);
    
    //Display alerts in channel and console in location is active

        statuschannel.send({
            embed: { color: 0x2ecc71, title: "Monitoring Has Started!",
                fields: [
                    { name: "Michigan Warehouse!:", value: config.filepaths.MI, inline: true },
                    { name: "Illinois Warehouse!:", value: config.filepaths.IL, inline: true},
                    { name: "North Carolina Warehouse!:", value: config.filepaths.NC, inline: true},
                    { name: "Missouri Warehouse!:", value: config.filepaths.MO, inline: true},
                    { name: "California Warehouse!:", value: config.filepaths.CA, inline: true},
                    { name: "Texas Warehouse!:", value: config.filepaths.TX, inline: true},
                    { name: "Minnesota Warehouse!:", value: config.filepaths.MN, inline: true},
                    { name: "Connecticut Warehouse!:", value: config.filepaths.CT, inline: true},
                    { name: "Maryland Warehouse!:", value: config.filepaths.MD, inline: true},
                    { name: "Florida Warehouse!:", value: config.filepaths.FL, inline: true},
                    { name: "Tennessee Warehouse!:", value: config.filepaths.TN, inline: true},
                    { name: "CSH Warehouse!:", value: config.filepaths.CSH, inline: true},
                    { name: "EMW Warehouse!:", value: config.filepaths.EMW, inline: true}
                ],
                timestamp: new Date(), footer: { text: "Current Time Status" }}
        });
        console.log("Directory Monitoring of " + config.filepaths.MI + " has started");
        mi.command_mi(0);
        console.log("Directory Monitoring of " + config.filepaths.IL + " has started");
        il.command_il(0);
        console.log("Directory Monitoring of " + config.filepaths.NC + " has started");
        nc.command_nc(0);
        console.log("Directory Monitoring of " + config.filepaths.MO + " has started");
        mo.command_mo(0);
        console.log("Directory Monitoring of " + config.filepaths.CA + " has started");
        ca.command_ca(0);
        console.log("Directory Monitoring of " + config.filepaths.TX + " has started");
        tx.command_tx(0);
        console.log("Directory Monitoring of " + config.filepaths.MN + " has started");
        mn.command_mn(0);
        console.log("Directory Monitoring of " + config.filepaths.CT + " has started");
        ct.command_ct(0);
        console.log("Directory Monitoring of " + config.filepaths.MD + " has started");
        md.command_md(0);
        console.log("Directory Monitoring of " + config.filepaths.FL + " has started");
        fl.command_fl(0);
        console.log("Directory Monitoring of " + config.filepaths.TN + " has started");
        tn.command_tn(0);
        console.log("Directory Monitoring of " + config.filepaths.CSH + " has started");
        csh.command_csh(0);
        console.log("Directory Monitoring of " + config.filepaths.EMW + " has started"); 
        emw.command_emw(0);
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
//cron.cron_startall();