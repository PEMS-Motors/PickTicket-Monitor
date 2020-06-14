const fs = require('fs');
const Discord = require('discord.js');
const Enmap = require("enmap");
const config = require('./config.js');
const client = new Discord.Client();

// We also need to make sure we're attaching the config to the CLIENT so it's accessible everywhere!
client.config = config;
client.commands = new Enmap();
global.globalClient = client;

client.on("ready", () => {
    console.log(`${client.user.username}
    has loaded correctly and is online!`);
    client.user.setActivity(`PEMS | ${config.bot.prefix}`);
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