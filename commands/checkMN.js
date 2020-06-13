const { MessageEmbed, splitMessage } = require("discord.js");
const channels = require('../channels.js');

module.exports = {
    name: "startmn",
    aliases: ['mn'],
    description: "Check MN warehouse folders.",
    execute(message) {

        // Imports / Requires
        var dirwatch = require("./DirectoryWatcher.js");
        var mnChannel = globalClient.channels.get(channels.locations.MN);

        // Create a monitor object that will watch a directory
        // and all it's sub-directories (recursive) in this case
        // we'll assume you're on a windows machine with a folder 
        // named "sim" on your c: drive.
        // should work on both linux and windows, update the path
        // to some appropriate test directory of your own.
        // you can monitor only a single folder and none of its child
        // directories by simply changing the recursive parameter to
        // to false
        var mnMonitor = new dirwatch.DirectoryWatcher("Z:\\07A-Processed", true);

        // start the monitor and have it check for updates
        // every half second.
        mnMonitor.start(60000);
        
        // Log to the console when a file is removed
        mnMonitor.on("fileRemoved", function (filePath) {
            mnChannel.send({
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
        mnMonitor.on("folderRemoved", function (folderPath) {
            mnChannel.send({
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
        mnMonitor.on("folderAdded", function (folderPath) {
            mnChannel.send({
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
        mnMonitor.on("fileChanged", function (fileDetail, changes) {
            for (var key in changes) {
                mnChannel.send({
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
        mnMonitor.on("fileAdded", function (fileDetail) {            
            mnChannel.send({
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

        mnChannel.send({
            embed: {
                color: 0x2ecc71,
                title: "Monitoring Minnesota PickTicket Folder!",
                fields: [{
                    name: "Monitoring mapped drive below!:",
                    value: mnMonitor.root
                }
                ],
                timestamp: new Date(),
                footer: {
                    text: "Current Time Status"
                }
            }
        });
        // Let us know that directory monitoring is happening and where.
        console.log("Directory Monitoring of " + mnMonitor.root + " has started");

    }
};


