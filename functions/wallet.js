//var config = require('../config.js');
try {
    var config = process.cwd() + '/config.js';
    config = require(config);
} catch (error) {
    console.error('ERROR -> Unable to load config file.');
    process.exit(1);
}

const Client = require('coinpoolservices-rpc');
const coinClient = new Client({ host: config.wallet.server, username: config.wallet.user, password: config.wallet.password, port: config.wallet.port });

/* ------------------------------------------------------------------------------ */
// // // // // // // // // // // // // // // // // // // // // // // // // // // //
/* ------------------------------------------------------------------------------ */

module.exports = {

    /* ------------------------------------------------------------------------------ */
    // Get wallet info
    /* ------------------------------------------------------------------------------ */

    wallet_get_info: function () {
        return new Promise((resolve, reject) => {
            coinClient.getInfo(function (error, result) {
                if (error) {
                    var errorMessage = "wallet_get_info: Wallet query problem. (getInfo)";
                    if (config.bot.errorLogging) {
                        log.log_write_file(errorMessage);
                        log.log_write_file(error);
                    }
                    log.log_write_console(errorMessage);
                    log.log_write_console(error);
                    resolve('error');
                } else {
                    resolve(result);
                }
            });
        });
    },

    /* ------------------------------------------------------------------------------ */
    // Get wallet info BTC 0.17 RPC
    /* ------------------------------------------------------------------------------ */

    wallet_wallet_info: function () {
        return new Promise((resolve, reject) => {
            coinClient.getWalletInfo(function (error, result) {
                if (error) {
                    var errorMessage = "wallet_wallet_info: Wallet query problem. (getWalletInfo)";
                    if (config.bot.errorLogging) {
                        log.log_write_file(errorMessage);
                        log.log_write_file(error);
                    }
                    log.log_write_console(errorMessage);
                    log.log_write_console(error);
                    resolve('error');
                } else {
                    resolve(result);
                }
            });
        });
    },

    /* ------------------------------------------------------------------------------ */
    // Get network info BTC 0.17 RPC
    /* ------------------------------------------------------------------------------ */

    wallet_network_info: function () {
        return new Promise((resolve, reject) => {
            coinClient.getNetworkInfo(function (error, result) {
                if (error) {
                    var errorMessage = "wallet_network_info: Wallet query problem. (getNetworkInfo)";
                    if (config.bot.errorLogging) {
                        log.log_write_file(errorMessage);
                        log.log_write_file(error);
                    }
                    log.log_write_console(errorMessage);
                    log.log_write_console(error);
                    resolve('error');
                } else {
                    resolve(result);
                }
            });
        });
    },

    /* ------------------------------------------------------------------------------ */
    // Get Rules List
    /* ------------------------------------------------------------------------------ */

    wallet_listrules: function () {
        return new Promise((resolve, reject) => {
            coinClient.listRules(function (error, result) {
                if (error) {
                    var errorMessage = "wallet_rule_info: Wallet query problem. (listRules)";
                    if (config.bot.errorLogging) {
                        log.log_write_file(errorMessage);
                        log.log_write_file(error);
                    }
                    log.log_write_console(errorMessage);
                    log.log_write_console(error);
                    resolve('error');
                } else {
                    resolve(result);
                }
            });
        });
    },

    /* ------------------------------------------------------------------------------ */
    // Bellow are LightcoinPlus Rule testing calls
    /* ------------------------------------------------------------------------------ */

    wallet_testrule_info: function (currentBlock, rule1) {
        return new Promise((resolve, reject) => {
            coinClient.testRule(currentBlock, rule1, function (error, result) {
                if (error) {
                    var errorMessage = "wallet_testrule_info: Wallet query problem. (testRule)";
                    if (config.bot.errorLogging) {
                        log.log_write_file(errorMessage);
                        log.log_write_file(error);
                    }
                    log.log_write_console(errorMessage);
                    log.log_write_console(error);
                    resolve('error');
                } else {
                    resolve(result);
                }
            });
        });
    },

    wallet_testrule2_info: function (currentBlock, rule2) {
        return new Promise((resolve, reject) => {
            coinClient.testRule(currentBlock, rule2, function (error, result) {
                if (error) {
                    var errorMessage = "wallet_testrule_info: Wallet query problem. (testRule)";
                    if (config.bot.errorLogging) {
                        log.log_write_file(errorMessage);
                        log.log_write_file(error);
                    }
                    log.log_write_console(errorMessage);
                    log.log_write_console(error);
                    resolve('error');
                } else {
                    resolve(result);
                }
            });
        });
    },

    wallet_testrule3_info: function (currentBlock, rule3) {
        return new Promise((resolve, reject) => {
            coinClient.testRule(currentBlock, rule3, function (error, result) {
                if (error) {
                    var errorMessage = "wallet_testrule_info: Wallet query problem. (testRule)";
                    if (config.bot.errorLogging) {
                        log.log_write_file(errorMessage);
                        log.log_write_file(error);
                    }
                    log.log_write_console(errorMessage);
                    log.log_write_console(error);
                    resolve('error');
                } else {
                    resolve(result);
                }
            });
        });
    },

    wallet_testrule4_info: function (currentBlock, rule4) {
        return new Promise((resolve, reject) => {
            coinClient.testRule(currentBlock, rule4, function (error, result) {
                if (error) {
                    var errorMessage = "wallet_testrule_info: Wallet query problem. (testRule)";
                    if (config.bot.errorLogging) {
                        log.log_write_file(errorMessage);
                        log.log_write_file(error);
                    }
                    log.log_write_console(errorMessage);
                    log.log_write_console(error);
                    resolve('error');
                } else {
                    resolve(result);
                }
            });
        });
    },

    wallet_testrule5_info: function (currentBlock, rule5) {
        return new Promise((resolve, reject) => {
            coinClient.testRule(currentBlock, rule5, function (error, result) {
                if (error) {
                    var errorMessage = "wallet_testrule_info: Wallet query problem. (testRule)";
                    if (config.bot.errorLogging) {
                        log.log_write_file(errorMessage);
                        log.log_write_file(error);
                    }
                    log.log_write_console(errorMessage);
                    log.log_write_console(error);
                    resolve('error');
                } else {
                    resolve(result);
                }
            });
        });
    },

    wallet_testrule6_info: function (currentBlock, rule6) {
        return new Promise((resolve, reject) => {
            coinClient.testRule(currentBlock, rule6, function (error, result) {
                if (error) {
                    var errorMessage = "wallet_testrule_info: Wallet query problem. (testRule)";
                    if (config.bot.errorLogging) {
                        log.log_write_file(errorMessage);
                        log.log_write_file(error);
                    }
                    log.log_write_console(errorMessage);
                    log.log_write_console(error);
                    resolve('error');
                } else {
                    resolve(result);
                }
            });
        });
    },

    wallet_testrule7_info: function (currentBlock, rule7) {
        return new Promise((resolve, reject) => {
            coinClient.testRule(currentBlock, rule7, function (error, result) {
                if (error) {
                    var errorMessage = "wallet_testrule_info: Wallet query problem. (testRule)";
                    if (config.bot.errorLogging) {
                        log.log_write_file(errorMessage);
                        log.log_write_file(error);
                    }
                    log.log_write_console(errorMessage);
                    log.log_write_console(error);
                    resolve('error');
                } else {
                    resolve(result);
                }
            });
        });
    },

    wallet_testrule8_info: function (currentBlock, rule8) {
        return new Promise((resolve, reject) => {
            coinClient.testRule(currentBlock, rule8, function (error, result) {
                if (error) {
                    var errorMessage = "wallet_testrule_info: Wallet query problem. (testRule)";
                    if (config.bot.errorLogging) {
                        log.log_write_file(errorMessage);
                        log.log_write_file(error);
                    }
                    log.log_write_console(errorMessage);
                    log.log_write_console(error);
                    resolve('error');
                } else {
                    resolve(result);
                }
            });
        });
    },

    /* ------------------------------------------------------------------------------ */
    // Get block chain info (Bot)
    /* ------------------------------------------------------------------------------ */

    wallet_chain_info: function () {
        return new Promise((resolve, reject) => {
            coinClient.getBlockchainInfo(function (error, result) {
                if (error) {
                    var errorMessage = "wallet_chain_info: Wallet query problem. (getBlockchainInfo)";
                    if (config.bot.errorLogging) {
                        log.log_write_file(errorMessage);
                        log.log_write_file(error);
                    }
                    log.log_write_console(errorMessage);
                    log.log_write_console(error);
                    resolve('error');
                } else {
                    resolve(result);
                }
            });
        });
    }

};