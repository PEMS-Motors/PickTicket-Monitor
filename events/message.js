module.exports = (client, message) => {
    // Ignore all bots and prevent endless looping of bot talk
    if (message.author.bot) return;

    // Ignore messages not starting with the prefix (in config.js)
    if (message.content.indexOf(client.config.bot.prefix) !== 0) return;

    // Our standard argument/command name definition.
    const args = message.content.slice(client.config.bot.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    // Grab the command data from the client.commands Enmap
    const cmd = client.commands.get(command);

    // If that command doesn't exist, silently exit and do nothing
    if (!cmd) return;

    // Run the command
    cmd.run(client, message, args);
};