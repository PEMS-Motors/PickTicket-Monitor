const timeModule = require('../modules/timeCheck.js');

module.exports = {

    /* ------------------------------------------------------------------------------ */
    // Run the time checker 
    /* ------------------------------------------------------------------------------ */

    cron_check_time: function () {
        setInterval(function () {
            timeModule.command_timeCheck(0);
        }, 30000); //Check every 30sec
    }
}