const { MessageEmbed, splitMessage } = require("discord.js");

module.exports = {
    name: "checkMI",
    aliases: ['mi'],
    description: "Check the MI Warehouse pick tickets.",
    execute(message) {
        const serverQueue = message.client.queue.get(message.guild.id);

        let queueEmbed = new MessageEmbed()
            .setTitle("EvoBot Music Queue")
            .setDescription(serverQueue.songs.map((song, index) => `${index + 1}. ${song.title}`))
            .setColor("#F8AA2A");

        const splitDescription = splitMessage(description, { maxLength: 2048, char: '\n', prepend: '', append: '' });
        splitDescription.forEach(async m => {
            queueEmbed.setDescription(m);
            message.channel.send(queueEmbed);
        });

    }
};