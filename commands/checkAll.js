const MI = require('./checkMI.js');
const IL = require('./checkIL.js');
// Imports / Requires
var startMI = require("./checkMI.js");

module.exports = {
    name: "startall",
    aliases: ['all'],
    description: "Check all warehouse folders.",


        startMI.name.startMI.execute(message, args); 
            channel.message.send({
                embed: {
                    color: 0x2ecc71,
                    title: "Monitoring Michigan PickTicket Folder!",
                    fields: [{
                        name: "Monitoring mapped drive below!:",
                        value: miMonitor.root
                    }
                    ],
                    timestamp: new Date(),
                    footer: {
                        text: "Current Time Status"
                    }
                }
            });
        



};


