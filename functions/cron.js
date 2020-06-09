try {
    var config = process.cwd() + '/config.js';
    config = require(config);
} catch (error) {
    console.error('ERROR -> Unable to load config file.');
    process.exit(1);
}

var command = require("./command.js");

/* ------------------------------------------------------------------------------ */
// // // // // // // // // // // // // // // // // // // // // // // // // // // //
/* ------------------------------------------------------------------------------ */

module.exports = {

    /* ------------------------------------------------------------------------------ */
    // Send LCP chain status Message
    /* ------------------------------------------------------------------------------ */

    cron_lcp_chain_status: function () {
        setInterval(function () {
            command.command_testrule(msg);
        }, config.cronTimes.statusLcpCronTime * 1000);
    }


};