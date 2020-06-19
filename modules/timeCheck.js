const config = require('../config.js');
const sendEmail = require('./email.js');

module.exports = {
    command_timeCheck: function () {
       // const checkTimer = new Date();
        //const checkPickTicketTimer = checkTimer.getSeconds() - globalStartTime.getSeconds();

        //console.log(checkPickTicketTimer);
        //console.log('Maybe this is the solution!');
        //console.log(globalStartTime.getSeconds() + ' seconds since appliction started!');
        var fireEmail = sendEmail.command_sendEmail;
        var testTimer = setTimeout(fireEmail, 5000);
    }
}