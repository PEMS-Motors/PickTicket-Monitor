module.exports = {
    "bot": {
        "version": "1.0.0", // Current bot version
        "setNewAvatar": false, // Bot does crash if avatar gets changed too often! If you set a new image, set the value to true and the bot sets the new avatar. After change the value back to false!!!!
        "avatar":"./avatar.png", // Set bot avatar img -> local file path
        "gameMessage":"+r | +help", // Message under the bot name in the discord user list
        "adminMode": false, // If enabled the bot only accepts commands from admins
        "commandPrefix": "+", // Bot prefix to trigger the bot <- if symbol changed it needs to get allowed on check.js
        "cooldownTime": 10, // Cooldown a user need to wait between commands in seconds
        "botID": "673172363700994088", // Bot Discord ID - important else it react to own messages 
        "adminIDs": [ "202145535086297088" ], // This discrod user IDs are able to use admin commands and bypass cooldowns
        "moderatorIDs": [ "202145535086297088" ], // This discrod user IDs are able to use moderator commands and bypass cooldowns
        "respondChannelIDs": ["710642672561553457"], // Discord server channel IDs the bot does listen to
        "statusChannelIDs": ["710642672561553457"], // Discord server channel IDs the bot will post chain status 
        "commandIgnor": [""], // commands to ignor because of other bots
        "allowDM": true, // Allow or disable direct messages for commands to the bot with true or false
        "botToken": "NjczMTcyMzYzNzAwOTk0MDg4.Xsqcvw.vzoEQDGlRfqw7Yj2BIGyAw_QWIE", // Discord bot token
    }, 

    "cronTimes": {
        "lastModifiedTime": 30
    },
    "commands": {
        "checkFolder": true
    },
    "filePath": {
        "pickTicketsFolder": "XXX"
    },
    "colors": {
        "normal": "0xecf0f1", // grey
        "success": "0x2ecc71", // green
        "warning": "0xe67e22", // orange
        "error": "0xe74c3c", // red
        "special": "0xE91E63" // pink
    },
    "messages": { // Some messages contain markdown -> http://markdown.de
        // Not command related messages
        "botStarted": "Bot started and online as",
        "adminMode": "Developer mode is enabled. Only admins are allowed to send commands.",
        "DMDisabled": "Direct messages are disabled. Please use the official command channel.",
        "notValidCommand": "This is not a valid command. Type **+help** for a list and try again.",
        "notAllowedCommand": "You are not allowed to use this command!",
        "walletOffline": "The wallet is not reachable. Please try again. \nIf the problem persists after another attempt, please contact the admin.",
        "poolWalletOffline": "The Pool wallet is not reachable. Please try again. \nIf the problem persists after another attempt, please contact the admin.",
        "wentWrong": "Somethig went wrong with your request. Please try again. \nIf the problem persists after another attempt, please contact the admin.",
        "currentlyBlocked": "Please wait until your other task is done before starting another one.",
        "getinfoRemoved": "Getinfo has been removed or is being removed in this rpc version. Turn getinfo to false in commands.",
        "noListRules": "This source doesnt have the listrule from LitecoinPlus source. Turn listrule to false in commands.",

        "help": {
            "title":"Bot commands",

            "checkFolder": "+checkfolder || +cf"
        },

        "title": {
            "warning":"Warning",
            "error":"Something went wrong"
        },


        "checkFolder": {

        }

    }
};
