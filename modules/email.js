const config = require('../config.js');
const nodemailer = require("nodemailer");

module.exports = {
    command_sendEmail: function emailAlert() { 
        
        var weekday = ['Sunday', 'Monday', 'Tuesdat', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][new Date().getDay()];

        if (weekday === 'Saturday' || weekday === 'Sunday') {
            console.log('Go play, have fun its the weekend!');
            console.log(weekday);

            // Restart the timer since its the weekend
            var weekendTimer = emailAlert;
            global.globalTimer = setTimeout(weekendTimer, 1800000); // 30 mins
            console.log("Restarted the timer since its the weekend and we dont like spam");
        }else{
            var transporter = nodemailer.createTransport({
                service: config.emailsettings.service,
                auth: {
                    user: config.emailsettings.user,
                    pass: config.emailsettings.pass
                }
            });

            var mailOptions = {
                from: config.emailsettings.from,
                to: config.emailsettings.to,
                subject: 'Pick Ticket Monitor',
                text: 'Pick Tickets havent printed in over 30 minutes.'
            };

            transporter.sendMail(mailOptions, function (err, data) {
                if (err) {
                    console.log('Errors have occured');
                } else {
                    conssole.log('Email has been sent out!');

                }
            });

            var generalChat = globalClient.channels.get(config.channels.generalChat);

            generalChat.send({
                embed: {
                    color: 0x2ecc71,
                    title: "Pick Ticket Alert",
                    fields: [{
                        name: "Pick Tickets havent printed in over:",
                        value: '30 minutes, check sage alerts!'
                    }
                    ],
                    timestamp: new Date(),
                    footer: {
                        text: "Current Time"
                    }
                }
            });
        }


        // Print to console and discord if its a weekday
        console.log("PICK TICKETS HAVENT PRINTED IN 3 MINUTES!");




        // Restart the timer if alert has been triggered
        var weekdayTimer = emailAlert;
        global.globalTimer = setTimeout(weekdayTimer, 1800000);
        console.log("Restarted the timer incase issue still is ative with Sage Alerts!");

    }

}