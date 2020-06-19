const sendEmail = require('./email.js');

module.exports = {
    command_restartTimer: function () {
        var startEmailTimer = sendEmail.command_sendEmail;
        global.globalTimer = setTimeout(sendEmail.command_sendEmail, 180000);
        console.log('Just started a new 3m Timer!');
    }
}