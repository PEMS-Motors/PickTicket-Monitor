const config = require('../config.js');
const ca = require('../commands/ca.js'); const csh = require('../commands/csh.js');
const ct = require('../commands/ct.js'); const emw = require('../commands/emw.js');
const fl = require('../commands/fl.js'); const il = require('../commands/il.js');
const md = require('../commands/md.js'); const mi = require('../commands/mi.js');
const mn = require('../commands/mn.js'); const mo = require('../commands/mo.js');
const nc = require('../commands/nc.js'); const tn = require('../commands/tn.js');
const tx = require('../commands/tx.js');
/* ------------------------------------------------------------------------------ */
// // // // // // // // // // // // // // // // // // // // // // // // // // // //
/* ------------------------------------------------------------------------------ */

module.exports = {

    /* ------------------------------------------------------------------------------ */
    // Start all locations
    /* ------------------------------------------------------------------------------ */
    // Our standard argument/command name definition.

    cron_startall: function () {
        setInterval(function () {
            ca.run(0); csh.run(0); ct.run(0);
            emw.run(0); fl.run(0); il.run(0);
            md.run(0);
            mi.command_mi();
            mn.run(0);
            mo.run(0); nc.run(0); tn.run(0);
            tx.run(0);
        }, 60000);
    }

};