const fs = require('fs');
const Discord = require('discord.js');
const config = require('./config.js');

const client = new Discord.Client();
client.commands = new Discord.Collection();
global.globalClient = client;

/**
 * Client Events
 */
client.on("ready", () => {
    console.log(`${client.user.username} ready!`);
    client.user.setActivity(`Swag | ${config.prefix}`);
});

client.on("warn", (info) => console.log(info));
client.on("error", console.error);

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.on("message", async (message) => {
    if (message.author.bot) return;
    if (!message.guild) return;

    if (message.content.startsWith(config.prefix)) {
        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const commandName = args.shift().toLowerCase();

        const swearWords = ["shit", "fuck", "ass", "winans"];
        if (swearWords.some(word => message.content.includes(word))) {
            message.reply("Oh no bad work police is here!!!");

        }

        const command =
            client.commands.get(commandName) ||
            client.commands.find((cmd) => cmd.aliases && cmd.aliases.includes(commandName));

        if (!command) return;

        try {
            command.execute(message, args);
        } catch (error) {
            console.error(error);
            message.reply("There was an error executing that command! Psssst learn to code my dude.").catch(console.error);
        }
    }
});

client.login(token);