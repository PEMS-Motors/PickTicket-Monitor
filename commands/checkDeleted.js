const { MessageEmbed, splitMessage } = require("discord.js");

module.exports = {
    name: "checkDeleted",
    aliases: ['d'],
    description: "Check for deleted files / folders.",
    execute(message) {

        // Imports / Requires
        var dirwatch = require("./DirectoryWatcher.js");

        var dMonitor = new dirwatch.DirectoryWatcher("File Path Here", true);

        // start the monitor and have it check for updates
        // every half second.
        dMonitor.start(500);

        // Log to the console when a file is removed
        dMonitor.on("fileRemoved", function (filePath) {
            console.log("File Deleted: " + filePath);

            message.channel.send({
                embed: {
                    color: 0x2ecc71,
                    title: "PickTicket Deleted",
                    fields: [{
                        name: "PickTicket:",
                        value: filePath
                    }
                    ],
                    timestamp: new Date(),
                    footer: {
                        text: "Current Time"
                    }
                }
            });
        });

        // Log to the console when a folder is removed
        dMonitor.on("folderRemoved", function (folderPath) {
            console.log("Folder Removed: " + folderPath);

            message.channel.send({
                embed: {
                    color: 0x2ecc71,
                    title: "Folder Deleted",
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
        // Let us know that directory monitoring is happening and where.
        console.log("Directory Monitoring of " + dMonitor.root + " has started");

    }
};