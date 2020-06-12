const { MessageEmbed, splitMessage } = require("discord.js");

module.exports = {
    name: "checkMI",
    aliases: ['mi'],
    description: "Check the MI Warehouse pick tickets.",
    execute(message) {

        // Imports / Requires
        var dirwatch = require("./DirectoryWatcher.js");

        // Create a monitor object that will watch a directory
        // and all it's sub-directories (recursive) in this case
        // we'll assume you're on a windows machine with a folder 
        // named "sim" on your c: drive.
        // should work on both linux and windows, update the path
        // to some appropriate test directory of your own.
        // you can monitor only a single folder and none of its child
        // directories by simply changing the recursive parameter to
        // to false
        var miMonitor = new dirwatch.DirectoryWatcher("/mnt/picktickets", false);

        // start the monitor and have it check for updates
        // every half second.
        miMonitor.start(500);

        // log to the console when a file is added.
        miMonitor.on("fileAdded", function (fileDetail) {
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

        message.channel.send({
            embed: {
                color: 0x2ecc71,
                title: "MI Monitor Started ",
                fields: [{
                    name: "Pick Ticket Monitor has started watching :",
                    value: miMonitor.root
                }
                ],
                timestamp: new Date(),
                footer: {
                    text: "Current Time Status"
                }
            }
        });
        // Let us know that directory monitoring is happening and where.
        console.log("Directory Monitoring of " + miMonitor.root + " has started");

    }
};


