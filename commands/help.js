const { MessageEmbed, splitMessage } = require("discord.js");
const config = require('../config.js');
const fs = require('fs');

exports.run = (client, message, args) => {
    var helpChannel = globalClient.channels.get(config.channels.help);

    fs.readdir("./commands/", (err, files) => {
        if (err) return console.error(err);
        files.forEach(file => {
            if (!file.endsWith(".js")) return;
            let commandName = file.split(".")[0];
            console.log(`Attempting to load command ${commandName}`);
            channel.message.send({
                embed: {
                    color: 0x2ecc71,
                    title: "All Commands",
                    fields: [{
                        name: "Each command monitors a warehouse listed below.",
                        value: commandName
                    }
                    ],
                    timestamp: new Date(),
                    footer: {
                        text: "Current Time"
                    }
                }
            });

        });
    });
};