const config = require('../config.js');


module.exports = {
    message.channel.fetchMessage(messageID).then(messagea => {
        let reportEmbed = new Discord.RichEmbed()
            .setTitle("Reports")
            .setColor("#F7E533")
            .addField("Message", messagea.content)
            .addField("Reported User", `@${messagea.author}`)
            .addField("Reported By", `${message.author} with ID: ${message.author.id}`)
            .addField("Time", message.createdAt)
        let mostrecent = message.guild.channels.find(`name`, config.channel.mostrecent);
        if (!mostrecent) return message.channel.send("Couldn't find reports channel.");

        message.delete().catch(O_o => { });
        mostrecent.send(reportEmbed);
        message.delete();
        return;
    })
}