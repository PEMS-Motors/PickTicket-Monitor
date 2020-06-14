const { MessageEmbed, splitMessage } = require("discord.js");
const config = require('../config.js');

module.exports = {
    name: "startfl",
    aliases: ['fl'],
    description: "Check FL warehouse folders.",
    execute(message) {

        // Imports / Requires
        var dirwatch = require("./DirectoryWatcher.js");
        var flChannel = globalClient.channels.get(config.locations.FL);

        // Create a monitor object that will watch a directory
        // and all it's sub-directories (recursive) in this case
        // we'll assume you're on a windows machine with a folder 
        // named "sim" on your c: drive.
        // should work on both linux and windows, update the path
        // to some appropriate test directory of your own.
        // you can monitor only a single folder and none of its child
        // directories by simply changing the recursive parameter to
        // to false
        var flMonitor = new dirwatch.DirectoryWatcher("Z:\\10A-Processed", true);

        // start the monitor and have it check for updates
        // every half second.
        flMonitor.start(60000);
        
        // Log to the console when a file is removed
        flMonitor.on("fileRemoved", function (filePath) {
            flChannel.send({
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
            console.log("File Deleted: " + filePath);
        });

        // Log to the console when a folder is removed
        flMonitor.on("folderRemoved", function (folderPath) {
            flChannel.send({
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
            console.log("Folder Removed: " + folderPath);
        });

        // log to the console when a folder is added
        flMonitor.on("folderAdded", function (folderPath) {
            flChannel.send({
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
            console.log(folderPath);
        });

        // Log to the console when a file is changed.
        flMonitor.on("fileChanged", function (fileDetail, changes) {
            for (var key in changes) {
                flChannel.send({
                    embed: {
                        color: 0x2ecc71,
                        title: "File Changed",
                        description: "  + " + key + " changed...",
                        fields: [{
                            name: "    - From: ",
                            value: ((changes[key].baseValue instanceof Date) ? changes[key].baseValue.toISOString() : changes[key].baseValue)
                        },
                        {
                            name: "    - To  : ",
                            value: ((changes[key].comparedValue instanceof Date) ? changes[key].comparedValue.toISOString() : changes[key].comparedValue)
                        }
                        ],
                        timestamp: new Date(),
                        footer: {
                            text: "Current Time"
                        }
                    }
                });
                console.log("File Changed: " + fileDetail.fullPath);
                console.log("  + " + key + " changed...");
                console.log("    - From: " + ((changes[key].baseValue instanceof Date) ? changes[key].baseValue.toISOString() : changes[key].baseValue));
                console.log("    - To  : " + ((changes[key].comparedValue instanceof Date) ? changes[key].comparedValue.toISOString() : changes[key].comparedValue));
            }

        });

        // log to the console when a file is added.
        flMonitor.on("fileAdded", function (fileDetail) {            
            flChannel.send({
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
            console.log("File Added: " + fileDetail.fullPath);
        });

        flChannel.send({
            embed: {
                color: 0x2ecc71,
                title: "Monitoring Florida PickTicket Folder!",
                fields: [{
                    name: "Monitoring mapped drive below!:",
                    value: flMonitor.root
                }
                ],
                timestamp: new Date(),
                footer: {
                    text: "Current Time Status"
                }
            }
        });
        // Let us know that directory monitoring is happening and where.
        console.log("Directory Monitoring of " + flMonitor.root + " has started");

    }
};


