const fs = require('fs')
var config = require('../config.js');


module.exports = {
    name: 'userinfo',
    description: 'Get information about a user.',
    execute(message, client) {
        var dirwatch = require("./util/DirectoryWatcher.js");
        var simMonitor = new dirwatch.DirectoryWatcher("C:\\sim", true);
        // start the monitor and have it check for updates
        // every half second.
        miMonitor.start(500);

        // Log to the console when a file is removed
        miMonitor.on("fileRemoved", function (filePath) {
            console.log("File Deleted: " + filePath);
        }),

        // Log to the console when a folder is removed
            miMonitor.on("folderRemoved", function (folderPath) {
            console.log("Folder Removed: " + folderPath);
        });

        // log to the console when a folder is added
        miMonitor.on("folderAdded", function (folderPath) {
            console.log(folderPath);
        });

        // Log to the console when a file is changed.
        miMonitor.on("fileChanged", function (fileDetail, changes) {
            console.log("File Changed: " + fileDetail.fullPath);
            for (var key in changes) {
                console.log("  + " + key + " changed...");
                console.log("    - From: " + ((changes[key].baseValue instanceof Date) ? changes[key].baseValue.toISOString() : changes[key].baseValue));
                console.log("    - To  : " + ((changes[key].comparedValue instanceof Date) ? changes[key].comparedValue.toISOString() : changes[key].comparedValue));
            }
        });

        // log to the console when a file is added.
        miMonitor.on("fileAdded", function (fileDetail) {
            console.log("File Added: " + fileDetail.fullPath);
        });

    }

};