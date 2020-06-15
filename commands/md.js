const { MessageEmbed, splitMessage } = require("discord.js");
const config = require('../config.js');

exports.run = (client, message, args) => {
    // Imports / Requires
    var dirwatch = require("../modules/DirectoryWatcher.js");
    var locationChannel = globalClient.channels.get(config.locations.MD);
    var deletedChannel = globalClient.channels.get(config.channels.deleted);
    var changedChannel = globalClient.channels.get(config.channels.recentlychanged);

    // Create a monitor object that will watch a directory
    // and all it's sub-directories (recursive) in this case
    // we'll assume you're on a windows machine with a folder 
    // named "sim" on your c: drive.
    // should work on both linux and windows, update the path
    // to some appropriate test directory of your own.
    // you can monitor only a single folder and none of its child
    // directories by simply changing the recursive parameter to
    // to false
    var Monitor = new dirwatch.DirectoryWatcher("Z:\\09A-Processed", true);

    // start the monitor and have it check for updates
    // every half second.
    //Monitor.start(60000);

    // Log to the console when a file is removed
    Monitor.on("fileRemoved", function (filePath) {
        deletedChannel.send({
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
    Monitor.on("folderRemoved", function (folderPath) {
        deletedChannel.send({
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
    Monitor.on("folderAdded", function (folderPath) {
        locationChannel.send({
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
    Monitor.on("fileChanged", function (fileDetail, changes) {
        for (var key in changes) {
            changedChannel.send({
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
    Monitor.on("fileAdded", function (fileDetail) {
        locationChannel.send({
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
    console.log("Finished Scanning MD Folder!");
};