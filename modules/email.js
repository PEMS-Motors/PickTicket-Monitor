const restartTimer = require('./restartTimer');

module.exports = {
    command_sendEmail: function () {      
        console.log("PICK TICKETS HAVENT PRINTED IN 3 MINUTES!");
        restartTimer.command_restartTimer(0);

    }
}















/*const { MessageEmbed, splitMessage } = require("discord.js");
const config = require('../config.js');
const nodemailer = require("nodemailer");

exports.run = (client, message, args) => {

    let transport = nodemailer.createTransport(options[, defaults])

    var transport = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
            user: "39c80b9b77a3b9",
            pass: "45a848b85543a0"
        }
    });

    const message = {
        from: 'elonmusk@tesla.com', // Sender address
        to: 'to@email.com',         // List of recipients
        subject: 'Design Your Model S | Tesla', // Subject line
        text: 'Have the most fun you can in a car. Get your Tesla today!' // Plain text body
    };
    transport.sendMail(message, function (err, info) {
        if (err) {
            console.log(err)
        } else {
            console.log(info);
        }
    });

};*/


