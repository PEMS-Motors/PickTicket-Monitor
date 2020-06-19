const config = require('../config.js');
const startTimer = require('../index.js');

module.exports = {
    command_timeCheck: function () {
        const checkTimer = new Date();
        const checkPickTicketTimer = checkTimer.getSeconds() - globalStartTime.getSeconds();

        console.log(checkPickTicketTimer);
        console.log('Maybe this is the solution!');
    }
}