const { MessageEmbed, splitMessage } = require("discord.js");
const MI = require('./checkMI.js');
const IL = require('./checkIL.js');

module.exports = {
    name: "startall",
    aliases: ['all'],
    description: "Check all warehouse folders.",
    execute() {

        MI;
        console.log("Started Watching MI Folder");
        IL;
        console.log("Started Watching IL Folder");
    }
};


