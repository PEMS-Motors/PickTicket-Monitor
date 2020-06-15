const config = require('../config.js');
/* ------------------------------------------------------------------------------ */
// // // // // // // // // // // // // // // // // // // // // // // // // // // //
/* ------------------------------------------------------------------------------ */

module.exports = {

    /* ------------------------------------------------------------------------------ */
    // Start all locations
    /* ------------------------------------------------------------------------------ */

    cron_startall: function () {
        setInterval(function () {
            commands.ca(0);
            commands.csh(0);
            commands.ct(0);
            commands.emw(0);
            commands.fl(0);
            commands.il(0);
            commands.md(0);
            commands.mi(0);
            commands.mn(0);
            commands.mo(0);
            commands.nc(0);
            commands.tn(0);
            commands.tx(0);
        }, 60000);
    }

};