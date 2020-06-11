const { MessageEmbed, splitMessage } = require("discord.js");
const { MostRecent } = require("./config.json");

module.exports = {
    name: "checkRecent",
    aliases: ['r'],
    description: "Most Recent PickTicket.",
    execute(message) {

        // Imports / Requires
        var dirwatch = require("./DirectoryWatcher.js");

        var recentMonitor = new dirwatch.DirectoryWatcher("File Path Here", true);

        // start the monitor and have it check for updates
        // every half second.
        recentMonitor.start(500);

        // log to the console when a folder is added
        recentMonitor.on("folderAdded", function (folderPath) {
            console.log(folderPath);

            message.channel.send({
                embed: {
                    color: 0x2ecc71,
                    title: "Folder Added",
                    fields: [{
                        name: "PickTicket Folder:",
                        value: folderPath
                    }
                    ],
                    timestamp: new Date(),
                    footer: {
                        text: "Current Time"
                    }
                }
            });
        });

        // log to the console when a file is added.
        recentMonitor.on("fileAdded", function (fileDetail) {
            console.log("File Added: " + fileDetail.fullPath);

            message.channel.send({
                embed: {
                    color: 0x2ecc71,
                    title: "New PickTicket",
                    fields: [{
                        name: "PickTicket:",
                        value: fileDetail.fullPath
                    }
                    ],
                    timestamp: new Date(),
                    footer: {
                        text: "Current Time Status"
                    }
                }
            });

        });

        // Let us know that directory monitoring is happening and where.
        console.log("Directory Monitoring of " + recentMonitor.root + " has started");

    }
};
