const config = require('../config.js');
const nodemailer = require("nodemailer");
const index = require('../index.js');

module.exports = {
    command_sendEmail: function emailAlert() { 

        var weekday = ['Sunday', 'Monday', 'Tuesdat', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][new Date().getDay()];

        if (weekday === 'Saturday' || weekday === 'Sunday') {
            console.log('Go play, have fun its the weekend!');
            console.log(weekday);

            // Restart the timer since its the weekend
            var weekendTimer = emailAlert;
            global.globalTimer = setTimeout(weekendTimer, 5000);
            console.log("Restarted the timer since its the weekend and we dont like spam");
        }else{
            // Generate SMTP service account from ethereal.email
            nodemailer.createTestAccount((err, account) => {
                if (err) {
                    console.error('Failed to create a testing account');
                    console.error(err);
                    return process.exit(1);
                }

                console.log('Credentials obtained, sending message...');

                // NB! Store the account object values somewhere if you want
                // to re-use the same account for future mail deliveries

                // Create a SMTP transporter object
                let transporter = nodemailer.createTransport(
                    {
                        host: account.smtp.host,
                        port: account.smtp.port,
                        secure: account.smtp.secure,
                        auth: {
                            user: account.user,
                            pass: account.pass
                        },
                        logger: true,
                        debug: false // include SMTP traffic in the logs
                    },
                    {
                        // default message fields

                        // sender info
                        from: 'Nodemailer <example@nodemailer.com>',
                        headers: {
                            'X-Laziness-level': 1000 // just an example header, no need to use this
                        }
                    }
                );

                // Message object
                let message = {
                    // Comma separated list of recipients
                    to: 'Nodemailer <example@nodemailer.com>',

                    // Subject of the message
                    subject: 'Nodemailer is unicode friendly ✔' + Date.now(),

                    // plaintext body
                    text: 'Hello to myself!',

                    // HTML body
                    html: `<p><b>Hello</b> to myself</p>`,

                    list: {
                        // List-Help: <mailto:admin@example.com?subject=help>
                        help: 'admin@example.com?subject=help',

                        // List-ID: "comment" <example.com>
                        id: {
                            url: 'mylist.example.com',
                            comment: 'This is my awesome list'
                        }
                    }
                };

                transporter.sendMail(message, (error, info) => {
                    if (error) {
                        console.log('Error occurred');
                        console.log(error.message);
                        return process.exit(1);
                    }

                    console.log('Message sent successfully!');
                    console.log(nodemailer.getTestMessageUrl(info));

                    // only needed when using pooled connections
                    transporter.close();
                });
            });
        }


        // Print to console and discord if its a weekday
        console.log("PICK TICKETS HAVENT PRINTED IN 3 MINUTES!");




        // Restart the timer if alert has been triggered
        var weekdayTimer = emailAlert;
        global.globalTimer = setTimeout(weekdayTimer, 120000);
        console.log("Restarted the timer incase issue still is ative with Sage Alerts!");

    }

}